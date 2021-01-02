import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  userById?: Maybe<User>;
  userByIds?: Maybe<Array<Maybe<User>>>;
  userOne?: Maybe<User>;
  userMany?: Maybe<Array<Maybe<User>>>;
  userCount?: Maybe<Scalars['Int']>;
  me: User;
  quoteById?: Maybe<Quote>;
  quoteByIds?: Maybe<Array<Maybe<Quote>>>;
  quoteOne?: Maybe<Quote>;
  quoteMany?: Maybe<Array<Maybe<Quote>>>;
  quoteCount?: Maybe<Scalars['Int']>;
  showById?: Maybe<Show>;
  showByIds?: Maybe<Array<Maybe<Show>>>;
  showOne?: Maybe<Show>;
  showMany?: Maybe<Array<Maybe<Show>>>;
  showCount?: Maybe<Scalars['Int']>;
  characterById?: Maybe<Character>;
  characterByIds?: Maybe<Array<Maybe<Character>>>;
  characterOne?: Maybe<Character>;
  characterMany?: Maybe<Array<Maybe<Character>>>;
  characterCount?: Maybe<Scalars['Int']>;
  searchByQuery: Array<Maybe<SearchResult>>;
  searchCharacters: Array<Maybe<Character>>;
  searchShows: Array<Maybe<Show>>;
  trendingQuotes: Array<Maybe<TrendingQuote>>;
  trendingShows: Array<Maybe<Show>>;
  getShowDataFromIMDB?: Maybe<ShowData>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsUserInput>;
};


export type QueryUserOneArgs = {
  filter?: Maybe<FilterFindOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneUserInput>;
};


export type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyUserInput>;
};


export type QueryUserCountArgs = {
  filter?: Maybe<FilterUserInput>;
};


export type QueryQuoteByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryQuoteByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsQuoteInput>;
};


export type QueryQuoteOneArgs = {
  filter?: Maybe<FilterFindOneQuoteInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneQuoteInput>;
};


export type QueryQuoteManyArgs = {
  filter?: Maybe<FilterFindManyQuoteInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyQuoteInput>;
};


export type QueryQuoteCountArgs = {
  filter?: Maybe<FilterQuoteInput>;
};


export type QueryShowByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryShowByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsShowInput>;
};


export type QueryShowOneArgs = {
  filter?: Maybe<FilterFindOneShowInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneShowInput>;
};


export type QueryShowManyArgs = {
  filter?: Maybe<FilterFindManyShowInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyShowInput>;
};


export type QueryShowCountArgs = {
  filter?: Maybe<FilterShowInput>;
};


export type QueryCharacterByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryCharacterByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCharacterInput>;
};


export type QueryCharacterOneArgs = {
  filter?: Maybe<FilterFindOneCharacterInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneCharacterInput>;
};


export type QueryCharacterManyArgs = {
  filter?: Maybe<FilterFindManyCharacterInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyCharacterInput>;
};


export type QueryCharacterCountArgs = {
  filter?: Maybe<FilterCharacterInput>;
};


export type QuerySearchByQueryArgs = {
  query: Scalars['String'];
};


export type QuerySearchCharactersArgs = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySearchShowsArgs = {
  name?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryTrendingQuotesArgs = {
  limit: Scalars['Int'];
};


export type QueryTrendingShowsArgs = {
  limit: Scalars['Int'];
};


export type QueryGetShowDataFromImdbArgs = {
  IMDBShowCode: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};


export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindOneUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneUserInput>;
  OR?: Maybe<Array<FilterFindOneUserInput>>;
  AND?: Maybe<Array<FilterFindOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneUserInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneUserInput>;
};

export type _IdOperatorsFilterFindOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindManyUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyUserInput>;
  OR?: Maybe<Array<FilterFindManyUserInput>>;
  AND?: Maybe<Array<FilterFindManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyUserInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyUserInput>;
};

export type _IdOperatorsFilterFindManyUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUserInput>;
  OR?: Maybe<Array<FilterUserInput>>;
  AND?: Maybe<Array<FilterUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUserInput = {
  _id?: Maybe<_IdOperatorsFilterUserInput>;
};

export type _IdOperatorsFilterUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type Quote = {
  __typename?: 'Quote';
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Show>;
  characters?: Maybe<Array<Maybe<Character>>>;
  mainCharacter?: Maybe<Character>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};


export type QuoteCharactersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCharacterInput>;
};

export type Show = {
  __typename?: 'Show';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodes>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** Sub items with a custom type */
  characters?: Maybe<Array<Maybe<Character>>>;
};

export enum EnumShowType {
  Series = 'SERIES',
  Movie = 'MOVIE'
}

export type ShowEpisodes = {
  __typename?: 'ShowEpisodes';
  season?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Scalars['Float']>;
};

export type Character = {
  __typename?: 'Character';
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Show>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};


export type CharacterShowsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsShowInput>;
};

export enum SortFindByIdsShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneQuoteInput>;
  OR?: Maybe<Array<FilterFindOneQuoteInput>>;
  AND?: Maybe<Array<FilterFindOneQuoteInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneQuoteInput>;
};

export type _IdOperatorsFilterFindOneQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindOneQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindManyQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyQuoteInput>;
  OR?: Maybe<Array<FilterFindManyQuoteInput>>;
  AND?: Maybe<Array<FilterFindManyQuoteInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyQuoteInput>;
};

export type _IdOperatorsFilterFindManyQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindManyQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterQuoteInput>;
  OR?: Maybe<Array<FilterQuoteInput>>;
  AND?: Maybe<Array<FilterQuoteInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterQuoteInput>;
};

export type _IdOperatorsFilterQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodesInput>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneShowInput>;
  OR?: Maybe<Array<FilterFindOneShowInput>>;
  AND?: Maybe<Array<FilterFindOneShowInput>>;
};

export type ShowEpisodesInput = {
  season?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Scalars['Float']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneShowInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneShowInput>;
};

export type _IdOperatorsFilterFindOneShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindOneShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindManyShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodesInput>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyShowInput>;
  OR?: Maybe<Array<FilterFindManyShowInput>>;
  AND?: Maybe<Array<FilterFindManyShowInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyShowInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyShowInput>;
};

export type _IdOperatorsFilterFindManyShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindManyShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodesInput>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterShowInput>;
  OR?: Maybe<Array<FilterShowInput>>;
  AND?: Maybe<Array<FilterShowInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterShowInput = {
  _id?: Maybe<_IdOperatorsFilterShowInput>;
};

export type _IdOperatorsFilterShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneCharacterInput>;
  OR?: Maybe<Array<FilterFindOneCharacterInput>>;
  AND?: Maybe<Array<FilterFindOneCharacterInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneCharacterInput>;
};

export type _IdOperatorsFilterFindOneCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindManyCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyCharacterInput>;
  OR?: Maybe<Array<FilterFindManyCharacterInput>>;
  AND?: Maybe<Array<FilterFindManyCharacterInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyCharacterInput>;
};

export type _IdOperatorsFilterFindManyCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindManyCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterCharacterInput>;
  OR?: Maybe<Array<FilterCharacterInput>>;
  AND?: Maybe<Array<FilterCharacterInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterCharacterInput>;
};

export type _IdOperatorsFilterCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  id: Scalars['MongoID'];
  imageUrl: Scalars['String'];
  type: Scalars['String'];
  showYear?: Maybe<Scalars['Int']>;
  showName?: Maybe<Scalars['String']>;
  characterName?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type TrendingQuote = {
  __typename?: 'TrendingQuote';
  quote: Quote;
  quotesCount: Scalars['Int'];
};

export type ShowData = {
  __typename?: 'ShowData';
  name: Scalars['String'];
  description: Scalars['String'];
  genre: Array<Maybe<Scalars['String']>>;
  type: ShowTypeEnum;
  year: Scalars['Int'];
  seasons?: Maybe<Scalars['Int']>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  coverPicture: Scalars['String'];
  imdbLink: Scalars['String'];
  rating: Scalars['Float'];
};

export enum ShowTypeEnum {
  Series = 'SERIES',
  Movie = 'MOVIE'
}

export type Episode = {
  __typename?: 'Episode';
  season: Scalars['Int'];
  episodes: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  signIn: AccessToken;
  signUp: AccessToken;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  quoteCreateOne?: Maybe<CreateOneQuotePayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  quoteCreateMany?: Maybe<CreateManyQuotePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  quoteUpdateById?: Maybe<UpdateByIdQuotePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  quoteUpdateOne?: Maybe<UpdateOneQuotePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  quoteRemoveById?: Maybe<RemoveByIdQuotePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  quoteRemoveOne?: Maybe<RemoveOneQuotePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  showCreateOne?: Maybe<CreateOneShowPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  showUpdateById?: Maybe<UpdateByIdShowPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  showUpdateOne?: Maybe<UpdateOneShowPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  showRemoveById?: Maybe<RemoveByIdShowPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  showRemoveOne?: Maybe<RemoveOneShowPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  characterCreateOne?: Maybe<CreateOneCharacterPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  characterUpdateById?: Maybe<UpdateByIdCharacterPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  characterUpdateOne?: Maybe<UpdateOneCharacterPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  characterRemoveById?: Maybe<RemoveByIdCharacterPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  characterRemoveOne?: Maybe<RemoveOneCharacterPayload>;
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};


export type MutationUserUpdateByIdArgs = {
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateOneArgs = {
  record: UpdateOneUserInput;
  filter?: Maybe<FilterUpdateOneUserInput>;
  sort?: Maybe<SortUpdateOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationUserRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneUserInput>;
  sort?: Maybe<SortRemoveOneUserInput>;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  fullName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationQuoteCreateOneArgs = {
  record: CreateOneQuoteInput;
};


export type MutationQuoteCreateManyArgs = {
  records: Array<CreateManyQuoteInput>;
};


export type MutationQuoteUpdateByIdArgs = {
  record: UpdateByIdQuoteInput;
};


export type MutationQuoteUpdateOneArgs = {
  record: UpdateOneQuoteInput;
  filter?: Maybe<FilterUpdateOneQuoteInput>;
  sort?: Maybe<SortUpdateOneQuoteInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationQuoteRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationQuoteRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneQuoteInput>;
  sort?: Maybe<SortRemoveOneQuoteInput>;
};


export type MutationShowCreateOneArgs = {
  record: CreateOneShowInput;
};


export type MutationShowUpdateByIdArgs = {
  record: UpdateByIdShowInput;
};


export type MutationShowUpdateOneArgs = {
  record: UpdateOneShowInput;
  filter?: Maybe<FilterUpdateOneShowInput>;
  sort?: Maybe<SortUpdateOneShowInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationShowRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationShowRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneShowInput>;
  sort?: Maybe<SortRemoveOneShowInput>;
};


export type MutationCharacterCreateOneArgs = {
  record: CreateOneCharacterInput;
};


export type MutationCharacterUpdateByIdArgs = {
  record: UpdateByIdCharacterInput;
};


export type MutationCharacterUpdateOneArgs = {
  record: UpdateOneCharacterInput;
  filter?: Maybe<FilterUpdateOneCharacterInput>;
  sort?: Maybe<SortUpdateOneCharacterInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationCharacterRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationCharacterRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneCharacterInput>;
  sort?: Maybe<SortRemoveOneCharacterInput>;
};

export type CreateOneUserInput = {
  fullName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateOneUserPayload = {
  __typename?: 'CreateOneUserPayload';
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<User>;
};

export type UpdateByIdUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
};

export type UpdateOneUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateOneUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateOneUserInput>;
  OR?: Maybe<Array<FilterUpdateOneUserInput>>;
  AND?: Maybe<Array<FilterUpdateOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateOneUserInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneUserInput>;
};

export type _IdOperatorsFilterUpdateOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateOneUserPayload = {
  __typename?: 'UpdateOneUserPayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
};

export type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
};

export type FilterRemoveOneUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOneUserInput>;
  OR?: Maybe<Array<FilterRemoveOneUserInput>>;
  AND?: Maybe<Array<FilterRemoveOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOneUserInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveOneUserInput>;
};

export type _IdOperatorsFilterRemoveOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveOneUserPayload = {
  __typename?: 'RemoveOneUserPayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type CreateOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw: Scalars['String'];
  show: Scalars['MongoID'];
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season: Scalars['Float'];
  episode: Scalars['Float'];
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateOneQuotePayload = {
  __typename?: 'CreateOneQuotePayload';
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Quote>;
};

export type CreateManyQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw: Scalars['String'];
  show: Scalars['MongoID'];
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season: Scalars['Float'];
  episode: Scalars['Float'];
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateManyQuotePayload = {
  __typename?: 'CreateManyQuotePayload';
  /** Created document ID */
  recordIds: Array<Maybe<Scalars['MongoID']>>;
  /** Created documents */
  records: Array<Maybe<Quote>>;
  /** Count of all documents created */
  createCount: Scalars['Int'];
};

export type UpdateByIdQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdQuotePayload = {
  __typename?: 'UpdateByIdQuotePayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Quote>;
};

export type UpdateOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateOneQuoteInput>;
  OR?: Maybe<Array<FilterUpdateOneQuoteInput>>;
  AND?: Maybe<Array<FilterUpdateOneQuoteInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateOneQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneQuoteInput>;
};

export type _IdOperatorsFilterUpdateOneQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortUpdateOneQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateOneQuotePayload = {
  __typename?: 'UpdateOneQuotePayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Quote>;
};

export type RemoveByIdQuotePayload = {
  __typename?: 'RemoveByIdQuotePayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Quote>;
};

export type FilterRemoveOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOneQuoteInput>;
  OR?: Maybe<Array<FilterRemoveOneQuoteInput>>;
  AND?: Maybe<Array<FilterRemoveOneQuoteInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOneQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveOneQuoteInput>;
};

export type _IdOperatorsFilterRemoveOneQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortRemoveOneQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveOneQuotePayload = {
  __typename?: 'RemoveOneQuotePayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Quote>;
};

export type CreateOneShowInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  genre: Array<Maybe<Scalars['String']>>;
  type: EnumShowType;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodesInput>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateOneShowPayload = {
  __typename?: 'CreateOneShowPayload';
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Show>;
};

export type UpdateByIdShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodesInput>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdShowPayload = {
  __typename?: 'UpdateByIdShowPayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Show>;
};

export type UpdateOneShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodesInput>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateOneShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodesInput>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateOneShowInput>;
  OR?: Maybe<Array<FilterUpdateOneShowInput>>;
  AND?: Maybe<Array<FilterUpdateOneShowInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateOneShowInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneShowInput>;
};

export type _IdOperatorsFilterUpdateOneShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortUpdateOneShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateOneShowPayload = {
  __typename?: 'UpdateOneShowPayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Show>;
};

export type RemoveByIdShowPayload = {
  __typename?: 'RemoveByIdShowPayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Show>;
};

export type FilterRemoveOneShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  episodes?: Maybe<Array<Maybe<ShowEpisodesInput>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOneShowInput>;
  OR?: Maybe<Array<FilterRemoveOneShowInput>>;
  AND?: Maybe<Array<FilterRemoveOneShowInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOneShowInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveOneShowInput>;
};

export type _IdOperatorsFilterRemoveOneShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortRemoveOneShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveOneShowPayload = {
  __typename?: 'RemoveOneShowPayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Show>;
};

export type CreateOneCharacterInput = {
  characterName: Scalars['String'];
  realName: Scalars['String'];
  imdbLink: Scalars['String'];
  dob?: Maybe<Scalars['Date']>;
  coverPicture: Scalars['String'];
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateOneCharacterPayload = {
  __typename?: 'CreateOneCharacterPayload';
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Character>;
};

export type UpdateByIdCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdCharacterPayload = {
  __typename?: 'UpdateByIdCharacterPayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Character>;
};

export type UpdateOneCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type FilterUpdateOneCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateOneCharacterInput>;
  OR?: Maybe<Array<FilterUpdateOneCharacterInput>>;
  AND?: Maybe<Array<FilterUpdateOneCharacterInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateOneCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneCharacterInput>;
};

export type _IdOperatorsFilterUpdateOneCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortUpdateOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateOneCharacterPayload = {
  __typename?: 'UpdateOneCharacterPayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Character>;
};

export type RemoveByIdCharacterPayload = {
  __typename?: 'RemoveByIdCharacterPayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Character>;
};

export type FilterRemoveOneCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  bioMarkup?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOneCharacterInput>;
  OR?: Maybe<Array<FilterRemoveOneCharacterInput>>;
  AND?: Maybe<Array<FilterRemoveOneCharacterInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOneCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveOneCharacterInput>;
};

export type _IdOperatorsFilterRemoveOneCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortRemoveOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveOneCharacterPayload = {
  __typename?: 'RemoveOneCharacterPayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Character>;
};

export type CharacterManyQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type CharacterManyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'characterCount'>
  & { characterMany?: Maybe<Array<Maybe<(
    { __typename?: 'Character' }
    & Pick<Character, '_id' | 'characterName' | 'realName' | 'coverPicture'>
  )>>> }
);

export type CharacterOneQueryVariables = Exact<{
  filter?: Maybe<FilterFindOneCharacterInput>;
}>;


export type CharacterOneQuery = (
  { __typename?: 'Query' }
  & { characterOne?: Maybe<(
    { __typename?: 'Character' }
    & Pick<Character, '_id' | 'characterName' | 'realName' | 'imdbLink' | 'dob' | 'coverPicture' | 'bioMarkup'>
  )> }
);

export type CharacterCreateOneMutationVariables = Exact<{
  record: CreateOneCharacterInput;
}>;


export type CharacterCreateOneMutation = (
  { __typename?: 'Mutation' }
  & { characterCreateOne?: Maybe<(
    { __typename?: 'CreateOneCharacterPayload' }
    & Pick<CreateOneCharacterPayload, 'recordId'>
  )> }
);

export type CharacterUpdateOneMutationVariables = Exact<{
  record: UpdateOneCharacterInput;
  filter?: Maybe<FilterUpdateOneCharacterInput>;
}>;


export type CharacterUpdateOneMutation = (
  { __typename?: 'Mutation' }
  & { characterUpdateOne?: Maybe<(
    { __typename?: 'UpdateOneCharacterPayload' }
    & Pick<UpdateOneCharacterPayload, 'recordId'>
  )> }
);

export type SearchCharactersQueryVariables = Exact<{
  realName?: Maybe<Scalars['String']>;
  characterName?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type SearchCharactersQuery = (
  { __typename?: 'Query' }
  & { searchCharacters: Array<Maybe<(
    { __typename?: 'Character' }
    & Pick<Character, '_id' | 'characterName' | 'coverPicture'>
  )>> }
);

export type QuotesManyQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type QuotesManyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'quoteCount'>
  & { quoteMany?: Maybe<Array<Maybe<(
    { __typename?: 'Quote' }
    & Pick<Quote, '_id' | 'markup'>
    & { characters?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, '_id' | 'coverPicture'>
    )>>> }
  )>>> }
);

export type QuoteOneQueryVariables = Exact<{
  filter?: Maybe<FilterFindOneQuoteInput>;
}>;


export type QuoteOneQuery = (
  { __typename?: 'Query' }
  & { quoteOne?: Maybe<(
    { __typename?: 'Quote' }
    & Pick<Quote, '_id' | 'raw' | 'season' | 'episode'>
    & { characters?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, '_id' | 'characterName' | 'realName'>
    )>>>, mainCharacter?: Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, '_id' | 'characterName' | 'realName'>
    )>, show?: Maybe<(
      { __typename?: 'Show' }
      & Pick<Show, '_id' | 'name'>
    )> }
  )> }
);

export type QuoteCreateOneMutationVariables = Exact<{
  record: CreateOneQuoteInput;
}>;


export type QuoteCreateOneMutation = (
  { __typename?: 'Mutation' }
  & { quoteCreateOne?: Maybe<(
    { __typename?: 'CreateOneQuotePayload' }
    & Pick<CreateOneQuotePayload, 'recordId'>
  )> }
);

export type QuoteUpdateOneMutationVariables = Exact<{
  record: UpdateOneQuoteInput;
  filter?: Maybe<FilterUpdateOneQuoteInput>;
}>;


export type QuoteUpdateOneMutation = (
  { __typename?: 'Mutation' }
  & { quoteUpdateOne?: Maybe<(
    { __typename?: 'UpdateOneQuotePayload' }
    & Pick<UpdateOneQuotePayload, 'recordId'>
  )> }
);

export type SearchShowsQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type SearchShowsQuery = (
  { __typename?: 'Query' }
  & { searchShows: Array<Maybe<(
    { __typename?: 'Show' }
    & Pick<Show, '_id' | 'name' | 'coverPicture'>
  )>> }
);

export type GetShowDataFromImdbQueryVariables = Exact<{
  IMDBShowCode: Scalars['String'];
}>;


export type GetShowDataFromImdbQuery = (
  { __typename?: 'Query' }
  & { getShowDataFromIMDB?: Maybe<(
    { __typename?: 'ShowData' }
    & Pick<ShowData, 'name' | 'description' | 'genre' | 'type' | 'year' | 'coverPicture' | 'rating' | 'seasons' | 'imdbLink'>
    & { episodes?: Maybe<Array<Maybe<(
      { __typename?: 'Episode' }
      & Pick<Episode, 'season' | 'episodes'>
    )>>> }
  )> }
);

export type ShowOneQueryVariables = Exact<{
  filter?: Maybe<FilterFindOneShowInput>;
}>;


export type ShowOneQuery = (
  { __typename?: 'Query' }
  & { showOne?: Maybe<(
    { __typename?: 'Show' }
    & Pick<Show, 'name' | 'description' | 'genre' | 'type' | 'year' | 'coverPicture' | 'rating' | 'seasons' | 'imdbLink'>
    & { episodes?: Maybe<Array<Maybe<(
      { __typename?: 'ShowEpisodes' }
      & Pick<ShowEpisodes, 'season' | 'episodes'>
    )>>> }
  )> }
);

export type ShowCreateOneMutationVariables = Exact<{
  record: CreateOneShowInput;
}>;


export type ShowCreateOneMutation = (
  { __typename?: 'Mutation' }
  & { showCreateOne?: Maybe<(
    { __typename?: 'CreateOneShowPayload' }
    & Pick<CreateOneShowPayload, 'recordId'>
  )> }
);

export type ShowUpdateOneMutationVariables = Exact<{
  record: UpdateOneShowInput;
  filter?: Maybe<FilterUpdateOneShowInput>;
}>;


export type ShowUpdateOneMutation = (
  { __typename?: 'Mutation' }
  & { showUpdateOne?: Maybe<(
    { __typename?: 'UpdateOneShowPayload' }
    & Pick<UpdateOneShowPayload, 'recordId'>
  )> }
);

export type ShowManyQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type ShowManyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'showCount'>
  & { showMany?: Maybe<Array<Maybe<(
    { __typename?: 'Show' }
    & Pick<Show, '_id' | 'name' | 'coverPicture' | 'seasons' | 'year'>
    & { episodes?: Maybe<Array<Maybe<(
      { __typename?: 'ShowEpisodes' }
      & Pick<ShowEpisodes, 'season' | 'episodes'>
    )>>> }
  )>>> }
);


export const CharacterManyDocument = gql`
    query characterMany($limit: Int, $skip: Int) {
  characterMany(limit: $limit, skip: $skip) {
    _id
    characterName
    realName
    coverPicture
  }
  characterCount
}
    `;

/**
 * __useCharacterManyQuery__
 *
 * To run a query within a React component, call `useCharacterManyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterManyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterManyQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useCharacterManyQuery(baseOptions?: Apollo.QueryHookOptions<CharacterManyQuery, CharacterManyQueryVariables>) {
        return Apollo.useQuery<CharacterManyQuery, CharacterManyQueryVariables>(CharacterManyDocument, baseOptions);
      }
export function useCharacterManyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacterManyQuery, CharacterManyQueryVariables>) {
          return Apollo.useLazyQuery<CharacterManyQuery, CharacterManyQueryVariables>(CharacterManyDocument, baseOptions);
        }
export type CharacterManyQueryHookResult = ReturnType<typeof useCharacterManyQuery>;
export type CharacterManyLazyQueryHookResult = ReturnType<typeof useCharacterManyLazyQuery>;
export type CharacterManyQueryResult = Apollo.QueryResult<CharacterManyQuery, CharacterManyQueryVariables>;
export const CharacterOneDocument = gql`
    query characterOne($filter: FilterFindOneCharacterInput) {
  characterOne(filter: $filter) {
    _id
    characterName
    realName
    imdbLink
    dob
    coverPicture
    bioMarkup
  }
}
    `;

/**
 * __useCharacterOneQuery__
 *
 * To run a query within a React component, call `useCharacterOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterOneQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCharacterOneQuery(baseOptions?: Apollo.QueryHookOptions<CharacterOneQuery, CharacterOneQueryVariables>) {
        return Apollo.useQuery<CharacterOneQuery, CharacterOneQueryVariables>(CharacterOneDocument, baseOptions);
      }
export function useCharacterOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacterOneQuery, CharacterOneQueryVariables>) {
          return Apollo.useLazyQuery<CharacterOneQuery, CharacterOneQueryVariables>(CharacterOneDocument, baseOptions);
        }
export type CharacterOneQueryHookResult = ReturnType<typeof useCharacterOneQuery>;
export type CharacterOneLazyQueryHookResult = ReturnType<typeof useCharacterOneLazyQuery>;
export type CharacterOneQueryResult = Apollo.QueryResult<CharacterOneQuery, CharacterOneQueryVariables>;
export const CharacterCreateOneDocument = gql`
    mutation characterCreateOne($record: CreateOneCharacterInput!) {
  characterCreateOne(record: $record) {
    recordId
  }
}
    `;
export type CharacterCreateOneMutationFn = Apollo.MutationFunction<CharacterCreateOneMutation, CharacterCreateOneMutationVariables>;

/**
 * __useCharacterCreateOneMutation__
 *
 * To run a mutation, you first call `useCharacterCreateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCharacterCreateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [characterCreateOneMutation, { data, loading, error }] = useCharacterCreateOneMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useCharacterCreateOneMutation(baseOptions?: Apollo.MutationHookOptions<CharacterCreateOneMutation, CharacterCreateOneMutationVariables>) {
        return Apollo.useMutation<CharacterCreateOneMutation, CharacterCreateOneMutationVariables>(CharacterCreateOneDocument, baseOptions);
      }
export type CharacterCreateOneMutationHookResult = ReturnType<typeof useCharacterCreateOneMutation>;
export type CharacterCreateOneMutationResult = Apollo.MutationResult<CharacterCreateOneMutation>;
export type CharacterCreateOneMutationOptions = Apollo.BaseMutationOptions<CharacterCreateOneMutation, CharacterCreateOneMutationVariables>;
export const CharacterUpdateOneDocument = gql`
    mutation characterUpdateOne($record: UpdateOneCharacterInput!, $filter: FilterUpdateOneCharacterInput) {
  characterUpdateOne(record: $record, filter: $filter) {
    recordId
  }
}
    `;
export type CharacterUpdateOneMutationFn = Apollo.MutationFunction<CharacterUpdateOneMutation, CharacterUpdateOneMutationVariables>;

/**
 * __useCharacterUpdateOneMutation__
 *
 * To run a mutation, you first call `useCharacterUpdateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCharacterUpdateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [characterUpdateOneMutation, { data, loading, error }] = useCharacterUpdateOneMutation({
 *   variables: {
 *      record: // value for 'record'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCharacterUpdateOneMutation(baseOptions?: Apollo.MutationHookOptions<CharacterUpdateOneMutation, CharacterUpdateOneMutationVariables>) {
        return Apollo.useMutation<CharacterUpdateOneMutation, CharacterUpdateOneMutationVariables>(CharacterUpdateOneDocument, baseOptions);
      }
export type CharacterUpdateOneMutationHookResult = ReturnType<typeof useCharacterUpdateOneMutation>;
export type CharacterUpdateOneMutationResult = Apollo.MutationResult<CharacterUpdateOneMutation>;
export type CharacterUpdateOneMutationOptions = Apollo.BaseMutationOptions<CharacterUpdateOneMutation, CharacterUpdateOneMutationVariables>;
export const SearchCharactersDocument = gql`
    query searchCharacters($realName: String, $characterName: String, $limit: Int) {
  searchCharacters(
    realName: $realName
    characterName: $characterName
    limit: $limit
  ) {
    _id
    characterName
    coverPicture
  }
}
    `;

/**
 * __useSearchCharactersQuery__
 *
 * To run a query within a React component, call `useSearchCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCharactersQuery({
 *   variables: {
 *      realName: // value for 'realName'
 *      characterName: // value for 'characterName'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchCharactersQuery(baseOptions?: Apollo.QueryHookOptions<SearchCharactersQuery, SearchCharactersQueryVariables>) {
        return Apollo.useQuery<SearchCharactersQuery, SearchCharactersQueryVariables>(SearchCharactersDocument, baseOptions);
      }
export function useSearchCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCharactersQuery, SearchCharactersQueryVariables>) {
          return Apollo.useLazyQuery<SearchCharactersQuery, SearchCharactersQueryVariables>(SearchCharactersDocument, baseOptions);
        }
export type SearchCharactersQueryHookResult = ReturnType<typeof useSearchCharactersQuery>;
export type SearchCharactersLazyQueryHookResult = ReturnType<typeof useSearchCharactersLazyQuery>;
export type SearchCharactersQueryResult = Apollo.QueryResult<SearchCharactersQuery, SearchCharactersQueryVariables>;
export const QuotesManyDocument = gql`
    query quotesMany($limit: Int, $skip: Int) {
  quoteMany(limit: $limit, skip: $skip) {
    _id
    markup
    characters {
      _id
      coverPicture
    }
  }
  quoteCount
}
    `;

/**
 * __useQuotesManyQuery__
 *
 * To run a query within a React component, call `useQuotesManyQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuotesManyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuotesManyQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useQuotesManyQuery(baseOptions?: Apollo.QueryHookOptions<QuotesManyQuery, QuotesManyQueryVariables>) {
        return Apollo.useQuery<QuotesManyQuery, QuotesManyQueryVariables>(QuotesManyDocument, baseOptions);
      }
export function useQuotesManyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuotesManyQuery, QuotesManyQueryVariables>) {
          return Apollo.useLazyQuery<QuotesManyQuery, QuotesManyQueryVariables>(QuotesManyDocument, baseOptions);
        }
export type QuotesManyQueryHookResult = ReturnType<typeof useQuotesManyQuery>;
export type QuotesManyLazyQueryHookResult = ReturnType<typeof useQuotesManyLazyQuery>;
export type QuotesManyQueryResult = Apollo.QueryResult<QuotesManyQuery, QuotesManyQueryVariables>;
export const QuoteOneDocument = gql`
    query quoteOne($filter: FilterFindOneQuoteInput) {
  quoteOne(filter: $filter) {
    _id
    raw
    characters {
      _id
      characterName
      realName
    }
    mainCharacter {
      _id
      characterName
      realName
    }
    season
    episode
    show {
      _id
      name
    }
  }
}
    `;

/**
 * __useQuoteOneQuery__
 *
 * To run a query within a React component, call `useQuoteOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuoteOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuoteOneQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useQuoteOneQuery(baseOptions?: Apollo.QueryHookOptions<QuoteOneQuery, QuoteOneQueryVariables>) {
        return Apollo.useQuery<QuoteOneQuery, QuoteOneQueryVariables>(QuoteOneDocument, baseOptions);
      }
export function useQuoteOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuoteOneQuery, QuoteOneQueryVariables>) {
          return Apollo.useLazyQuery<QuoteOneQuery, QuoteOneQueryVariables>(QuoteOneDocument, baseOptions);
        }
export type QuoteOneQueryHookResult = ReturnType<typeof useQuoteOneQuery>;
export type QuoteOneLazyQueryHookResult = ReturnType<typeof useQuoteOneLazyQuery>;
export type QuoteOneQueryResult = Apollo.QueryResult<QuoteOneQuery, QuoteOneQueryVariables>;
export const QuoteCreateOneDocument = gql`
    mutation quoteCreateOne($record: CreateOneQuoteInput!) {
  quoteCreateOne(record: $record) {
    recordId
  }
}
    `;
export type QuoteCreateOneMutationFn = Apollo.MutationFunction<QuoteCreateOneMutation, QuoteCreateOneMutationVariables>;

/**
 * __useQuoteCreateOneMutation__
 *
 * To run a mutation, you first call `useQuoteCreateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQuoteCreateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [quoteCreateOneMutation, { data, loading, error }] = useQuoteCreateOneMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useQuoteCreateOneMutation(baseOptions?: Apollo.MutationHookOptions<QuoteCreateOneMutation, QuoteCreateOneMutationVariables>) {
        return Apollo.useMutation<QuoteCreateOneMutation, QuoteCreateOneMutationVariables>(QuoteCreateOneDocument, baseOptions);
      }
export type QuoteCreateOneMutationHookResult = ReturnType<typeof useQuoteCreateOneMutation>;
export type QuoteCreateOneMutationResult = Apollo.MutationResult<QuoteCreateOneMutation>;
export type QuoteCreateOneMutationOptions = Apollo.BaseMutationOptions<QuoteCreateOneMutation, QuoteCreateOneMutationVariables>;
export const QuoteUpdateOneDocument = gql`
    mutation quoteUpdateOne($record: UpdateOneQuoteInput!, $filter: FilterUpdateOneQuoteInput) {
  quoteUpdateOne(record: $record, filter: $filter) {
    recordId
  }
}
    `;
export type QuoteUpdateOneMutationFn = Apollo.MutationFunction<QuoteUpdateOneMutation, QuoteUpdateOneMutationVariables>;

/**
 * __useQuoteUpdateOneMutation__
 *
 * To run a mutation, you first call `useQuoteUpdateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQuoteUpdateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [quoteUpdateOneMutation, { data, loading, error }] = useQuoteUpdateOneMutation({
 *   variables: {
 *      record: // value for 'record'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useQuoteUpdateOneMutation(baseOptions?: Apollo.MutationHookOptions<QuoteUpdateOneMutation, QuoteUpdateOneMutationVariables>) {
        return Apollo.useMutation<QuoteUpdateOneMutation, QuoteUpdateOneMutationVariables>(QuoteUpdateOneDocument, baseOptions);
      }
export type QuoteUpdateOneMutationHookResult = ReturnType<typeof useQuoteUpdateOneMutation>;
export type QuoteUpdateOneMutationResult = Apollo.MutationResult<QuoteUpdateOneMutation>;
export type QuoteUpdateOneMutationOptions = Apollo.BaseMutationOptions<QuoteUpdateOneMutation, QuoteUpdateOneMutationVariables>;
export const SearchShowsDocument = gql`
    query searchShows($name: String, $limit: Int) {
  searchShows(name: $name, limit: $limit) {
    _id
    name
    coverPicture
  }
}
    `;

/**
 * __useSearchShowsQuery__
 *
 * To run a query within a React component, call `useSearchShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchShowsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchShowsQuery(baseOptions?: Apollo.QueryHookOptions<SearchShowsQuery, SearchShowsQueryVariables>) {
        return Apollo.useQuery<SearchShowsQuery, SearchShowsQueryVariables>(SearchShowsDocument, baseOptions);
      }
export function useSearchShowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchShowsQuery, SearchShowsQueryVariables>) {
          return Apollo.useLazyQuery<SearchShowsQuery, SearchShowsQueryVariables>(SearchShowsDocument, baseOptions);
        }
export type SearchShowsQueryHookResult = ReturnType<typeof useSearchShowsQuery>;
export type SearchShowsLazyQueryHookResult = ReturnType<typeof useSearchShowsLazyQuery>;
export type SearchShowsQueryResult = Apollo.QueryResult<SearchShowsQuery, SearchShowsQueryVariables>;
export const GetShowDataFromImdbDocument = gql`
    query getShowDataFromIMDB($IMDBShowCode: String!) {
  getShowDataFromIMDB(IMDBShowCode: $IMDBShowCode) {
    name
    description
    genre
    type
    year
    coverPicture
    rating
    seasons
    imdbLink
    episodes {
      season
      episodes
    }
  }
}
    `;

/**
 * __useGetShowDataFromImdbQuery__
 *
 * To run a query within a React component, call `useGetShowDataFromImdbQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShowDataFromImdbQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShowDataFromImdbQuery({
 *   variables: {
 *      IMDBShowCode: // value for 'IMDBShowCode'
 *   },
 * });
 */
export function useGetShowDataFromImdbQuery(baseOptions: Apollo.QueryHookOptions<GetShowDataFromImdbQuery, GetShowDataFromImdbQueryVariables>) {
        return Apollo.useQuery<GetShowDataFromImdbQuery, GetShowDataFromImdbQueryVariables>(GetShowDataFromImdbDocument, baseOptions);
      }
export function useGetShowDataFromImdbLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShowDataFromImdbQuery, GetShowDataFromImdbQueryVariables>) {
          return Apollo.useLazyQuery<GetShowDataFromImdbQuery, GetShowDataFromImdbQueryVariables>(GetShowDataFromImdbDocument, baseOptions);
        }
export type GetShowDataFromImdbQueryHookResult = ReturnType<typeof useGetShowDataFromImdbQuery>;
export type GetShowDataFromImdbLazyQueryHookResult = ReturnType<typeof useGetShowDataFromImdbLazyQuery>;
export type GetShowDataFromImdbQueryResult = Apollo.QueryResult<GetShowDataFromImdbQuery, GetShowDataFromImdbQueryVariables>;
export const ShowOneDocument = gql`
    query showOne($filter: FilterFindOneShowInput) {
  showOne(filter: $filter) {
    name
    description
    genre
    type
    year
    coverPicture
    rating
    seasons
    imdbLink
    episodes {
      season
      episodes
    }
  }
}
    `;

/**
 * __useShowOneQuery__
 *
 * To run a query within a React component, call `useShowOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowOneQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useShowOneQuery(baseOptions?: Apollo.QueryHookOptions<ShowOneQuery, ShowOneQueryVariables>) {
        return Apollo.useQuery<ShowOneQuery, ShowOneQueryVariables>(ShowOneDocument, baseOptions);
      }
export function useShowOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowOneQuery, ShowOneQueryVariables>) {
          return Apollo.useLazyQuery<ShowOneQuery, ShowOneQueryVariables>(ShowOneDocument, baseOptions);
        }
export type ShowOneQueryHookResult = ReturnType<typeof useShowOneQuery>;
export type ShowOneLazyQueryHookResult = ReturnType<typeof useShowOneLazyQuery>;
export type ShowOneQueryResult = Apollo.QueryResult<ShowOneQuery, ShowOneQueryVariables>;
export const ShowCreateOneDocument = gql`
    mutation showCreateOne($record: CreateOneShowInput!) {
  showCreateOne(record: $record) {
    recordId
  }
}
    `;
export type ShowCreateOneMutationFn = Apollo.MutationFunction<ShowCreateOneMutation, ShowCreateOneMutationVariables>;

/**
 * __useShowCreateOneMutation__
 *
 * To run a mutation, you first call `useShowCreateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShowCreateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [showCreateOneMutation, { data, loading, error }] = useShowCreateOneMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useShowCreateOneMutation(baseOptions?: Apollo.MutationHookOptions<ShowCreateOneMutation, ShowCreateOneMutationVariables>) {
        return Apollo.useMutation<ShowCreateOneMutation, ShowCreateOneMutationVariables>(ShowCreateOneDocument, baseOptions);
      }
export type ShowCreateOneMutationHookResult = ReturnType<typeof useShowCreateOneMutation>;
export type ShowCreateOneMutationResult = Apollo.MutationResult<ShowCreateOneMutation>;
export type ShowCreateOneMutationOptions = Apollo.BaseMutationOptions<ShowCreateOneMutation, ShowCreateOneMutationVariables>;
export const ShowUpdateOneDocument = gql`
    mutation showUpdateOne($record: UpdateOneShowInput!, $filter: FilterUpdateOneShowInput) {
  showUpdateOne(record: $record, filter: $filter) {
    recordId
  }
}
    `;
export type ShowUpdateOneMutationFn = Apollo.MutationFunction<ShowUpdateOneMutation, ShowUpdateOneMutationVariables>;

/**
 * __useShowUpdateOneMutation__
 *
 * To run a mutation, you first call `useShowUpdateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShowUpdateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [showUpdateOneMutation, { data, loading, error }] = useShowUpdateOneMutation({
 *   variables: {
 *      record: // value for 'record'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useShowUpdateOneMutation(baseOptions?: Apollo.MutationHookOptions<ShowUpdateOneMutation, ShowUpdateOneMutationVariables>) {
        return Apollo.useMutation<ShowUpdateOneMutation, ShowUpdateOneMutationVariables>(ShowUpdateOneDocument, baseOptions);
      }
export type ShowUpdateOneMutationHookResult = ReturnType<typeof useShowUpdateOneMutation>;
export type ShowUpdateOneMutationResult = Apollo.MutationResult<ShowUpdateOneMutation>;
export type ShowUpdateOneMutationOptions = Apollo.BaseMutationOptions<ShowUpdateOneMutation, ShowUpdateOneMutationVariables>;
export const ShowManyDocument = gql`
    query showMany($limit: Int, $skip: Int) {
  showMany(limit: $limit, skip: $skip) {
    _id
    name
    coverPicture
    seasons
    episodes {
      season
      episodes
    }
    year
  }
  showCount
}
    `;

/**
 * __useShowManyQuery__
 *
 * To run a query within a React component, call `useShowManyQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowManyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowManyQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useShowManyQuery(baseOptions?: Apollo.QueryHookOptions<ShowManyQuery, ShowManyQueryVariables>) {
        return Apollo.useQuery<ShowManyQuery, ShowManyQueryVariables>(ShowManyDocument, baseOptions);
      }
export function useShowManyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowManyQuery, ShowManyQueryVariables>) {
          return Apollo.useLazyQuery<ShowManyQuery, ShowManyQueryVariables>(ShowManyDocument, baseOptions);
        }
export type ShowManyQueryHookResult = ReturnType<typeof useShowManyQuery>;
export type ShowManyLazyQueryHookResult = ReturnType<typeof useShowManyLazyQuery>;
export type ShowManyQueryResult = Apollo.QueryResult<ShowManyQuery, ShowManyQueryVariables>;