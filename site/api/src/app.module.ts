import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ImageModule as ImageModuleOld } from "./image/image.module"
import { MediaModule } from "./media/media.module"
import { GraphQLModule } from "@nestjs/graphql"
import { PrismaModule } from "./prisma/prisma.module"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { ConfigModule } from "@nestjs/config"
import { UserModule } from './user/user.module';
import { AppearanceModule } from './appearance/appearance.module';
import { PersonService } from './person/person.service';
import { PersonModule } from './person/person.module';
import { UploaderService } from './uploader/uploader.service';
import { UploaderModule } from './uploader/uploader.module';
import { S3Module } from './s3/s3.module';
import { ImgproxyModule } from './imgproxy/imgproxy.module';
import * as path from "node:path"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.development.local", ".env.development", ".env"],
      isGlobal: true,
    }),
    PrismaModule,
    MediaModule,
    ImageModuleOld,
    ConfigModule,
    UserModule,
    AppearanceModule,
    PersonModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      autoSchemaFile: path.join(process.cwd(), "src/__generated__/schema.gql"),
    }),
    UploaderModule,
    S3Module,
    ImgproxyModule,
  ],
  exports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, PersonService, UploaderService],
})
export class AppModule {}
