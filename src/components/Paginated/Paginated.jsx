import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { AiOutlineEllipsis } from "react-icons/ai";

function Paginated({ page, totalPages, nextPage, prevPage, changePage }) {
  const maxPages = 5;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="w-full flex justify-center items-center gap-4 sm:gap-5 py-4 text-center text-[#010101] text-xl">
      {prevPage && (
        <button value="prev" onClick={(e) => changePage(e)}>
          <GrPrevious />
        </button>
      )}
      {pages.length < maxPages ? (
        pages.map((pageNum) => {
          return (
            <button
              key={pageNum}
              value={pageNum}
              disabled={pageNum === page}
              onClick={(e) => changePage(e)}
              className={`${
                page === pageNum
                  ? "text-[#DDA63A] underline underline-offset-8 "
                  : "text-[#010101]"
              }`}
            >
              {pageNum}
            </button>
          );
        })
      ) : (
        <>
         <button
            value="1"
            className={`${
              page === 1
                ? "text-[#DDA63A] underline underline-offset-8 "
                : "text-[#010101]"
            }`}
            disabled={1 === page}
            onClick={(e) => changePage(e)}
          >
            1
          </button>
          {(page <= 3 || page >= totalPages - 2) && (
            <>
              <button
                value="2"
                disabled={2 === page}
                className={`${
                  page === 2
                    ? "text-[#DDA63A] underline underline-offset-8 "
                    : "text-[#010101]"
                }`}
                onClick={(e) => changePage(e)}
              >
                2
              </button>
              <button
                value="3"
                disabled={3 === page}
                className={`${
                  page === 3
                    ? "text-[#DDA63A] underline underline-offset-8 "
                    : "text-[#010101]"
                }`}
                onClick={(e) => changePage(e)}
              >
                3
              </button>
            </>
          )}
          {page >= 4 && (
            <button className="text-[#010101]" disabled={true}>
              <AiOutlineEllipsis />
            </button>
          )}
          
          {pages
            .filter(
              (thisPage) =>
                thisPage === page - 1 ||
                thisPage === page ||
                thisPage === page + 1
            )
            .map((thisPage) => {
              return (
                page >= 4 &&
                page <= totalPages - 3 && (
                  <button
                    key={thisPage}
                    value={thisPage}
                    disabled={thisPage === page}
                    className={`${
                      page === thisPage
                        ? "text-[#DDA63A] underline underline-offset-8 "
                        : "text-[#010101]"
                    }`}
                    onClick={(e) => changePage(e)}
                  >{thisPage}</button>
                )
              );
            })}
             {(page >= totalPages - 2 ) && (
            <>
              <button
                value={pages.length - 2}
                disabled={pages.length - 2 === page}
                className={`${
                  page === pages.length - 2
                    ? "text-[#DDA63A] underline underline-offset-8 "
                    : "text-[#010101]"
                }`}
                onClick={(e) => changePage(e)}
              >
                {pages?.length - 2}
              </button>
              <button
                value={pages.length - 1}
                disabled={pages.length - 1 === page}
                className={`${
                    page === pages.length - 1
                    ? "text-[#DDA63A] underline underline-offset-8 "
                    : "text-[#010101]"
                }`}
                onClick={(e) => changePage(e)}
              >
               {pages?.length - 1}
              </button>
            </>
          )}
          {page < totalPages - 2 && (
            <button className="text-[#010101]" disabled={true}>
              <AiOutlineEllipsis />
            </button>
          )}
          <button
            value={pages.length}
            disabled={pages.length === page}
            className={`${
              page === pages.length
                ? "text-[#DDA63A] underline underline-offset-8 "
                : "text-[#010101]"
            }`}
            onClick={(e) => changePage(e)}
          >
            {pages.length}
          </button>
        </>
      )}
      {nextPage && (
        <button value="next" onClick={(e) => changePage(e)}>
          <GrNext />
        </button>
      )}
    </div>
  );
}

export default Paginated;
