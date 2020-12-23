import { gql } from "@apollo/client";

export const SEARCH_CHARACTERS_QUERY = gql`
  query searchCharacters(
    $realName: String
    $characterName: String
    $limit: Int
  ) {
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
