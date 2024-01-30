import React, { useEffect, useRef } from "react";
import IconAngleLeft from "assets/images/icon__angle--left.svg";
import IconAngleRight from "assets/images/icon__angle--right.svg";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  paginatePrev,
  paginateNext,
  currentPage,
}) => {
  const pageNumbers = [];

  const prevRef = useRef();
  const nextRef = useRef();

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (currentPage === 1) {
      prevRef.current.classList.add("disabled");
      nextRef.current.classList.remove("disabled");
    } else if (currentPage === totalPosts / postsPerPage) {
      nextRef.current.classList.add("disabled");
      prevRef.current.classList.remove("disabled");
    } else {
      prevRef.current.classList.remove("disabled");
      nextRef.current.classList.remove("disabled");
    }
  }, [currentPage]);

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li ref={prevRef} className="page-item">
          <span onClick={() => paginatePrev()} className="page-link">
            <img src={IconAngleLeft} alt="" />
          </span>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span
              onClick={() => paginate(number)}
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </span>
          </li>
        ))}
        <li ref={nextRef} className="page-item">
          <span onClick={() => paginateNext()} className="page-link">
            <img src={IconAngleRight} alt="" />
          </span>
        </li>
      </ul>
    </nav>
  );
};
