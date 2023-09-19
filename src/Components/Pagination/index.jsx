import React from "react";

export function Pagination(props) {
  const { paginate, totalPosts, postsPerPage, page, setPostsPerPage } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getPagesCount = (totalSize, sizePerPage) => {
    return Math.ceil(totalSize / sizePerPage);
  };
  const pagesCount = getPagesCount(totalPosts, postsPerPage);

  const handleSelectedPage = (page) => {
    paginate(page);
  };

  const disabledClass = pagesCount > 1 ? "" : "disabled";

  const style = {
    width: "75px",
  };
  const sizePerPageList = [
    { text: "25", value: 25 },
    { text: "50", value: 50 },
    { text: "75", value: 75 },
    { text: "100", value: 100 },
  ];

  return (
    <>
      {pageNumbers.length ? (
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className={`d-flex flex-wrap py-2 mr-3 ${disabledClass}`}>
            <span
              onClick={() => paginate(1)}
              className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
            >
              <i className="ki ki-bold-double-arrow-back icon-xs" />
            </span>
            <span
              onClick={() => {
                if (page !== 1) {
                  paginate(page - 1);
                }
              }}
              className="  btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
            >
              <i className="ki ki-bold-arrow-back icon-xs" />
            </span>
            {page > 4 && (
              <span className=" btn btn-icon btn-sm border-0  mr-2 my-1">
                ...
              </span>
            )}
            {pageNumbers.map((p) => (
              <span
                key={p}
                onClick={() => handleSelectedPage(p)}
                className={`btn btn-icon btn-sm border-0 btn-light ${
                  page === p ? " btn-hover-primary active" : ""
                } mr-2 my-1`}
              >
                {p}
              </span>
            ))}
            {4 < pagesCount && (
              <span className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">
                ...
              </span>
            )}
            <span
              onClick={() => {
                if (page < pagesCount) {
                  paginate(page + 1);
                }
              }}
              className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
            >
              <i className="ki ki-bold-arrow-next icon-xs"></i>
            </span>
            <span
              onClick={() => paginate(pageNumbers[pageNumbers?.length - 1])}
              className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
            >
              <i className="ki ki-bold-double-arrow-next icon-xs"></i>
            </span>
          </div>
          <div className="d-flex align-items-center py-3">
            <span className=" font-weight-bold mr-3">Records per page</span>
            <select
              disabled={pagesCount === 0}
              className={`form-control form-control-sm font-weight-bold mr-4 border-0 bg-light ${
                pagesCount === 0 && "disabled"
              }`}
              onChange={(e) => setPostsPerPage(e.target.value)}
              value={postsPerPage}
              style={style}
            >
              {sizePerPageList?.map((option) => {
                const isSelect = postsPerPage === `${option.page}`;
                return (
                  <option
                    key={option.text}
                    value={option.page}
                    className={`btn ${isSelect ? "active" : ""}`}
                  >
                    {option.text}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
