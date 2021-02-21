import { gql } from "@apollo/client";

export const QUOTES_MANY_QUERY = gql`
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

export const QUOTES_ONE_QUERY = gql`
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

export const QUOTE_CREATE_ONE_MUTATION = gql`
  mutation quoteCreateOne($record: CreateOneQuoteInput!) {
    quoteCreateOne(record: $record) {
      recordId
    }
  }
`;

export const QUOTE_UPDATE_ONE_MUTATION = gql`
  mutation quoteUpdateOne($record: UpdateOneQuoteInput!, $filter: FilterUpdateOneQuoteInput) {
    quoteUpdateOne(record: $record, filter: $filter) {
      recordId
    }
  }
`;

export const QUOTE_CREATE_MANY_MUTATION = gql`
  mutation quoteCreateMany($records: [CreateManyQuoteInput!]!) {
    quoteCreateMany(records: $records) {
      recordIds
      createCount
    }
  }
`;
