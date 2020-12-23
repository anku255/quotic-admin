import React, { useState } from "react";
import { useCharacterManyQuery, Character } from "generated/apolloHooks";
import { Pagination } from "components/Pagination";
import { History } from "history";
import { Link } from "react-router-dom";

type ICharacter = Pick<Character, "_id" | "realName" | "characterName">;

const Heading = ({ color = "light", children }) => (
  <th
    className={
      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
      (color === "light" ? "bg-gray-100 text-gray-600 border-gray-200" : "bg-blue-800 text-blue-300 border-blue-700")
    }
  >
    {children}
  </th>
);

const TableRow = ({ color = "light", index, characterName, realName, id }) => (
  <tr>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">{index}</td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <Link to={`/characters/${id}`}>
        <div style={{ width: "calc(50vw)" }} className="truncate">
          {characterName}
        </div>
      </Link>
    </td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <Link to={`/characters/${id}`}>
        <div style={{ width: "calc(50vw)" }} className="truncate">
          {realName}
        </div>
      </Link>
    </td>
  </tr>
);

const Table = ({ color = "light", characters }: { color?: string; characters: ICharacter[] }) => {
  return (
    <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blue-900 text-white")}>
      <div className="px-4 py-3 mb-0 border-0 rounded-t">
        <div className="flex flex-wrap items-center">
          <div className="relative flex-1 flex-grow w-full max-w-full px-4">
            <h3 className={"font-semibold text-lg " + (color === "light" ? "text-gray-800" : "text-white")}>Quotes</h3>
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <Heading>Index</Heading>
              <Heading>Character Name</Heading>
              <Heading>Real Name</Heading>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, i) => (
              <TableRow key={character._id} index={i + 1} id={character._id} characterName={character.characterName} realName={character.realName} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const parsePageNo = (paramsString: string): number => {
  const searchParams = new URLSearchParams(paramsString);
  return +searchParams.get("page") || 1;
};

const CHARACTERS_LIMIT = 20;

export const CharacterTable = ({ history }: { history: History }) => {
  const [currentPage, setCurrentPage] = useState(parsePageNo(history.location.search));

  const { data, loading, error } = useCharacterManyQuery({
    variables: { skip: (currentPage - 1) * CHARACTERS_LIMIT, limit: CHARACTERS_LIMIT },
  });

  const characters = data?.characterMany ?? [];
  const charactersCount = data?.characterCount;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full px-4 mb-12">
        <div className="px-8">
          <Table characters={characters} />
        </div>
        <div>
          <Pagination
            noOfPages={Math.floor(charactersCount / CHARACTERS_LIMIT)}
            currentPage={currentPage}
            handlePageClick={(nextPage) => {
              setCurrentPage(nextPage);
              history.push(`/characters?page=${nextPage}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};
