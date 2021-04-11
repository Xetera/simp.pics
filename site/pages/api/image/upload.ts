import { handle, withFileUpload, withUser } from "@/lib/middleware";
import {
  canPerceptualHash,
  convertImage,
  dominantColors,
  mimetypeMappings,
  perceptualHash,
  sha256Hash,
} from "@/lib/file";
import { uploadParsedFiles } from "@/lib/wasabi";
import mimeType from "mime-types";
import sizeOf from "image-size";
import { Appearance, Person, Image, Prisma, MimeType } from "@prisma/client";
import idgen from "nanoid";
import { imageFindOptions, sdk } from "@/lib/data-fetching";
import { amqpPromise, sendImageToFaceRecognition } from "@/lib/amqp";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handle(
  withUser(
    withFileUpload(async (_req, res, { upload, db, user, contextType }) => {
      try {
        const { files, fields } = upload;
        const [file] = files;
        const { ireneBotImageId, ireneBotIdolId, ireneBotIdolName } = fields;
        const tags = fields.tags ? fields.tags.split(",") : [];
        const source = fields.source;
        const isPublic = fields?.public === "true" ?? false;
        const nsfw = fields?.nsfw === "true" ?? false;
        if (!file) {
          return res.status(400).json({ error: "'file' missing" });
        }
        const metadata = sizeOf(file.buffer);
        if (!metadata.type) {
          return res.json({ error: "invalid file type" });
        }
        console.log({ metadata });
        const parsedMimetype = metadata.type.toUpperCase();
        if (!(parsedMimetype in MimeType)) {
          return res.json({ error: `Invalid mimetype: ${metadata.type}` });
        }
        const webp = await convertImage(
          file.buffer,
          metadata.type.toUpperCase() as MimeType
        );

        const { format, height, width } = webp.info;
        // return;
        const buffer = webp.data;
        const slug = idgen.nanoid(16);
        const slugWithExtension = `${slug}.${format}`;
        const mime = mimeType.lookup(format);
        if (mime === false) {
          return res.json({ error: "invalid file type" });
        }
        const [pHash, hash, palette, uploadResult] = await Promise.all([
          canPerceptualHash(format)
            ? perceptualHash(buffer, mime)
            : Promise.resolve(),
          sha256Hash(buffer),
          // using the old buffer here as it's the most compatible with the lib
          dominantColors(file.buffer, metadata.type).catch((err) => {
            console.log(err);
          }),
          uploadParsedFiles([
            {
              ...file,
              path: slugWithExtension,
              mimetype: mime || "image/webp",
            },
          ]),
        ]);
        if (uploadResult.$response.error) {
          return console.log(uploadResult.$response.error);
        }
        const databaseType = mimetypeMappings[format];
        if (!databaseType) {
          return res
            .status(400)
            .json({ error: `unsupported type '${format}'` });
        }
        if (!width || !height) {
          return res
            .status(400)
            .json({ error: `Could not determine the dimensions of the image` });
        }
        const image = await db.image.create({
          select: {
            id: true,
            ...imageFindOptions.select,
          },
          data: {
            ireneBotId: ireneBotImageId ? Number(ireneBotImageId) : undefined,
            fileName: file.originalname,
            width,
            height,
            uploadType: contextType,
            mimetype: databaseType,
            pHash: pHash as string | undefined,
            hash: hash as string,
            public: isPublic,
            bytes: file.size,
            source,
            isNsfw: nsfw,
            slug,
            ...(palette ? { palette } : {}),
            user: {
              connect: { email: user.email ?? undefined },
            },
            tags: {
              create: tags.map((tag) => {
                return {
                  source: "USER",
                  name: tag,
                  addedBy: {
                    connect: {
                      id: user.id,
                    },
                  },
                };
              }),
            },
          },
        });
        let existingPerson: Person | undefined = ireneBotIdolId
          ? (await db.person.findUnique({
              where: { ireneBotId: Number(ireneBotIdolId) },
            })) ?? undefined
          : undefined;

        if (ireneBotIdolName && !existingPerson) {
          existingPerson = await db.person.create({
            data: {
              ireneBotId: ireneBotIdolId ? Number(ireneBotIdolId) : undefined,
              name: ireneBotIdolName,
            },
          });
        }

        if (existingPerson) {
          await db.appearance.create({
            data: {
              image: {
                connect: {
                  id: image.id,
                },
              },
              person: {
                connect: {
                  id: existingPerson.id,
                },
              },
              addedBy: {
                connect: {
                  id: user!.id,
                },
              },
            },
          });
        }

        // we cannot use graphql so we have to pretend that the result is
        // a graphql response lmfao
        const result = await sdk.getUploadResult({ slug: image.slug });
        sendImageToFaceRecognition(image.slug, {
          ireneBotIdolId: ireneBotIdolId ? Number(ireneBotIdolId) : undefined,
          ireneBotImageId: ireneBotImageId
            ? Number(ireneBotImageId)
            : undefined,
        }).catch((err) => {
          console.error(err);
        });
        return res.json(result.image);
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }),
    { strict: true }
  )
);
