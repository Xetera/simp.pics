/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as PrismaClient from ".prisma/client"
import { Context } from "./../lib/context-type"
import { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AliasListRelationFilter: { // input type
    every?: NexusGenInputs['AliasWhereInput'] | null; // AliasWhereInput
    none?: NexusGenInputs['AliasWhereInput'] | null; // AliasWhereInput
    some?: NexusGenInputs['AliasWhereInput'] | null; // AliasWhereInput
  }
  AliasPersonAliasCompoundUniqueInput: { // input type
    name: string; // String!
    personId: number; // Int!
  }
  AliasWhereInput: { // input type
    AND?: NexusGenInputs['AliasWhereInput'][] | null; // [AliasWhereInput!]
    NOT?: NexusGenInputs['AliasWhereInput'][] | null; // [AliasWhereInput!]
    OR?: NexusGenInputs['AliasWhereInput'][] | null; // [AliasWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    person?: NexusGenInputs['PersonWhereInput'] | null; // PersonWhereInput
    personId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    preferredAliasOf?: NexusGenInputs['PersonWhereInput'] | null; // PersonWhereInput
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  AliasWhereUniqueInput: { // input type
    id?: number | null; // Int
    personAlias?: NexusGenInputs['AliasPersonAliasCompoundUniqueInput'] | null; // AliasPersonAliasCompoundUniqueInput
  }
  AppearanceAppearanceCompoundUniqueInput: { // input type
    imageId: number; // Int!
    personId: number; // Int!
  }
  AppearanceListRelationFilter: { // input type
    every?: NexusGenInputs['AppearanceWhereInput'] | null; // AppearanceWhereInput
    none?: NexusGenInputs['AppearanceWhereInput'] | null; // AppearanceWhereInput
    some?: NexusGenInputs['AppearanceWhereInput'] | null; // AppearanceWhereInput
  }
  AppearanceWhereInput: { // input type
    AND?: NexusGenInputs['AppearanceWhereInput'][] | null; // [AppearanceWhereInput!]
    NOT?: NexusGenInputs['AppearanceWhereInput'][] | null; // [AppearanceWhereInput!]
    OR?: NexusGenInputs['AppearanceWhereInput'][] | null; // [AppearanceWhereInput!]
    addedBy?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    addedById?: NexusGenInputs['IntFilter'] | null; // IntFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    faces?: NexusGenInputs['FaceListRelationFilter'] | null; // FaceListRelationFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    imageId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    person?: NexusGenInputs['PersonWhereInput'] | null; // PersonWhereInput
    personId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  AppearanceWhereUniqueInput: { // input type
    appearance?: NexusGenInputs['AppearanceAppearanceCompoundUniqueInput'] | null; // AppearanceAppearanceCompoundUniqueInput
    id?: number | null; // Int
  }
  BoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  DateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  EnumFaceSourceFilter: { // input type
    equals?: NexusGenEnums['FaceSource'] | null; // FaceSource
    in?: NexusGenEnums['FaceSource'][] | null; // [FaceSource!]
    not?: NexusGenInputs['NestedEnumFaceSourceFilter'] | null; // NestedEnumFaceSourceFilter
    notIn?: NexusGenEnums['FaceSource'][] | null; // [FaceSource!]
  }
  EnumMimeTypeFilter: { // input type
    equals?: NexusGenEnums['MimeType'] | null; // MimeType
    in?: NexusGenEnums['MimeType'][] | null; // [MimeType!]
    not?: NexusGenInputs['NestedEnumMimeTypeFilter'] | null; // NestedEnumMimeTypeFilter
    notIn?: NexusGenEnums['MimeType'][] | null; // [MimeType!]
  }
  EnumTagSourceFilter: { // input type
    equals?: NexusGenEnums['TagSource'] | null; // TagSource
    in?: NexusGenEnums['TagSource'][] | null; // [TagSource!]
    not?: NexusGenInputs['NestedEnumTagSourceFilter'] | null; // NestedEnumTagSourceFilter
    notIn?: NexusGenEnums['TagSource'][] | null; // [TagSource!]
  }
  EnumUploadTypeFilter: { // input type
    equals?: NexusGenEnums['UploadType'] | null; // UploadType
    in?: NexusGenEnums['UploadType'][] | null; // [UploadType!]
    not?: NexusGenInputs['NestedEnumUploadTypeFilter'] | null; // NestedEnumUploadTypeFilter
    notIn?: NexusGenEnums['UploadType'][] | null; // [UploadType!]
  }
  FaceListRelationFilter: { // input type
    every?: NexusGenInputs['FaceWhereInput'] | null; // FaceWhereInput
    none?: NexusGenInputs['FaceWhereInput'] | null; // FaceWhereInput
    some?: NexusGenInputs['FaceWhereInput'] | null; // FaceWhereInput
  }
  FaceWhereInput: { // input type
    AND?: NexusGenInputs['FaceWhereInput'][] | null; // [FaceWhereInput!]
    NOT?: NexusGenInputs['FaceWhereInput'][] | null; // [FaceWhereInput!]
    OR?: NexusGenInputs['FaceWhereInput'][] | null; // [FaceWhereInput!]
    addedBy?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    addedById?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    appearance?: NexusGenInputs['AppearanceWhereInput'] | null; // AppearanceWhereInput
    appearanceId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    height?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    imageId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    person?: NexusGenInputs['PersonWhereInput'] | null; // PersonWhereInput
    personId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    score?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    source?: NexusGenInputs['EnumFaceSourceFilter'] | null; // EnumFaceSourceFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    width?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    x?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    y?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
  }
  FaceWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  FloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  ImageLikeListRelationFilter: { // input type
    every?: NexusGenInputs['ImageLikeWhereInput'] | null; // ImageLikeWhereInput
    none?: NexusGenInputs['ImageLikeWhereInput'] | null; // ImageLikeWhereInput
    some?: NexusGenInputs['ImageLikeWhereInput'] | null; // ImageLikeWhereInput
  }
  ImageLikeWhereInput: { // input type
    AND?: NexusGenInputs['ImageLikeWhereInput'][] | null; // [ImageLikeWhereInput!]
    NOT?: NexusGenInputs['ImageLikeWhereInput'][] | null; // [ImageLikeWhereInput!]
    OR?: NexusGenInputs['ImageLikeWhereInput'][] | null; // [ImageLikeWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    imageId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  ImageListRelationFilter: { // input type
    every?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    none?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    some?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
  }
  ImageOrderByInput: { // input type
    bytes?: NexusGenEnums['SortOrder'] | null; // SortOrder
    caption?: NexusGenEnums['SortOrder'] | null; // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    faceScanDate?: NexusGenEnums['SortOrder'] | null; // SortOrder
    faceScanRequestDate?: NexusGenEnums['SortOrder'] | null; // SortOrder
    fileName?: NexusGenEnums['SortOrder'] | null; // SortOrder
    hash?: NexusGenEnums['SortOrder'] | null; // SortOrder
    height?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    ireneBotId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    isNsfw?: NexusGenEnums['SortOrder'] | null; // SortOrder
    mimetype?: NexusGenEnums['SortOrder'] | null; // SortOrder
    pHash?: NexusGenEnums['SortOrder'] | null; // SortOrder
    palette?: NexusGenEnums['SortOrder'] | null; // SortOrder
    public?: NexusGenEnums['SortOrder'] | null; // SortOrder
    slug?: NexusGenEnums['SortOrder'] | null; // SortOrder
    source?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    uploadType?: NexusGenEnums['SortOrder'] | null; // SortOrder
    userId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    views?: NexusGenEnums['SortOrder'] | null; // SortOrder
    width?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  ImageWhereInput: { // input type
    AND?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    NOT?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    OR?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    appearances?: NexusGenInputs['AppearanceListRelationFilter'] | null; // AppearanceListRelationFilter
    bytes?: NexusGenInputs['IntFilter'] | null; // IntFilter
    caption?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    faceScanDate?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    faceScanRequestDate?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    faces?: NexusGenInputs['FaceListRelationFilter'] | null; // FaceListRelationFilter
    fileName?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    hash?: NexusGenInputs['StringFilter'] | null; // StringFilter
    height?: NexusGenInputs['IntFilter'] | null; // IntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    ireneBotId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    isNsfw?: NexusGenInputs['BoolFilter'] | null; // BoolFilter
    likes?: NexusGenInputs['ImageLikeListRelationFilter'] | null; // ImageLikeListRelationFilter
    mimetype?: NexusGenInputs['EnumMimeTypeFilter'] | null; // EnumMimeTypeFilter
    pHash?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    palette?: NexusGenInputs['IntNullableListFilter'] | null; // IntNullableListFilter
    public?: NexusGenInputs['BoolFilter'] | null; // BoolFilter
    slug?: NexusGenInputs['StringFilter'] | null; // StringFilter
    source?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    tags?: NexusGenInputs['TagListRelationFilter'] | null; // TagListRelationFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    uploadType?: NexusGenInputs['EnumUploadTypeFilter'] | null; // EnumUploadTypeFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    views?: NexusGenInputs['IntFilter'] | null; // IntFilter
    width?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  ImageWhereUniqueInput: { // input type
    id?: number | null; // Int
    ireneBotId?: number | null; // Int
    slug?: string | null; // String
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  IntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  IntNullableListFilter: { // input type
    equals?: number[] | null; // [Int!]
    has?: number | null; // Int
    hasEvery?: number[] | null; // [Int!]
    hasSome?: number[] | null; // [Int!]
    isEmpty?: boolean | null; // Boolean
  }
  NestedBoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedDateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedEnumFaceSourceFilter: { // input type
    equals?: NexusGenEnums['FaceSource'] | null; // FaceSource
    in?: NexusGenEnums['FaceSource'][] | null; // [FaceSource!]
    not?: NexusGenInputs['NestedEnumFaceSourceFilter'] | null; // NestedEnumFaceSourceFilter
    notIn?: NexusGenEnums['FaceSource'][] | null; // [FaceSource!]
  }
  NestedEnumMimeTypeFilter: { // input type
    equals?: NexusGenEnums['MimeType'] | null; // MimeType
    in?: NexusGenEnums['MimeType'][] | null; // [MimeType!]
    not?: NexusGenInputs['NestedEnumMimeTypeFilter'] | null; // NestedEnumMimeTypeFilter
    notIn?: NexusGenEnums['MimeType'][] | null; // [MimeType!]
  }
  NestedEnumTagSourceFilter: { // input type
    equals?: NexusGenEnums['TagSource'] | null; // TagSource
    in?: NexusGenEnums['TagSource'][] | null; // [TagSource!]
    not?: NexusGenInputs['NestedEnumTagSourceFilter'] | null; // NestedEnumTagSourceFilter
    notIn?: NexusGenEnums['TagSource'][] | null; // [TagSource!]
  }
  NestedEnumUploadTypeFilter: { // input type
    equals?: NexusGenEnums['UploadType'] | null; // UploadType
    in?: NexusGenEnums['UploadType'][] | null; // [UploadType!]
    not?: NexusGenInputs['NestedEnumUploadTypeFilter'] | null; // NestedEnumUploadTypeFilter
    notIn?: NexusGenEnums['UploadType'][] | null; // [UploadType!]
  }
  NestedFloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedIntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  PersonWhereInput: { // input type
    AND?: NexusGenInputs['PersonWhereInput'][] | null; // [PersonWhereInput!]
    NOT?: NexusGenInputs['PersonWhereInput'][] | null; // [PersonWhereInput!]
    OR?: NexusGenInputs['PersonWhereInput'][] | null; // [PersonWhereInput!]
    aliases?: NexusGenInputs['AliasListRelationFilter'] | null; // AliasListRelationFilter
    appearances?: NexusGenInputs['AppearanceListRelationFilter'] | null; // AppearanceListRelationFilter
    appearsIn?: NexusGenInputs['FaceListRelationFilter'] | null; // FaceListRelationFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    ireneBotId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    preferredAlias?: NexusGenInputs['AliasWhereInput'] | null; // AliasWhereInput
    preferredAliasId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  RoleListRelationFilter: { // input type
    every?: NexusGenInputs['RoleWhereInput'] | null; // RoleWhereInput
    none?: NexusGenInputs['RoleWhereInput'] | null; // RoleWhereInput
    some?: NexusGenInputs['RoleWhereInput'] | null; // RoleWhereInput
  }
  RoleUserRoleCompoundUniqueInput: { // input type
    name: string; // String!
    userId: number; // Int!
  }
  RoleWhereInput: { // input type
    AND?: NexusGenInputs['RoleWhereInput'][] | null; // [RoleWhereInput!]
    NOT?: NexusGenInputs['RoleWhereInput'][] | null; // [RoleWhereInput!]
    OR?: NexusGenInputs['RoleWhereInput'][] | null; // [RoleWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  RoleWhereUniqueInput: { // input type
    id?: number | null; // Int
    userRole?: NexusGenInputs['RoleUserRoleCompoundUniqueInput'] | null; // RoleUserRoleCompoundUniqueInput
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  TagListRelationFilter: { // input type
    every?: NexusGenInputs['TagWhereInput'] | null; // TagWhereInput
    none?: NexusGenInputs['TagWhereInput'] | null; // TagWhereInput
    some?: NexusGenInputs['TagWhereInput'] | null; // TagWhereInput
  }
  TagWhereInput: { // input type
    AND?: NexusGenInputs['TagWhereInput'][] | null; // [TagWhereInput!]
    NOT?: NexusGenInputs['TagWhereInput'][] | null; // [TagWhereInput!]
    OR?: NexusGenInputs['TagWhereInput'][] | null; // [TagWhereInput!]
    addedBy?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    addedById?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    imageId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    source?: NexusGenInputs['EnumTagSourceFilter'] | null; // EnumTagSourceFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  TagWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    bot?: NexusGenInputs['BoolFilter'] | null; // BoolFilter
    cratedTags?: NexusGenInputs['TagListRelationFilter'] | null; // TagListRelationFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    emailVerified?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    imageLikes?: NexusGenInputs['ImageLikeListRelationFilter'] | null; // ImageLikeListRelationFilter
    images?: NexusGenInputs['ImageListRelationFilter'] | null; // ImageListRelationFilter
    markedFaces?: NexusGenInputs['FaceListRelationFilter'] | null; // FaceListRelationFilter
    name?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    roles?: NexusGenInputs['RoleListRelationFilter'] | null; // RoleListRelationFilter
    taggedAppearances?: NexusGenInputs['AppearanceListRelationFilter'] | null; // AppearanceListRelationFilter
    token?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
}

export interface NexusGenEnums {
  FaceSource: PrismaClient.FaceSource
  ImageConnectionEdge: "IMAGE_TO_PERSON" | "PERSON_TO_IMAGE"
  MimeType: PrismaClient.MimeType
  QueryMode: PrismaClient.QueryMode
  SortOrder: PrismaClient.SortOrder
  TagSource: PrismaClient.TagSource
  UploadType: PrismaClient.UploadType
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Alias: PrismaClient.Alias;
  Appearance: PrismaClient.Appearance;
  Face: PrismaClient.Face;
  Image: PrismaClient.Image;
  ImageConnections: { // root type
    edges: NexusGenRootTypes['ImageEdge'][]; // [ImageEdge!]!
    images: NexusGenRootTypes['Image'][]; // [Image!]!
    people: NexusGenRootTypes['Person'][]; // [Person!]!
  }
  ImageEdge: { // root type
    from: number; // Int!
    to: number; // Int!
    type?: NexusGenEnums['ImageConnectionEdge'] | null; // ImageConnectionEdge
  }
  Mutation: {};
  Person: PrismaClient.Person;
  Query: {};
  QueueInfo: { // root type
    queueSize: number; // Int!
  }
  Role: PrismaClient.Role;
  Tag: PrismaClient.Tag;
  Thumbnail: { // root type
    large: string; // String!
    medium: string; // String!
    small: string; // String!
  }
  User: PrismaClient.User;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Alias: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Appearance: { // field return type
    addedBy: NexusGenRootTypes['User']; // User!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    faces: NexusGenRootTypes['Face'][]; // [Face!]!
    id: number; // Int!
    image: NexusGenRootTypes['Image']; // Image!
    person: NexusGenRootTypes['Person']; // Person!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Face: { // field return type
    addedBy: NexusGenRootTypes['User'] | null; // User
    appearance: NexusGenRootTypes['Appearance'] | null; // Appearance
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    height: number; // Float!
    id: number; // Int!
    image: NexusGenRootTypes['Image']; // Image!
    score: number; // Float!
    source: NexusGenEnums['FaceSource']; // FaceSource!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    width: number; // Float!
    x: number; // Float!
    y: number; // Float!
  }
  Image: { // field return type
    appearances: NexusGenRootTypes['Appearance'][]; // [Appearance!]!
    aspectRatio: number; // Float!
    bytes: number; // Int!
    caption: string | null; // String
    connections: NexusGenRootTypes['ImageConnections']; // ImageConnections!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    faceScanDate: NexusGenScalars['DateTime'] | null; // DateTime
    fileName: string | null; // String
    fileSize: string; // String!
    hash: string; // String!
    height: number; // Int!
    id: number; // Int!
    isNsfw: boolean; // Boolean!
    liked: boolean | null; // Boolean
    mimetype: NexusGenEnums['MimeType']; // MimeType!
    pHash: string | null; // String
    palette: number[]; // [Int!]!
    public: boolean; // Boolean!
    rawUrl: string; // String!
    slug: string; // String!
    source: string | null; // String
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    thumbnail: NexusGenRootTypes['Thumbnail']; // Thumbnail!
    unknownFaces: NexusGenRootTypes['Face'][]; // [Face!]!
    uploadType: NexusGenEnums['UploadType']; // UploadType!
    uploadedBy: NexusGenRootTypes['User'] | null; // User
    url: string; // String!
    views: number; // Int!
    width: number; // Int!
  }
  ImageConnections: { // field return type
    edges: NexusGenRootTypes['ImageEdge'][]; // [ImageEdge!]!
    images: NexusGenRootTypes['Image'][]; // [Image!]!
    people: NexusGenRootTypes['Person'][]; // [Person!]!
  }
  ImageEdge: { // field return type
    from: number; // Int!
    to: number; // Int!
    type: NexusGenEnums['ImageConnectionEdge'] | null; // ImageConnectionEdge
  }
  Mutation: { // field return type
    addAppearance: NexusGenRootTypes['Appearance']; // Appearance!
    linkFace: NexusGenRootTypes['Appearance']; // Appearance!
    removeAppearance: NexusGenRootTypes['Appearance']; // Appearance!
    scanFaces: NexusGenRootTypes['QueueInfo']; // QueueInfo!
    toggleLike: NexusGenRootTypes['Image']; // Image!
    unlinkFace: number; // Int!
  }
  Person: { // field return type
    aliases: NexusGenRootTypes['Alias'][]; // [Alias!]!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    name: string; // String!
    preferredAlias: NexusGenRootTypes['Alias'] | null; // Alias
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Query: { // field return type
    image: NexusGenRootTypes['Image'] | null; // Image
    imageConnections: NexusGenRootTypes['ImageConnections'] | null; // ImageConnections
    images: NexusGenRootTypes['Image'][]; // [Image!]!
    me: NexusGenRootTypes['User'] | null; // User
    searchPerson: NexusGenRootTypes['Person'][]; // [Person!]!
    user: NexusGenRootTypes['User'] | null; // User
  }
  QueueInfo: { // field return type
    queueSize: number; // Int!
  }
  Role: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    name: string; // String!
  }
  Tag: { // field return type
    addedBy: NexusGenRootTypes['User'] | null; // User
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    name: string; // String!
    source: NexusGenEnums['TagSource']; // TagSource!
  }
  Thumbnail: { // field return type
    large: string; // String!
    medium: string; // String!
    small: string; // String!
  }
  User: { // field return type
    avatar: string | null; // String
    bot: boolean; // Boolean!
    id: number; // Int!
    images: NexusGenRootTypes['Image'][]; // [Image!]!
    name: string | null; // String
    roles: NexusGenRootTypes['Role'][]; // [Role!]!
  }
}

export interface NexusGenFieldTypeNames {
  Alias: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    name: 'String'
    updatedAt: 'DateTime'
  }
  Appearance: { // field return type name
    addedBy: 'User'
    createdAt: 'DateTime'
    faces: 'Face'
    id: 'Int'
    image: 'Image'
    person: 'Person'
    updatedAt: 'DateTime'
  }
  Face: { // field return type name
    addedBy: 'User'
    appearance: 'Appearance'
    createdAt: 'DateTime'
    height: 'Float'
    id: 'Int'
    image: 'Image'
    score: 'Float'
    source: 'FaceSource'
    updatedAt: 'DateTime'
    width: 'Float'
    x: 'Float'
    y: 'Float'
  }
  Image: { // field return type name
    appearances: 'Appearance'
    aspectRatio: 'Float'
    bytes: 'Int'
    caption: 'String'
    connections: 'ImageConnections'
    createdAt: 'DateTime'
    faceScanDate: 'DateTime'
    fileName: 'String'
    fileSize: 'String'
    hash: 'String'
    height: 'Int'
    id: 'Int'
    isNsfw: 'Boolean'
    liked: 'Boolean'
    mimetype: 'MimeType'
    pHash: 'String'
    palette: 'Int'
    public: 'Boolean'
    rawUrl: 'String'
    slug: 'String'
    source: 'String'
    tags: 'Tag'
    thumbnail: 'Thumbnail'
    unknownFaces: 'Face'
    uploadType: 'UploadType'
    uploadedBy: 'User'
    url: 'String'
    views: 'Int'
    width: 'Int'
  }
  ImageConnections: { // field return type name
    edges: 'ImageEdge'
    images: 'Image'
    people: 'Person'
  }
  ImageEdge: { // field return type name
    from: 'Int'
    to: 'Int'
    type: 'ImageConnectionEdge'
  }
  Mutation: { // field return type name
    addAppearance: 'Appearance'
    linkFace: 'Appearance'
    removeAppearance: 'Appearance'
    scanFaces: 'QueueInfo'
    toggleLike: 'Image'
    unlinkFace: 'Int'
  }
  Person: { // field return type name
    aliases: 'Alias'
    createdAt: 'DateTime'
    id: 'Int'
    name: 'String'
    preferredAlias: 'Alias'
    updatedAt: 'DateTime'
  }
  Query: { // field return type name
    image: 'Image'
    imageConnections: 'ImageConnections'
    images: 'Image'
    me: 'User'
    searchPerson: 'Person'
    user: 'User'
  }
  QueueInfo: { // field return type name
    queueSize: 'Int'
  }
  Role: { // field return type name
    createdAt: 'DateTime'
    name: 'String'
  }
  Tag: { // field return type name
    addedBy: 'User'
    createdAt: 'DateTime'
    name: 'String'
    source: 'TagSource'
  }
  Thumbnail: { // field return type name
    large: 'String'
    medium: 'String'
    small: 'String'
  }
  User: { // field return type name
    avatar: 'String'
    bot: 'Boolean'
    id: 'Int'
    images: 'Image'
    name: 'String'
    roles: 'Role'
  }
}

export interface NexusGenArgTypes {
  Appearance: {
    faces: { // args
      cursor?: NexusGenInputs['FaceWhereUniqueInput'] | null; // FaceWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Image: {
    appearances: { // args
      cursor?: NexusGenInputs['AppearanceWhereUniqueInput'] | null; // AppearanceWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    connections: { // args
      depth: number; // Int!
    }
    tags: { // args
      cursor?: NexusGenInputs['TagWhereUniqueInput'] | null; // TagWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Mutation: {
    addAppearance: { // args
      imageId: number; // Int!
      personId: number; // Int!
    }
    linkFace: { // args
      appearanceId: number; // Int!
      faceId: number; // Int!
    }
    removeAppearance: { // args
      appearanceId: number; // Int!
    }
    scanFaces: { // args
      slug: string; // String!
    }
    toggleLike: { // args
      imageId: number; // Int!
    }
    unlinkFace: { // args
      appearanceId: number; // Int!
      faceId: number; // Int!
    }
  }
  Person: {
    aliases: { // args
      cursor?: NexusGenInputs['AliasWhereUniqueInput'] | null; // AliasWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Query: {
    image: { // args
      slug: string; // String!
    }
    imageConnections: { // args
      depth: number; // Int!
      slug: string; // String!
    }
    images: { // args
      cursor?: NexusGenInputs['ImageWhereUniqueInput'] | null; // ImageWhereUniqueInput
      orderBy?: NexusGenInputs['ImageOrderByInput'][] | null; // [ImageOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    }
    searchPerson: { // args
      query: string; // String!
    }
    user: { // args
      id?: number | null; // Int
    }
  }
  User: {
    images: { // args
      cursor?: NexusGenInputs['ImageWhereUniqueInput'] | null; // ImageWhereUniqueInput
      orderBy?: NexusGenInputs['ImageOrderByInput'][] | null; // [ImageOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    }
    roles: { // args
      cursor?: NexusGenInputs['RoleWhereUniqueInput'] | null; // RoleWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    /**
     * The complexity for an individual field. Return a number
     * or a function that returns a number to specify the
     * complexity for this field.
     */
    complexity?: QueryComplexity<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}