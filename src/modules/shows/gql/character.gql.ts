import { gql } from "@apollo/client";

export const GET_CHARACTERS_FROM_IMDB_QUERY = gql`
  query getCharactersFromIMDB($IMDBShowCode: String!, $type: ShowTypeEnum!) {
    getCharactersFromIMDB(IMDBShowCode: $IMDBShowCode, type: $type) {
      characterName
      realName
      dob
      coverPicture
      imdbLink
      bioMarkup
    }
  }
`;

export const CHARACTER_CREATE_MANY_MUTATION = gql`
  mutation characterCreateMany($characters: [CreateManyCharacterInput!]!) {
    characterCreateMany(records: $characters) {
      createCount
    }
  }
`