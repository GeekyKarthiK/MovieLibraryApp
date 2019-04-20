import React, { Component } from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  let pagesCount = itemsCount / pageSize;

  let pages = _.range(1, pagesCount + 1);
  console.log(currentPage);

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={pages.indexOf(page)}
            className={
              currentPage === page
                ? "page-item active mouse-pointer"
                : "page-item mouse-pointer"
            }
          >
            <a className="page-link" onClick={() => onPageChange(page)} href>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
