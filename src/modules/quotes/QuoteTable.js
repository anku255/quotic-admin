import React from 'react';
import {gql, useQuery} from '@apollo/client';

const QUOTES_MANY_QUERY = gql`
  query quotesMany {
    quoteMany(limit: 4) {
      _id
      markup
    }
}
`

const Heading = ({color = "light", children}) => (
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

const TableRow = ({color="light", index, markup}) => (
  <tr>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                 {index}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                 <div className="truncate w-64" dangerouslySetInnerHTML={{__html: markup}} />
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  $2,500 USD
      </td>
</tr>
)

const Table = ({color = "light", quotes }) => {
  console.log("quotes", quotes)
  return (
<div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >

    <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                Card Tables
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
            <TableRow key={quote._id} index={i+1} markup={quote.markup} />
          ))}
        </tbody>
        </table>


        </div>



      </div>
  )
}


export const QuoteTable = () => {
  const {data, loading, error} = useQuery(QUOTES_MANY_QUERY);
  const quotes = data?.quoteMany ?? [];


  if (loading) return <p>Loading...</p>

  return (
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Table quotes={quotes} />
        </div>
  </div>
  )
}