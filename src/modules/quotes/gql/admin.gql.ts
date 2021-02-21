import { gql } from "@apollo/client";

export const GET_QUOTES_FROM_WIKI_QUOTES_QUERY = gql`
  query getQuotesFromWikiQuotes($wikiQuotesUrl: String!, $episodesMap: String, $showId: String!, $type: ShowTypeEnum!, $skip: Int!, $limit: Int!) {
    getQuotesFromWikiQuotes(wikiQuotesUrl: $wikiQuotesUrl, episodesMap: $episodesMap, showId: $showId, type: $type, skip: $skip, limit: $limit) {
      markup
      raw
      season
      episode
      characters {
        label
        value
      }
      mainCharacter {
        label
        value
      }
    }
  }
`;
