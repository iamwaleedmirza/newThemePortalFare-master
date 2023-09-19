import React, { useState, useEffect } from "react";
import Request from "../../../../../Utils/Requests";
import { useSelector } from "react-redux";
import cogoToast from "cogo-toast";
import { useHistory } from "react-router-dom";
import ViewGroup from "./ViewGroup";
import Timer from "../../All Deals/Timer";
import { Pagination } from "../../../../../Components/Pagination/index";
import Table from "../../../../../Components/Table/index";
const Index = () => {
  const history = useHistory();
  const Auth = useSelector((state) => state.Auth);
  const [loading, setLoading] = useState(true);
  const [allGroups, setAllGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);
  const [group, setGroup] = useState("");
  useEffect(
    () => {
      getData();
    },
    // eslint-disabled-next-line
    []
  );
  const getData = async () => {
    let token = localStorage.getItem("token");
    let data = await Request.AllGroups(token);
    setAllGroups(data);
    setLoading(false);
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
        window.$("#BuyerViewgroup").modal("show");
        hideLoading();
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 5 });
        hideLoading();
      });
  };
  let AllFilteredGroups = allGroups.filter(
    (ele) => ele.createdBy !== Auth.data._id
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = AllFilteredGroups?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const labels = [
    " No#",
    "PEG No#",
    "Tour Type",
    "Ai rline",
    "Refundable",
    "Verified",
    "Time Limit",
    "Actions",
  ];

  let AllGroups = currentPosts?.map?.((val, ind) => {
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
          {/* <button
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
          </button> */}
        </td>

        {/* <td>
          {val.Active ? (
            <button
              className="btn btn-sm btn-clean btn-icon mr-2"
              title="Disable User"
              onClick={() => DisableUser(val._id)}
            >
              <span className="svg-icon svg-icon-md">
                <i className="fas fa-ban" />
              </span>
            </button>
          ) : (
            <button
              className="btn btn-sm btn-clean btn-icon mr-2"
              title="Activate User"
              onClick={() => ActivateUser(val._id)}
            >
              <span className="svg-icon svg-icon-md">
                <i className="far fa-check-square" />
              </span>
            </button>
          )}
          <button
            className="btn btn-sm btn-clean btn-icon mr-2"
            title="Edit User"
            onClick={() => EditUser(val._id)}
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
                    d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                    fill="#000000"
                    fillRule="nonzero"
                    transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                  />
                  <rect
                    fill="#000000"
                    opacity="0.3"
                    x={5}
                    y={20}
                    width={15}
                    height={2}
                    rx={1}
                  />
                </g>
              </svg>
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
        </td> */}
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
            {/*begin::Button*/}
            <button
              type="button"
              onClick={Refresh}
              className="btn btn-primary font-weight-bolder"
              // data-toggle="modal"
              // data-target="#createTicket"
            >
              {/* <i className="la la-plus" /> */}
              Refresh
            </button>
            <button
              type="button"
              onClick={() => {
                history.push("/user-groups#create");
              }}
              className="btn btn-primary font-weight-bolder ml-3"
            >
              <i className="la la-plus" />
              Create Group
            </button>
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
              <Table labels={labels} data={AllGroups} />
              <Pagination
                totalPosts={AllFilteredGroups?.length}
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
      <ViewGroup group={group} onCloseButton={() => setGroup("")} />
    </>
  );
};

export default Index;
