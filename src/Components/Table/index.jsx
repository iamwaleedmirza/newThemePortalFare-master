import React from "react";

const Table = (props) => {
  const { labels, data } = props;

  return data?.length ? (
    <div style={{ minHeight: "55vh" }}>
      <table
        className="table table-separate table-head-custom table-checkable"
        id="kt_datatable_2"
      >
        <thead>
          <tr>
            {labels?.map((val, i) => {
              return <th key={i}>{val}</th>;
            })}
          </tr>
        </thead>
        <tbody> {data}</tbody>
      </table>
    </div>
  ) : (
    <div className="w-100 text-center p-10">
      <span className="h4 text-primary "> No Data Found</span>
    </div>
  );
};

export default Table;
