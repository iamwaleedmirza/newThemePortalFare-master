import React, { useState, useEffect } from "react";
import UploadNamesModal from "./UploadNamesModal";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";
import Request from "../../../../Utils/Requests";
import Swal from "sweetalert2";
import ViewUploadedNames from "./ViewUploadedNames";
import Table from "../../../../Components/Table";
import { Pagination } from "../../../../Components/Pagination";
const Index = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [allNames, setAllNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);
  const [requiredNamesData, setRequiredNamesData] = useState({
    passengerType: "",
    title: "",
    firstName: "",
    lastName: "",
    airline: "",
    fare_price: "",
    refundable_nonRefundable: "",
    exchangeable: "",
    expiryTime: "",
    CRSPNR: "",
    airlinePNR: "",
  });
  useEffect(
    () => {
      if (history.location.hash === "#create") {
        window.$("#uploadNames").modal("show");
      }
      getData();
    },
    // eslint-disabled-next-line
    []
  );
  const getData = async () => {
    let token = localStorage.getItem("token");
    Request.AllMyRequiredNames(token)
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
  const onChange = (e) => {
    setRequiredNamesData({
      ...requiredNamesData,
      [e.target.name]: e.target.value,
    });
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
  const onSubmit = (e) => {
    e.preventDefault();
    showLoading();
    let {
      passengerType,
      title,
      firstName,
      lastName,
      airline,
      fare_price,
      refundable_nonRefundable,
      exchangeable,
      expiryTime,
      CRSPNR,
      airlinePNR,
    } = requiredNamesData;
    if (
      passengerType !== "" &&
      title !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      airline !== "" &&
      fare_price !== "" &&
      refundable_nonRefundable !== "" &&
      exchangeable !== "" &&
      expiryTime !== "" &&
      CRSPNR !== "" &&
      airlinePNR !== ""
    ) {
      let data = {
        passengerType,
        title,
        firstName,
        lastName,
        airline,
        fare_price,
        refundable_nonRefundable,
        exchangeable,
        expiryTime,
        CRSPNR,
        airlinePNR,
      };
      let token = localStorage.getItem("token");
      Request.UploadRequiredNames(JSON.stringify(data), token)
        .then((res) => {
          cogoToast.success(res.message, {
            position: "top-right",
            hideAfter: 6,
          });
          setRequiredNamesData({
            passengerType: "",
            title: "",
            firstName: "",
            lastName: "",
            airline: "",
            fare_price: "",
            refundable_nonRefundable: "",
            exchangeable: "",
            expiryTime: "",
            CRSPNR: "",
            airlinePNR: "",
          });
          window.$("#uploadNames").modal("hide");
          getData();
          hideLoading();
        })
        .catch((err) => {
          cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
          hideLoading();
        });
    } else {
      cogoToast.error("All fields are required", {
        position: "top-right",
        hideAfter: 6,
      });
      hideLoading();
    }
  };
  const onCloseButton = () => {
    setRequiredNamesData({
      passengerType: "",
      title: "",
      via_Direct: "",
      firstName: "",
      lastName: "",
      airline: "",
      fare_price: "",
      refundable_nonRefundable: "",
      exchangeable: "",
      expiryTime: "",
      CRSPNR: "",
      airlinePNR: "",
    });
  };
  const DeleteAgents = (id) => {
    let token = localStorage.getItem("token");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3699ff",
      cancelButtonColor: "#7E8299",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Request.DeleteName(id, token)
          .then((res) => {
            setAllNames(res.data);
            Swal.fire(res.message, "success");
          })
          .catch((err) =>
            cogoToast.error(err.message, {
              position: "top-right",
              hideAfter: 6,
            })
          );
      }
    });
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
          <button
            onClick={() => DeleteAgents(val._id)}
            className="btn btn-sm btn-clean btn-icon"
            title="Delete"
          >
            <span className="svg-icon svg-icon-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <path
                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                    fill="#000000"
                    fillRule="nonzero"
                  />
                  <path
                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                </g>
              </svg>
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
            <h3 className="card-label">My Required Names</h3>
          </div>
          <div className="card-toolbar">
            {/*begin::Button*/}

            <span
              type="button"
              className="btn btn-primary font-weight-bolder  ml-3"
              data-toggle="modal"
              data-target="#uploadNames"
            >
              <i className="la la-plus" />
              Upload Names
            </span>

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

          {/*end: Datatable*/}
        </div>
      </div>
      <UploadNamesModal
        data={requiredNamesData}
        onSubmit={onSubmit}
        onChange={onChange}
        onCloseButton={onCloseButton}
      />
      <ViewUploadedNames data={name} onCloseButton={() => setName("")} />
    </>
  );
};

export default Index;
