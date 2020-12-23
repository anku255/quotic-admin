import { gql } from "@apollo/client";

export const CHARACTERS_MANY_QUERY = gql`
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

export const CHARACTERS_ONE_QUERY = gql`
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

export const CHARACTER_CREATE_ONE_MUTATION = gql`
  mutation characterCreateOne($record: CreateOneCharacterInput!) {
    characterCreateOne(record: $record) {
      recordId
    }
  }
`;

export const CHARACTER_UPDATE_ONE_MUTATION = gql`
  mutation characterUpdateOne($record: UpdateOneCharacterInput!, $filter: FilterUpdateOneCharacterInput) {
    characterUpdateOne(record: $record, filter: $filter) {
      recordId
    }
  }
`;
