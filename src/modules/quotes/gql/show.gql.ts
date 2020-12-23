import { gql } from "@apollo/client";

export const SEARCH_SHOWS_QUERY = gql`
  query searchShows($name: String, $limit: Int) {
    searchShows(name: $name, limit: $limit) {
      _id
      name
      coverPicture
    }
  }
`;
