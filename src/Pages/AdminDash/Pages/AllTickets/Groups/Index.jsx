import React, { useState, useEffect } from "react";
import Request from "../../../../../Utils/Requests";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import ViewGroupModal from "./ViewGroupModal";
import Timer from "../../../../AgentDash/Pages/All Deals/Timer";
import Table from "../../../../../Components/Table";
import { Pagination } from "../../../../../Components/Pagination";
const Index = () => {
  const [loading, setLoading] = useState(true);
  const [allGroups, setAllGroups] = useState([]);
  const [group, setGroup] = useState("");
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
    Request.AllGroups(token)
      .then((res) => {
        setAllGroups(res);
        setLoading(false);
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 5 });
        setLoading(false);
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
    Request.GroupById(id, token)
      .then((res) => {
        setGroup(res.data);
        window.$("#Viewgroup").modal("show");
        hideLoading();
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 5 });
        hideLoading();
      });
  };
  const onCloseButton = () => {
    setGroup("");
  };
  const DeleteGroup = (id) => {
    let token = localStorage.getItem("token");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3699ff",
      cancelButtonColor: "#7E8299",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        showLoading();
        Request.AdminDeletedGroup(id, token)
          .then((res) => {
            setAllGroups(res.data);
            hideLoading();
            Swal.fire(res.message, "success");
          })
          .catch((err) => {
            hideLoading();
            cogoToast.error(err.message, {
              position: "top-right",
              hideAfter: 5,
            });
          });
      }
    });
  };
  const ApproveTicket = (id) => {
    let token = localStorage.getItem("token");
    Swal.fire({
      title: "Are you sure?",
      text: "The Group will be verified",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3699ff",
      cancelButtonColor: "#7E8299",
      confirmButtonText: "Yes, Verify it!",
    }).then((result) => {
      if (result.isConfirmed) {
        showLoading();
        Request.ApproveGroup(id, token)
          .then((res) => {
            cogoToast.success(res.message, {
              position: "top-right",
              hideAfter: 5,
            });
            setAllGroups(res.data);
            hideLoading();
          })
          .catch((err) => {
            cogoToast.error(err.message, {
              position: "top-right",
              hideAfter: 5,
            });
            hideLoading();
          });
      }
    });
  };
  const RejectTicket = (id) => {
    let token = localStorage.getItem("token");
    Swal.fire({
      title: "Are you sure?",
      text: "The Group will be rejected!",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3699ff",
      cancelButtonColor: "#7E8299",
      confirmButtonText: "Yes, Reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        showLoading();
        Request.RejectGroup(id, token)
          .then((res) => {
            cogoToast.success(res.message, {
              position: "top-right",
              hideAfter: 5,
            });
            setAllGroups(res.data);
            hideLoading();
          })
          .catch((err) => {
            cogoToast.error(err.message, {
              position: "top-right",
              hideAfter: 5,
            });
            hideLoading();
          });
      }
    });
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allGroups.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const labels = [
    " No#",
    "PEG No#",
    "Tour Type",
    "Airline",
    "Refundable",
    "Verified",
    "Time Limit",
    "Actions",
  ];
  let AllGroups = currentPosts.map?.((val, ind) => {
    return (
      <tr key={ind}>
        <td>{ind + 1}</td>
        <td>PEG-{ind + 1}</td>
        <td>{val.tourType}</td>
        <td>{val.airline}</td>
        <td>{val.refundable_nonRefundable}</td>
        <td>
          {val.Verified ? (
            <span>
              <span className="label font-weight-bold label-lg  label-light-success label-inline">
                Verified
              </span>
            </span>
          ) : (
            <span>
              {val.rejected ? (
                <span className="label font-weight-bold label-lg  label-light-danger label-inline">
                  Rejected
                </span>
              ) : (
                <span className="label font-weight-bold label-lg  label-light-warning label-inline">
                  Pending
                </span>
              )}
            </span>
          )}
        </td>
        <td>
          <Timer expiryTime={val.expiryTime} />
        </td>
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
            onClick={() => DeleteGroup(val._id)}
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
          {val.Verified ? (
            ""
          ) : (
            <button
              className="btn btn-sm btn-clean btn-icon "
              title="Approve Ticket"
              onClick={() => ApproveTicket(val._id)}
            >
              <span className="svg-icon svg-icon-md">
                <i className="far fa-check-square" />
              </span>
            </button>
          )}
          {val.rejected ? (
            ""
          ) : (
            <button
              className="btn btn-sm btn-clean btn-icon "
              title="Reject Ticket"
              onClick={() => RejectTicket(val._id)}
            >
              <span className="svg-icon svg-icon-md">
                <i className="fas fa-ban" />
              </span>
            </button>
          )}
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="card card-custom w-100">
        <div className="card-header flex-wrap border-0 pt-6 pb-0">
          <div className="card-title">
            <h3 className="card-label">All Groups</h3>
          </div>
          <div className="card-toolbar">
            <button
              type="button"
              onClick={Refresh}
              className="btn btn-primary font-weight-bolder"
            >
              Refresh
            </button>
          </div>
        </div>
        <div className="card-body">
          {loading ? (
            <div className="d-flex justify-content-center p-20">
              <div class="spinner spinner-track spinner-primary spinner-lg "></div>
            </div>
          ) : (
            <>
              <Table labels={labels} data={AllGroups} />
              <Pagination
                totalPosts={allGroups?.length}
                postsPerPage={postsPerPage}
                paginate={paginate}
                page={currentPage}
                setPostsPerPage={setPostsPerPage}
              />
            </>
          )}
        </div>
      </div>
      <ViewGroupModal group={group} onCloseButton={onCloseButton} />
    </>
  );
};

export default Index;
