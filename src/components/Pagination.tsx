import React from "react";
import range from "lodash/range";
import cx from "classnames";

export const Pagination = ({
  noOfPages,
  currentPage,
  handlePageClick,
}: {
  noOfPages: number;
  currentPage: number;
  handlePageClick: (pageNum: number) => void;
}) => (
  <div className="flex justify-center w-full py-2">
    <nav className="block">
      <ul className="flex flex-wrap pl-0 list-none rounded">
        <li>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-semibold leading-tight text-blue-500 bg-white border border-blue-500 border-solid rounded-full first:ml-0 hover:text-white hover:bg-blue-500"
          >
            <i className="-ml-px fas fa-chevron-left"></i>
          </button>
        </li>
        {range(1, noOfPages + 1).map((pageNo) => (
          <li key={pageNo}>
            <button
              onClick={() => handlePageClick(pageNo)}
              className={cx(
                "relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-semibold leading-tight border border-blue-500 border-solid rounded-full first:ml-0 hover:text-white hover:bg-blue-500",
                {
                  "text-white": pageNo === currentPage,
                  "bg-blue-500": pageNo === currentPage,
                }
              )}
            >
              {pageNo}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-semibold leading-tight text-blue-500 bg-white border border-blue-500 border-solid rounded-full first:ml-0 hover:text-white hover:bg-blue-500"
          >
            <i className="-mr-px fas fa-chevron-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  </div>
);
