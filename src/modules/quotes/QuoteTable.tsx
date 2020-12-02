import React from "react";
import { gql, useQuery } from "@apollo/client";
import cx from "classnames";
import { stripHtml } from "utils/strip-html";

const QUOTES_MANY_QUERY = gql`
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

const Heading = ({ color = "light", children }) => (
  <th
    className={
      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
      (color === "light"
        ? "bg-gray-100 text-gray-600 border-gray-200"
        : "bg-blue-800 text-blue-300 border-blue-700")
    }
  >
    {children}
  </th>
);

const TableRow = ({ color = "light", characters, index, markup }) => (
  <tr>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      {index}
    </td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <div style={{ width: "calc(50vw)" }} className="truncate">
        {stripHtml(markup)}
      </div>
    </td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <div className="flex">
        {characters.map((character, i) => (
          <img
            key={character._id}
            src={character.coverPicture}
            alt="..."
            className={cx(
              "w-10 h-10 rounded-full border-2 border-gray-100 shadow",
              { "-ml-4": i > 0 }
            )}
          />
        ))}
      </div>
    </td>
  </tr>
);

const Table = ({ color = "light", quotes }) => {
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-blue-900 text-white")
      }
    >
      <div className="px-4 py-3 mb-0 border-0 rounded-t">
        <div className="flex flex-wrap items-center">
          <div className="relative flex-1 flex-grow w-full max-w-full px-4">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-gray-800" : "text-white")
              }
            >
              Quotes
            </h3>
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <Heading>Index</Heading>
              <Heading>Quote</Heading>
              <Heading>Characters</Heading>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote, i) => (
              <TableRow
                key={quote._id}
                index={i + 1}
                markup={quote.markup}
                characters={quote.characters}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const QuoteTable = () => {
  const { data, loading, error } = useQuery(QUOTES_MANY_QUERY);
  const quotes = data?.quoteMany ?? [];

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full px-4 mb-12">
        <Table quotes={quotes} />
      </div>
    </div>
  );
};
