import { gql } from "@apollo/client";

export const SHOWS_MANY_QUERY = gql`
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
