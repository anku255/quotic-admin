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
