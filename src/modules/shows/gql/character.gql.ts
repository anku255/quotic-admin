import { gql } from "@apollo/client";

export const GET_SHOW_DATA_FROM_IMDB_QUERY = gql`
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

export const SHOW_ONE_QUERY = gql`
  query showOne($filter: FilterFindOneShowInput) {
    showOne(filter: $filter) {
      _id
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

export const SHOW_CREATE_ONE_MUTATION = gql`
  mutation showCreateOne($record: CreateOneShowInput!) {
    showCreateOne(record: $record) {
      recordId
    }
  }
`;

export const SHOW_UPDATE_ONE_MUTATION = gql`
  mutation showUpdateOne($record: UpdateOneShowInput!, $filter: FilterUpdateOneShowInput) {
    showUpdateOne(record: $record, filter: $filter) {
      recordId
    }
  }
`;
