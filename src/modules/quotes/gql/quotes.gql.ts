import { gql } from "@apollo/client";

export const QUOTES_MANY_QUERY = gql`
  query quotesMany {
    quoteMany(limit: 4) {
      _id
      markup
      characters {
        _id
        coverPicture
      }
    }
  }
`;
