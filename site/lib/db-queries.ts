import { prisma } from "./db"
import { Prisma } from "@prisma/client"

export type SimilarImage = {
  type: "image" | "discovered"
  id: number
  distance: /* float */ number
}

export const similarImagesQuery = async (
  hash: Uint8Array,
  limit = 5
): Promise<SimilarImage[]> => {
  const data: SimilarImage[] = await prisma.$queryRaw`${Prisma.raw(`
    SELECT
      'image' as type,
      id,
      p_hash_2 <-> CUBE(ARRAY[${hash.join(",")}]) as distance
    FROM images
    UNION
    SELECT
      'discovered' as type,
      id,
      p_hash <-> CUBE(ARRAY[${hash.join(",")}]) as distance
    FROM discovered_images
    ORDER BY distance asc nulls last
    LIMIT ${limit}
  `)}`
  return data
}

export type HomepageRaw = { id: number }

export const homepageQuery = (): Promise<HomepageRaw[]> => {
  return prisma.$queryRaw`SELECT p.id, p.name FROM persons p
  INNER JOIN appearances a on p.id = a.person_id
  INNER JOIN images i on a.image_id = i.id
  WHERE EXISTS(SELECT id FROM appearances where image_id = i.id)
  group by p.id
  ORDER BY (
      SELECT i2.created_at FROM images i2
      INNER JOIN appearances a2 on i2.id = a2.image_id
          INNER JOIN persons p2 on p.id = a2.person_id
      WHERE EXISTS(SELECT id from appearances WHERE appearances.person_id = p.id)
      ORDER BY i2.created_at desc LIMIT 1) desc
  LIMIT 5;`
}
