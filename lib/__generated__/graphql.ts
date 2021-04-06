/* DO NOT EDIT! this file was generated by graphql-codegen */
/* eslint-disable */
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql` as string, {
      method: "POST",
      body: JSON.stringify({ query, variables }),
    });
    
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AliasListRelationFilter = {
  every?: Maybe<AliasWhereInput>;
  none?: Maybe<AliasWhereInput>;
  some?: Maybe<AliasWhereInput>;
};

export type AliasWhereInput = {
  AND?: Maybe<Array<AliasWhereInput>>;
  NOT?: Maybe<Array<AliasWhereInput>>;
  OR?: Maybe<Array<AliasWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  person?: Maybe<PersonWhereInput>;
  personId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type Appearance = {
  __typename?: 'Appearance';
  addedBy: User;
  createdAt: Scalars['DateTime'];
  faces: Array<Face>;
  id: Scalars['Int'];
  person: Person;
  updatedAt: Scalars['DateTime'];
};


export type AppearanceFacesArgs = {
  cursor?: Maybe<FaceWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type AppearanceAppearanceCompoundUniqueInput = {
  imageId: Scalars['Int'];
  personId: Scalars['Int'];
};

export type AppearanceListRelationFilter = {
  every?: Maybe<AppearanceWhereInput>;
  none?: Maybe<AppearanceWhereInput>;
  some?: Maybe<AppearanceWhereInput>;
};

export type AppearanceWhereInput = {
  AND?: Maybe<Array<AppearanceWhereInput>>;
  NOT?: Maybe<Array<AppearanceWhereInput>>;
  OR?: Maybe<Array<AppearanceWhereInput>>;
  addedBy?: Maybe<UserWhereInput>;
  addedById?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  faces?: Maybe<FaceListRelationFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<ImageWhereInput>;
  imageId?: Maybe<IntFilter>;
  person?: Maybe<PersonWhereInput>;
  personId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type AppearanceWhereUniqueInput = {
  appearance?: Maybe<AppearanceAppearanceCompoundUniqueInput>;
  id?: Maybe<Scalars['Int']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type EnumFaceSourceFilter = {
  equals?: Maybe<FaceSource>;
  in?: Maybe<Array<FaceSource>>;
  not?: Maybe<NestedEnumFaceSourceFilter>;
  notIn?: Maybe<Array<FaceSource>>;
};

export type EnumMimeTypeFilter = {
  equals?: Maybe<MimeType>;
  in?: Maybe<Array<MimeType>>;
  not?: Maybe<NestedEnumMimeTypeFilter>;
  notIn?: Maybe<Array<MimeType>>;
};

export type EnumTagSourceFilter = {
  equals?: Maybe<TagSource>;
  in?: Maybe<Array<TagSource>>;
  not?: Maybe<NestedEnumTagSourceFilter>;
  notIn?: Maybe<Array<TagSource>>;
};

export type EnumUploadTypeFilter = {
  equals?: Maybe<UploadType>;
  in?: Maybe<Array<UploadType>>;
  not?: Maybe<NestedEnumUploadTypeFilter>;
  notIn?: Maybe<Array<UploadType>>;
};

export type Face = {
  __typename?: 'Face';
  addedBy?: Maybe<User>;
  appearance?: Maybe<Appearance>;
  createdAt: Scalars['DateTime'];
  height: Scalars['Float'];
  id: Scalars['Int'];
  image: Image;
  score: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type FaceInput = {
  certainty: Scalars['Float'];
  descriptor: Array<Scalars['Float']>;
  height: Scalars['Float'];
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type FaceListRelationFilter = {
  every?: Maybe<FaceWhereInput>;
  none?: Maybe<FaceWhereInput>;
  some?: Maybe<FaceWhereInput>;
};

export enum FaceSource {
  Manual = 'Manual',
  Scan = 'Scan'
}

export type FaceWhereInput = {
  AND?: Maybe<Array<FaceWhereInput>>;
  NOT?: Maybe<Array<FaceWhereInput>>;
  OR?: Maybe<Array<FaceWhereInput>>;
  addedBy?: Maybe<UserWhereInput>;
  addedById?: Maybe<IntNullableFilter>;
  appearance?: Maybe<AppearanceWhereInput>;
  appearanceId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  height?: Maybe<FloatFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<ImageWhereInput>;
  imageId?: Maybe<IntFilter>;
  person?: Maybe<PersonWhereInput>;
  personId?: Maybe<IntNullableFilter>;
  score?: Maybe<FloatFilter>;
  source?: Maybe<EnumFaceSourceFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  width?: Maybe<FloatFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
};

export type FaceWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type Image = {
  __typename?: 'Image';
  appearances: Array<Appearance>;
  bytes: Scalars['Int'];
  caption?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  faceScanDate?: Maybe<Scalars['DateTime']>;
  /** The name the image file was uploaded with. */
  fileName?: Maybe<Scalars['String']>;
  /** Human readable file size. Use `bytes` for a number representation. */
  fileSize: Scalars['String'];
  /** SHA256 checksum of the image. */
  hash: Scalars['String'];
  /** Height of the image in pixels. */
  height: Scalars['Int'];
  id: Scalars['Int'];
  /** ( ͡° ͜ʖ ͡°) */
  isNsfw: Scalars['Boolean'];
  /** The IANA media type of the image. */
  mimetype: MimeType;
  /** Block hash of the image, useful for doing reverse search using hamming distance. */
  pHash?: Maybe<Scalars['String']>;
  /** Dominant colors in the image in decimal format, sorted by frequency. */
  palette: Array<Scalars['Int']>;
  /** The visibility status of the image. */
  public: Scalars['Boolean'];
  /** Direct link to the image on the CDN */
  rawUrl: Scalars['String'];
  /** The unique url identifier of the image. */
  slug: Scalars['String'];
  /** The url the image was taken from (if applicable). Not guaranteed to be a direct image url. */
  source?: Maybe<Scalars['String']>;
  tags: Array<Tag>;
  unknownFaces: Array<Face>;
  uploadType: UploadType;
  uploadedBy?: Maybe<User>;
  /** Link to the image on the site */
  url: Scalars['String'];
  views: Scalars['Int'];
  /** Width of the image in pixels. */
  width: Scalars['Int'];
};


export type ImageAppearancesArgs = {
  cursor?: Maybe<AppearanceWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type ImageTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ImageListRelationFilter = {
  every?: Maybe<ImageWhereInput>;
  none?: Maybe<ImageWhereInput>;
  some?: Maybe<ImageWhereInput>;
};

export type ImageWhereInput = {
  AND?: Maybe<Array<ImageWhereInput>>;
  NOT?: Maybe<Array<ImageWhereInput>>;
  OR?: Maybe<Array<ImageWhereInput>>;
  appearances?: Maybe<AppearanceListRelationFilter>;
  bytes?: Maybe<IntFilter>;
  caption?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  faceScanDate?: Maybe<DateTimeNullableFilter>;
  faces?: Maybe<FaceListRelationFilter>;
  fileName?: Maybe<StringNullableFilter>;
  hash?: Maybe<StringFilter>;
  height?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  isNsfw?: Maybe<BoolFilter>;
  mimetype?: Maybe<EnumMimeTypeFilter>;
  pHash?: Maybe<StringNullableFilter>;
  palette?: Maybe<IntNullableListFilter>;
  public?: Maybe<BoolFilter>;
  slug?: Maybe<StringFilter>;
  source?: Maybe<StringNullableFilter>;
  tags?: Maybe<TagListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  uploadType?: Maybe<EnumUploadTypeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
  views?: Maybe<IntFilter>;
  width?: Maybe<IntFilter>;
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableListFilter = {
  equals?: Maybe<Array<Scalars['Int']>>;
  has?: Maybe<Scalars['Int']>;
  hasEvery?: Maybe<Array<Scalars['Int']>>;
  hasSome?: Maybe<Array<Scalars['Int']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export enum MimeType {
  Avif = 'AVIF',
  Gif = 'GIF',
  Jpg = 'JPG',
  Mp4 = 'MP4',
  Png = 'PNG',
  Svg = 'SVG',
  Webm = 'WEBM',
  Webp = 'WEBP'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Image face recognition update. Only available to bot accounts */
  markFaces?: Maybe<Image>;
  /** Image face recognition update. Only available to bot accounts */
  test?: Maybe<Image>;
};


export type MutationMarkFacesArgs = {
  faces: Array<FaceInput>;
  ireneBotId?: Maybe<Scalars['Int']>;
  personName?: Maybe<Scalars['String']>;
  replacePreviousScan?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};


export type MutationTestArgs = {
  slug: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumFaceSourceFilter = {
  equals?: Maybe<FaceSource>;
  in?: Maybe<Array<FaceSource>>;
  not?: Maybe<NestedEnumFaceSourceFilter>;
  notIn?: Maybe<Array<FaceSource>>;
};

export type NestedEnumMimeTypeFilter = {
  equals?: Maybe<MimeType>;
  in?: Maybe<Array<MimeType>>;
  not?: Maybe<NestedEnumMimeTypeFilter>;
  notIn?: Maybe<Array<MimeType>>;
};

export type NestedEnumTagSourceFilter = {
  equals?: Maybe<TagSource>;
  in?: Maybe<Array<TagSource>>;
  not?: Maybe<NestedEnumTagSourceFilter>;
  notIn?: Maybe<Array<TagSource>>;
};

export type NestedEnumUploadTypeFilter = {
  equals?: Maybe<UploadType>;
  in?: Maybe<Array<UploadType>>;
  not?: Maybe<NestedEnumUploadTypeFilter>;
  notIn?: Maybe<Array<UploadType>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PersonWhereInput = {
  AND?: Maybe<Array<PersonWhereInput>>;
  NOT?: Maybe<Array<PersonWhereInput>>;
  OR?: Maybe<Array<PersonWhereInput>>;
  aliases?: Maybe<AliasListRelationFilter>;
  appearances?: Maybe<AppearanceListRelationFilter>;
  appearsIn?: Maybe<FaceListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  ireneBotId?: Maybe<IntNullableFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  image?: Maybe<Image>;
  me?: Maybe<User>;
  user?: Maybe<User>;
};


export type QueryImageArgs = {
  slug: Scalars['String'];
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type RoleListRelationFilter = {
  every?: Maybe<RoleWhereInput>;
  none?: Maybe<RoleWhereInput>;
  some?: Maybe<RoleWhereInput>;
};

export type RoleUserRoleCompoundUniqueInput = {
  name: Scalars['String'];
  userId: Scalars['Int'];
};

export type RoleWhereInput = {
  AND?: Maybe<Array<RoleWhereInput>>;
  NOT?: Maybe<Array<RoleWhereInput>>;
  OR?: Maybe<Array<RoleWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type RoleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  userRole?: Maybe<RoleUserRoleCompoundUniqueInput>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  addedBy?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  source: TagSource;
};

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export enum TagSource {
  User = 'USER'
}

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  addedBy?: Maybe<UserWhereInput>;
  addedById?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<ImageWhereInput>;
  imageId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  source?: Maybe<EnumTagSourceFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum UploadType {
  Token = 'TOKEN',
  Website = 'WEBSITE'
}

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images: Array<Image>;
  name?: Maybe<Scalars['String']>;
  roles: Array<Role>;
};


export type UserImagesArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type UserRolesArgs = {
  cursor?: Maybe<RoleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  bot?: Maybe<BoolFilter>;
  cratedTags?: Maybe<TagListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  images?: Maybe<ImageListRelationFilter>;
  markedFaces?: Maybe<FaceListRelationFilter>;
  name?: Maybe<StringNullableFilter>;
  roles?: Maybe<RoleListRelationFilter>;
  taggedAppearances?: Maybe<AppearanceListRelationFilter>;
  token?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type OneImageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type OneImageQuery = (
  { __typename?: 'Query' }
  & { image?: Maybe<(
    { __typename?: 'Image' }
    & Pick<Image, 'faceScanDate'>
    & { unknownFaces: Array<(
      { __typename?: 'Face' }
      & { appearance?: Maybe<(
        { __typename?: 'Appearance' }
        & AppearanceDataFragment
      )> }
      & FaceDataFragment
    )>, appearances: Array<(
      { __typename?: 'Appearance' }
      & Pick<Appearance, 'id'>
      & { person: (
        { __typename?: 'Person' }
        & Pick<Person, 'id' | 'name'>
      ), faces: Array<(
        { __typename?: 'Face' }
        & FaceDataFragment
      )> }
    )>, uploadedBy?: Maybe<(
      { __typename?: 'User' }
      & UserDataFragment
    )> }
    & ImageDataFragment
  )> }
);

export type AppearanceDataFragment = (
  { __typename?: 'Appearance' }
  & Pick<Appearance, 'id'>
  & { person: (
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'name'>
  ) }
);

export type FaceDataFragment = (
  { __typename?: 'Face' }
  & Pick<Face, 'id' | 'x' | 'y' | 'width' | 'height' | 'score'>
);

export type ImageDataFragment = (
  { __typename?: 'Image' }
  & Pick<Image, 'id' | 'height' | 'width' | 'isNsfw' | 'url' | 'rawUrl' | 'createdAt' | 'caption' | 'public' | 'source' | 'slug' | 'bytes' | 'mimetype' | 'palette'>
  & { tags: Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'name'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & { images: Array<(
      { __typename?: 'Image' }
      & ImageDataFragment
    )> }
    & UserDataFragment
  )> }
);

export type GetUploadResultQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetUploadResultQuery = (
  { __typename?: 'Query' }
  & { image?: Maybe<(
    { __typename?: 'Image' }
    & { appearances: Array<(
      { __typename?: 'Appearance' }
      & Pick<Appearance, 'id'>
      & { person: (
        { __typename?: 'Person' }
        & Pick<Person, 'id' | 'name'>
      ), faces: Array<(
        { __typename?: 'Face' }
        & FaceDataFragment
      )> }
    )> }
    & ImageDataFragment
  )> }
);

export type UserDataFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'avatar'>
);

export const AppearanceDataFragmentDoc = `
    fragment AppearanceData on Appearance {
  id
  person {
    id
    name
  }
}
    `;
export const FaceDataFragmentDoc = `
    fragment FaceData on Face {
  id
  x
  y
  width
  height
  score
}
    `;
export const ImageDataFragmentDoc = `
    fragment ImageData on Image {
  id
  height
  width
  isNsfw
  url
  rawUrl
  createdAt
  caption
  public
  source
  slug
  bytes
  mimetype
  palette
  tags {
    name
  }
}
    `;
export const UserDataFragmentDoc = `
    fragment UserData on User {
  id
  name
  avatar
}
    `;
export const OneImageDocument = `
    query OneImage($slug: String!) {
  image(slug: $slug) {
    unknownFaces {
      ...FaceData
      appearance {
        ...AppearanceData
      }
    }
    appearances {
      id
      person {
        id
        name
      }
      faces {
        ...FaceData
      }
    }
    uploadedBy {
      ...UserData
    }
    ...ImageData
    faceScanDate
  }
}
    ${FaceDataFragmentDoc}
${AppearanceDataFragmentDoc}
${UserDataFragmentDoc}
${ImageDataFragmentDoc}`;
export const useOneImageQuery = <
      TData = OneImageQuery,
      TError = unknown
    >(
      variables: OneImageQueryVariables, 
      options?: UseQueryOptions<OneImageQuery, TError, TData>
    ) => 
    useQuery<OneImageQuery, TError, TData>(
      ['OneImage', variables],
      fetcher<OneImageQuery, OneImageQueryVariables>(OneImageDocument, variables),
      options
    );
export const MeDocument = `
    query Me {
  me {
    ...UserData
    images {
      ...ImageData
    }
  }
}
    ${UserDataFragmentDoc}
${ImageDataFragmentDoc}`;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      variables?: MeQueryVariables, 
      options?: UseQueryOptions<MeQuery, TError, TData>
    ) => 
    useQuery<MeQuery, TError, TData>(
      ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(MeDocument, variables),
      options
    );
export const GetUploadResultDocument = `
    query getUploadResult($slug: String!) {
  image(slug: $slug) {
    appearances {
      id
      person {
        id
        name
      }
      faces {
        ...FaceData
      }
    }
    ...ImageData
  }
}
    ${FaceDataFragmentDoc}
${ImageDataFragmentDoc}`;
export const useGetUploadResultQuery = <
      TData = GetUploadResultQuery,
      TError = unknown
    >(
      variables: GetUploadResultQueryVariables, 
      options?: UseQueryOptions<GetUploadResultQuery, TError, TData>
    ) => 
    useQuery<GetUploadResultQuery, TError, TData>(
      ['getUploadResult', variables],
      fetcher<GetUploadResultQuery, GetUploadResultQueryVariables>(GetUploadResultDocument, variables),
      options
    );
export { fetcher }