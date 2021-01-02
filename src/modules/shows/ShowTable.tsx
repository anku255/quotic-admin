import React, { useState } from "react";
import { useShowManyQuery, Show } from "generated/apolloHooks";
import { Pagination } from "components/Pagination";
import { History } from "history";
import { Link } from "react-router-dom";

type IShow = Pick<Show, "_id" | "name" | "coverPicture" | "seasons" | "episodes" | "year">;

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

const TableRow = ({ color = "light", index, id, name, coverPicture, seasons, episodes, year }) => (
  <tr>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">{index}</td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <Link to={`/shows/add-edit?showId=${id}`}>
        <div style={{}} className="truncate">
          <img src={coverPicture} alt={name} className={"ml-4 w-10 h-16 rounded-lg  border-2 border-gray-100 shadow"} />
        </div>
      </Link>
    </td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <Link to={`/shows/add-edit?showId=${id}`}>
        <div style={{}} className="truncate">
          {name}
        </div>
      </Link>
    </td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <Link to={`/shows/add-edit?showId=${id}`}>
        <div style={{}} className="truncate">
          {year}
        </div>
      </Link>
    </td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <Link to={`/shows/add-edit?showId=${id}`}>
        <div style={{}} className="truncate">
          {seasons}
        </div>
      </Link>
    </td>
    <td className="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
      <Link to={`/shows/add-edit?showId=${id}`}>
        <div style={{}} className="truncate">
          {episodes ? episodes.reduce((sum, curr) => sum + curr.episodes, 0) : ""}
        </div>
      </Link>
    </td>
  </tr>
);

const Table = ({ color = "light", shows }: { color?: string; shows: IShow[] }) => {
  return (
    <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blue-900 text-white")}>
      <div className="px-4 py-3 mb-0 border-0 rounded-t">
        <div className="flex flex-wrap items-center justify-between">
          <div className="relative flex-1 flex-grow w-full max-w-full px-4">
            <h3 className={"font-semibold text-lg " + (color === "light" ? "text-gray-800" : "text-white")}>Shows</h3>
          </div>
          <div className="">
            <Link to="/shows/add-edit">
              <button
                className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
                type="button"
              >
                Add Show
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <Heading>Index</Heading>
              <Heading>Cover Picture</Heading>
              <Heading>Name</Heading>
              <Heading>Year</Heading>
              <Heading>Seasons</Heading>
              <Heading>Episodes</Heading>
            </tr>
          </thead>
          <tbody>
            {shows.map(({ _id, name, coverPicture, seasons, episodes, year }, i) => (
              <TableRow key={_id} {...{ index: i + 1, id: _id, name, coverPicture, seasons, episodes, year }} />
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

const SHOWS_LIMIT = 20;

export const ShowTable = ({ history }: { history: History }) => {
  const [currentPage, setCurrentPage] = useState(parsePageNo(history.location.search));

  const { data, loading, error } = useShowManyQuery({
    variables: { skip: (currentPage - 1) * SHOWS_LIMIT, limit: SHOWS_LIMIT },
  });

  const shows = data?.showMany ?? [];
  const showsCount = data?.showCount;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full px-4 mb-12">
        <div className="px-8">
          <Table shows={shows} />
        </div>
        <div>
          <Pagination
            noOfPages={Math.floor(showsCount / SHOWS_LIMIT)}
            currentPage={currentPage}
            handlePageClick={(nextPage) => {
              setCurrentPage(nextPage);
              history.push(`/shows?page=${nextPage}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};
