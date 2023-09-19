import React, { useState, useEffect } from "react";
import Request from "../../../../../Utils/Requests";
import CreateTicket from "./CreateTicket";
import EditTicket from "./EditTicket";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import ViewMyTicketModal from "./ViewTicketModal";
import { useHistory } from "react-router-dom";
import Timer from "../../All Deals/Timer";
import { Pagination } from "../../../../../Components/Pagination/index";
import Table from "../../../../../Components/Table/index";
const Index = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState("");
  const [allTicket, setAllTicket] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);
  const [ticketData, setTicketData] = useState({
    tourType: "",
    booked_ticketed: "",
    via_Direct_OutGoing: "",
    via_Direct_Return: "",
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
    Baggage: "20",
    HandCarry: "1",
  });
  const [outGoingSector, setOutGoingSector] = useState({
    flight_OutGoing: "",
    Date_OutGoing: "",
    FromCity_OutGoing: "",
    FromTime_OutGoing: "",
    ToCity_OutGoing: "",
    ToTime_OutGoing: "",
  });

  const [returnSector, setReturnSector] = useState({
    flight_Return: "",
    Date_Return: "",
    FromCity_Return: "",
    FromTime_Return: "",
    ToCity_Return: "",
    ToTime_Return: "",
  });
  const [sectors, setSectors] = useState({outGoingSectors:[], returnSectors:[]});
  const [showCreateTicketView, setShowCreateTicketView] = useState(false);
  const [showEditTicketView, setShowEditTicketView] = useState(false);
  const [currentTicketId,   setCurrentTicketId] = useState('');

  useEffect(
    () => {
      if (history.location.hash === "#create") {
        window.$("#createTicket").modal("show");
      }
      getData();
    },
    // eslint-disabled-next-line
    []
  );
  // useEffect(() => {
  //   setSectors({outGoingSectors:[], returnSectors:[]});
  // }, [ticketData.via_Direct_OutGoing, ticketData.via_Direct_Return]);
  const getData = async () => {
    let token = localStorage.getItem("token");
    let data = await Request.MyTicket(token);
    setAllTicket(data);
    setLoading(false);
  };
  const Refresh = () => {
    setLoading(true);
    getData();
  };

  const openCreateTicket = () => {
    setShowCreateTicketView(true);
  }
  const addOutGoingSector = () => {
    if (
      outGoingSector.flight_OutGoing === "" ||
      outGoingSector.FromCity_OutGoing === "" ||
      outGoingSector.FromTime_OutGoing === "" ||
      outGoingSector.ToCity_OutGoing === "" ||
      outGoingSector.ToTime_OutGoing === ""
    ){ 
      cogoToast.error("All sector fields are required ", {
        position: "top-right",
        hideAfter: 5,
      });
      return;
    }

      let { flight_OutGoing, Date_OutGoing, FromCity_OutGoing, FromTime_OutGoing, ToCity_OutGoing, ToTime_OutGoing } = outGoingSector;
      

      let data = {
        flight_OutGoing,
        Date_OutGoing,
        FromCity_OutGoing,
        FromTime_OutGoing,
        ToCity_OutGoing,
        ToTime_OutGoing,
      };
      // let a = sectors.outGoingSectors;
      // arr.push({...outGoingSectors: [...outGoingSectors, data] });
      setSectors({...sectors, ['outGoingSectors']: [...sectors.outGoingSectors, data] });
      // setSectors((outGoingSectors) =>  [...outGoingSectors, data] );

      setOutGoingSector({
        flight_OutGoing: "",
        Date_OutGoing: "",
        FromCity_OutGoing: ToCity_OutGoing,
        FromTime_OutGoing: "",
        ToCity_OutGoing: "",
        ToTime_OutGoing: "",
      });
    
  };

  const addReturnSector = () => {
    if (
      returnSector.flight_Return === "" ||
      returnSector.FromCity_Return === "" ||
      returnSector.FromTime_Return === "" ||
      returnSector.ToCity_Return === "" ||
      returnSector.ToTime_Return === ""
    ) {
      cogoToast.error("All sector fields are required ", {
        position: "top-right",
        hideAfter: 5,
      });
      return;
    }
      let { flight_Return, Date_Return, FromCity_Return, FromTime_Return, ToCity_Return, ToTime_Return } = returnSector;

      let data = {
        flight_Return,
        Date_Return,
        FromCity_Return,
        FromTime_Return,
        ToCity_Return,
        ToTime_Return,
      };
      // let arr = sectors;
      // arr.push(data);
      setSectors({...sectors, ['returnSectors']: [...sectors.returnSectors, data] });

      // setSectors(arr);
      setReturnSector({
        flight_Return: "",
        Date_Return: "",
        FromCity_Return: ToCity_Return,
        FromTime_Return: "",
        ToCity_Return: "",
        ToTime_Return: "",
      });

  };
  const onChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };
  const SectorDataChange = (e) => {
    console.log('e.target.name',e.target.name);
    if( e.target.name && e.target.name.includes('OutGoing') )
      setOutGoingSector({ ...outGoingSector, [e.target.name]: e.target.value });
    else
      setReturnSector({ ...returnSector, [e.target.name]: e.target.value });

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

  const checkSectorFields = (oneway_return) => {
    if ( (oneway_return == "One Way" && !sectors.outGoingSectors.length)
    || ( oneway_return == "Return" && (!sectors.outGoingSectors.length || !sectors.returnSectors.length)) )
      return true;
    
    return false;
  }
  const onSubmit = (e) => {
    e.preventDefault();
    showLoading();
    let {
      tourType,
      booked_ticketed,
      via_Direct_OutGoing,
      via_Direct_Return,
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
      Baggage,
      HandCarry,
    } = ticketData;
    // console.log('ticketData',ticketData);
    if ( checkSectorFields(oneway_return)) {
      cogoToast.error("All sector fields are required ", {
        position: "top-right",
        hideAfter: 5,
      });
    } else {
      let data = {
        tourType,
        booked_ticketed,
        via_Direct_OutGoing,
        via_Direct_Return,
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
        Baggage,
        HandCarry,
        outGoingSectors: sectors.outGoingSectors,
        returnSectors: sectors.returnSectors,
      };
      // console.log(data,'data');
      let token = localStorage.getItem("token");
      if (currentTicketId == '') {
        // console.log('if creating  ');
      Request.CreateTicket(JSON.stringify(data), token)
      .then((res) => {
        cogoToast.success(res.message, {
          position: "top-right",
          hideAfter: 6,
        });
        resetData();
        window.$("#createTicket").modal("hide");
        getData();
        hideLoading();
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
        hideLoading();
      });
     }else{
        // console.log('else ticket id', currentTicketId);
      Request.UpdateTicket(currentTicketId, JSON.stringify(data), token)
      .then((res) => {
        cogoToast.success(res.message, {
          position: "top-right",
          hideAfter: 6,
        });
        resetData();
        window.$("#createTicket").modal("hide");
        getData();
        hideLoading();
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
        hideLoading();
      });
     }
    }
  };
  const resetData = () => {
    setTicketData({
      tourType: "",
      booked_ticketed: "",
      via_Direct_OutGoing: "",
      via_Direct_Return: "",
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
    setReturnSector({
      flight_OutGoing: "",
      Date_OutGoing: "",
      FromCity_OutGoing: "",
      FromTime_OutGoing: "",
      ToCity_OutGoing: "",
      ToTime_OutGoing: "",
    });
    setOutGoingSector({
      flight_Return: "",
      Date_Return: "",
      FromCity_Return: "",
      FromTime_Return: "",
      ToCity_Return: "",
      ToTime_Return: "",
    });

    setSectors({outGoingSectors:[], returnSectors:[]});
    
  }

  const DeleteAgents = (id) => {
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
        Request.DeltedTicket(id, token)
          .then((res) => {
            setAllTicket(res.data);
            Swal.fire(res.message, "success");
          })
          .catch((err) => console.log(err, "error"));
      }
    });
  };
  const onCloseButton = () => {
    resetData();
    setShowCreateTicketView(false);
    setShowEditTicketView(false);

  };

  const clearSectors = () => {
    setSectors({outGoingSectors:[], returnSectors:[]});
  }
  const getOneTicket = (id, source) => {
    let token = localStorage.getItem("token");
    showLoading();
    Request.TicketById(id, token)
      .then((res) => {
        if( source === 'View' ){
          setTicket(res.data);
          window.$("#ViewMyTicketModal").modal("show");
        }
        else{
          const {outGoingSectors, returnSectors, _id, ...data} = res.data;
          setTicketData(data);
          console.log('sectors get', sectors);
          console.log('setting',{ outGoingSectors, returnSectors });
          setSectors({ outGoingSectors, returnSectors });
          console.log('sectors updated', sectors);

          setShowEditTicketView(true);
          setCurrentTicketId(_id);
        }
          hideLoading();
      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 5 });
        hideLoading();
      });
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allTicket.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let AllTicket = currentPosts.map?.((val, ind) => {
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
            onClick={() => getOneTicket(val._id, 'View')}
            className="btn btn-sm btn-clean btn-icon"
            title="View"
          >
            <span className="svg-icon svg-icon-md">
              <i className="far fa-eye  " />
            </span>
          </button>
          <button
          onClick={() => getOneTicket(val._id, 'Edit') }
          className="btn btn-sm btn-clean btn-icon"
          title="Edit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="24" height="24"
              viewBox="0 0 172 172"
              style={{fill:"#undefined"}}>
              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}>
              <path d="M0,172v-172h172v172z" fill="none">
              </path>
              <g fill="#cccccc">
              <path d="M129,14.33333l-17.30078,17.30078l28.66667,28.66667l17.30078,-17.30078zM100.87923,42.4541l-79.37923,79.37923v28.66667h28.66667l79.37923,-79.37923z">
              </path>
              </g>
              </g>
            </svg>
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
    "PEG No#",
    "Tour Type",
    "Airline",
    "Refundable",
    "Verified",
    "Time Limit",
    "Actions",
  ];
  console.log("reyu sectors", sectors);
  return (
    <>
     { showCreateTicketView ?  <CreateTicket
        ticketData={ticketData}
        onChange={onChange}
        onSubmit={onSubmit}
        outGoingSector={outGoingSector}
        returnSector={returnSector}
        SectorDataChange={SectorDataChange}
        onCloseButton={onCloseButton}
        addOutGoingSector={addOutGoingSector}
        addReturnSector={addReturnSector}
        sectors={sectors}
      /> :  
      ( showEditTicketView ? 

        <EditTicket
        ticketData={ticketData}
        onChange={onChange}
        onSubmit={onSubmit}
        outGoingSector={outGoingSector}
        returnSector={returnSector}
        SectorDataChange={SectorDataChange}
        onCloseButton={onCloseButton}
        addOutGoingSector={addOutGoingSector}
        addReturnSector={addReturnSector}
        sectors={sectors}
        clearSectors={clearSectors}
      /> 
        :
      <div className="card card-custom w-100">
        <div className="card-header flex-wrap border-0 pt-6 pb-0">
          <div className="card-title">
            <h3 className="card-label">My Tickets</h3>
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
            <span
              type="button"
              className="btn btn-primary font-weight-bolder  ml-3"
             /*  data-toggle="modal"
              data-target="#createTicket" */
              onClick={openCreateTicket}
            >
              <i className="la la-plus" />
              Create Ticket
            </span>

            {/*end::Button*/}
          </div>
        </div>
        <div className="card-body">
          {loading ? (
            <div className="d-flex justify-content-center p-20">
              <div class="spinner spinner-track spinner-primary spinner-lg "></div>
            </div>
          ) : (
            <>
              <Table labels={labels} data={AllTicket} />
              <Pagination
                totalPosts={allTicket?.length}
                postsPerPage={postsPerPage}
                paginate={paginate}
                page={currentPage}
                setPostsPerPage={setPostsPerPage}
              />
            </>
          )}
        </div>
      </div> )
    }
      <ViewMyTicketModal onCloseButton={onCloseButton} ticket={ticket} />
     {/*  <CreateTicketModal
        ticketData={ticketData}
        onChange={onChange}
        onSubmit={onSubmit}
        sector={sector}
        SectorDataChange={SectorDataChange}
        onCloseButton={onCloseButton}
        addSector={addSector}
        sectors={sectors}
      /> */}
    {/*    <CreateTicket
        ticketData={ticketData}
        onChange={onChange}
        onSubmit={onSubmit}
        sector={sector}
        SectorDataChange={SectorDataChange}
        onCloseButton={onCloseButton}
        addSector={addSector}
        sectors={sectors}
      /> */}
      
    
    </>
  );
};

export default Index;
