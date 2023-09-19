import React, { useState, useEffect } from "react";
import Request from "../../../../Utils/Requests";
import ViewRequiredName from "./ViewRequiredName";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";
import Table from "../../../../Components/Table";
import { Pagination } from "../../../../Components/Pagination";
const Index = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [allNames, setAllNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);

  useEffect(
    () => {
      getData();
    },
    // eslint-disabled-next-line
    []
  );
  const getData = async () => {
    let token = localStorage.getItem("token");
    Request.AllRequiredNames(token)
      .then((res) => {
        setAllNames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        cogoToast.error(err.message, {
          position: "top-right",
          hideAfter: 6,
        });
      });
  };
  const Refresh = () => {
    setLoading(true);
    getData();
  };
  const showLoading = () => {
    window.KTApp.blockPage({
      overlayColor: "#000000",
      type: "v2",
      state: "success",
      message: "Please wait...",
      style: { zIndex: 1060 },
    });
  };
  const hideLoading = () => {
    window.KTApp.unblockPage();
  };
  const getOneTicket = (id) => {
    let token = localStorage.getItem("token");
    showLoading();
    Request.GetOneName(id, token)
      .then((res) => {
        setName(res.data);
        window.$("#ViewMyNameModal").modal("show");
        hideLoading();
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 5 });
        hideLoading();
      });
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allNames.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let AllNames = currentPosts.map?.((val, ind) => {
    return (
      <tr key={ind}>
        <td>{ind + 1}</td>
        <td>RN-{ind + 1}</td>
        <td>{val.firstName + " " + val.lastName}</td>
        <td>{val.airline}</td>
        <td>{val.refundable_nonRefundable}</td>
        <td>{val.fare_price}</td>
        <td>{val.expiryTime}</td>
        <td>
          <button
            onClick={() => getOneTicket(val._id)}
            className="btn btn-sm btn-clean btn-icon"
            title="View"
          >
            <span className="svg-icon svg-icon-md">
              <i className="far fa-eye  " />
            </span>
          </button>
        </td>
      </tr>
    );
  });
  const labels = [
    " No#",
    "RN No#",
    "Name",
    "Airline",
    "Refundable",
    "Fare",
    "Time Limit",
    "Actions",
  ];
  return (
    <>
      <div className="card card-custom w-100">
        <div className="card-header flex-wrap border-0 pt-6 pb-0">
          <div className="card-title">
            <h3 className="card-label">Required Names</h3>
          </div>
          <div className="card-toolbar">
            {/*begin::Button*/}
            <button
              type="button"
              onClick={Refresh}
              className="btn btn-primary font-weight-bolder"
            >
              Refresh
            </button>
            <button
              type="button"
              className="btn btn-primary font-weight-bolder  ml-3"
              onClick={() => history.push("/user-required-names#create")}
            >
              <i className="la la-plus" />
              Upload Name
            </button>

            {/*end::Button*/}
          </div>
        </div>
        <div className="card-body">
          {/*begin: Datatable*/}
          {loading ? (
            <div className="d-flex justify-content-center p-20">
              <div class="spinner spinner-track spinner-primary spinner-lg "></div>
            </div>
          ) : (
            <>
              <Table labels={labels} data={AllNames} />
              <Pagination
                totalPosts={allNames?.length}
                postsPerPage={postsPerPage}
                paginate={paginate}
                page={currentPage}
                setPostsPerPage={setPostsPerPage}
              />
            </>
          )}
        </div>
      </div>
      <ViewRequiredName onCloseButton={() => setName("")} data={name} />
    </>
  );
};

export default Index;
