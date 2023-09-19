import React, { useState, useEffect } from "react";
import Request from "../../../../../Utils/Requests";
import { useSelector } from "react-redux";
import cogoToast from "cogo-toast";
import ViewTicketModal from "./ViewTicketModal";
import CreateTicketModal from "../../MyTickets/Tickets/CreateTicketModal";
import { useHistory } from "react-router-dom";
import Timer from "../../All Deals/Timer";
import { Pagination } from "../../../../../Components/Pagination/index";
import Table from "../../../../../Components/Table/index";
const Index = () => {
  const history = useHistory();
  const Auth = useSelector((state) => state.Auth);
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);
  const [ticketData, setTicketData] = useState({
    tourType: "",
    booked_ticketed: "",
    via_Direct: "",
    passengerType: "",
    airline: "",
    oneway_return: "",
    fare_price: "",
    refundable_nonRefundable: "",
    exchangeable: "",
    expiryTime: "",
    CRSPNR: "",
    airlinePNR: "",
    otherPNR: "",

    // secTeoDate: "",
    // secTwoFlight: "",
    // secTwoFromCity: "",
    // secTwoFromTime: "",
    // secTwoToCity: "",
    // secTwoToTime: "",
  });
  const [sector, setSector] = useState({
    flight: "",
    Date: "",
    FromCity: "",
    FromTime: "",
    ToCity: "",
    ToTime: "",
  });
  const [sectors, setSectors] = useState([]);
  const [allTicket, setAllTicket] = useState([]);
  useEffect(
    () => {
      getData();
    },
    // eslint-disabled-next-line
    []
  );
  const getData = async () => {
    let token = localStorage.getItem("token");
    let data = await Request.AllTicket(token);
    setAllTicket(data);
    setLoading(false);
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
  const Refresh = () => {
    setLoading(true);
    getData();
  };
  const getOneTicket = (id) => {
    let token = localStorage.getItem("token");
    showLoading();
    Request.TicketById(id, token)
      .then((res) => {
        setTicket(res.data);
        window.$("#ViewTicketManagement").modal("show");
        hideLoading();
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 5 });
        hideLoading();
      });
  };
  const onCloseButton = () => {
    setTicket("");
  };
  const addSector = () => {
    console.log(sector);
  };
  const onChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };
  const SectorDataChange = (e) => {
    setSector({ ...sector, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    showLoading();
    let {
      tourType,
      booked_ticketed,
      via_Direct,
      passengerType,
      airline,
      oneway_return,
      fare_price,
      refundable_nonRefundable,
      exchangeable,
      expiryTime,
      CRSPNR,
      airlinePNR,
      otherPNR,
    } = ticketData;
    let { flight, Date, FromCity, FromTime, ToCity, ToTime } = sector;
    let data = {
      tourType,
      booked_ticketed,
      via_Direct,
      passengerType,
      airline,
      oneway_return,
      fare_price,
      refundable_nonRefundable,
      exchangeable,
      expiryTime,
      CRSPNR,
      airlinePNR,
      otherPNR,
      sectors: [
        {
          flight,
          Date,
          FromCity,
          FromTime,
          ToCity,
          ToTime,
        },
      ],
    };
    let token = localStorage.getItem("token");
    Request.CreateTicket(JSON.stringify(data), token)
      .then((res) => {
        cogoToast.success(res.message, { position: "top-right", hideAfter: 6 });
        setTicketData({
          tourType: "",
          booked_ticketed: "",
          via_Direct: "",
          passengerType: "",
          airline: "",
          oneway_return: "",
          fare_price: "",
          refundable_nonRefundable: "",
          exchangeable: "",
          expiryTime: "",
          CRSPNR: "",
          airlinePNR: "",
          otherPNR: "",
          flight: "",
        });
        setSector({
          flight: "",
          Date: "",
          FromCity: "",
          FromTime: "",
          ToCity: "",
          ToTime: "",
        });
        window.$("#createTicket").modal("hide");
        getData();
        hideLoading();
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
        hideLoading();
      });
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let AllFilterdTicket = allTicket?.filter(
    (ele) => ele.createdBy !== Auth.data._id && ele.Verified
  );
  const currentPosts = AllFilterdTicket.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
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

  let AllTickets = currentPosts?.map?.((val, ind) => {
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
            // onClick={() => getOneTicket(val._id)}
            className="btn btn-sm btn-clean btn-icon"
            title="Add to Interested"
          >
            {/* svg-icon-primary */}
            <span className="svg-icon   svg-icon-2x">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.3476862,4.32173209 11.9473121,4.11839309 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 Z"
                    fill="#000000"
                  />
                </g>
              </svg>
            </span>
          </button>
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
            <h3 className="card-label">All Tickets</h3>
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
                history.push("/user-tickets#create");
              }}
              className="btn btn-primary font-weight-bolder ml-3"
            >
              <i className="la la-plus" />
              Create Ticket
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
              <Table labels={labels} data={AllTickets} />
              <Pagination
                totalPosts={AllFilterdTicket?.length}
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
      <ViewTicketModal onCloseButton={onCloseButton} ticket={ticket} />
      <CreateTicketModal
        ticketData={ticketData}
        onChange={onChange}
        onSubmit={onSubmit}
        sector={sector}
        SectorDataChange={SectorDataChange}
        onCloseButton={onCloseButton}
        addSector={addSector}
      />
    </>
  );
};

export default Index;
