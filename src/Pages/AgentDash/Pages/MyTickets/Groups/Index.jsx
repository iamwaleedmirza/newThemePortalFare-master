import React, { useState, useEffect } from "react";
import Request from "../../../../../Utils/Requests";
import CreateGroup from "./CreateGroup";
import UpdateGroup from "./UpdateGroup";
import ViewGroupModal from "./ViewGroupModal";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import { useHistory } from "react-router-dom";
import Timer from "../../All Deals/Timer";
import Table from "../../../../../Components/Table";
import { Pagination } from "../../../../../Components/Pagination/index";
const Index = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [allGroups, setAllGroups] = useState([]);
  const [group, setGroup] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);
  const [groupData, setGroupData] = useState({
    tourType: "",
    booked_ticketed: "",
    via_Direct_OutGoing: "",
    via_Direct_Return: "",
    airline: "",
    oneway_return: "",
    refundable_nonRefundable: "",
    exchangeable: "",
    expiryTime: "",
    CRSPNR: "",
    airlinePNR: "",
    otherPNR: "",
    adult: "",
    farePerAdult: "",
    child: "",
    farePerChild: "",
    infants: "",
    farePerInfant: "",
    noOfInstallment: "",
    installment: "",
    Baggage: "20",
    HandCarry: "1",
  });
  const [installments, setInstallments] = useState([]);
  const addInstallment = async () => {
    if (groupData.noOfInstallment && groupData.installment) {
      if (parseInt(groupData.noOfInstallment) === installments.length) {
        cogoToast.error(
          `cannot add more then ${groupData.noOfInstallment} installments`,
          {
            position: "top-right",
            hideAfter: 3,
          }
        );
        setGroupData((prevState) => ({ ...prevState, installment: "" }));
      } else {
        let arr = [...installments];
        await arr.push(groupData.installment);
        const total = arr.reduce(function (a, b) {
          return parseInt(a) + parseInt(b);
        });

        if (
          arr.length === parseInt(groupData.noOfInstallment) &&
          parseInt(total) !== totalFare()
        ) {
          cogoToast.error(`Total of installment must be equal to Total Fare`, {
            position: "top-right",
            hideAfter: 3,
          });
        } else {
          setInstallments(arr);
          setGroupData((prevState) => ({ ...prevState, installment: "" }));
        }
      }
    }
  };
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

  const [showCreateGroupView, setShowCreateGroupView] = useState(false);
  const [showEditGroupView, setShowEditGroupView] = useState(false);
  const [currentGroupId,   setCurrentGroupId] = useState('');


  const totalFare = () => {
    const adult =
      parseInt(groupData.adult) * parseInt(groupData.farePerAdult)
        ? parseInt(groupData.adult) * parseInt(groupData.farePerAdult)
        : 0;
    const child =
      parseInt(groupData.child) * parseInt(groupData.farePerChild)
        ? parseInt(groupData.child) * parseInt(groupData.farePerChild)
        : 0;
    const infants =
      parseInt(groupData.infants) * parseInt(groupData.farePerInfant)
        ? parseInt(groupData.infants) * parseInt(groupData.farePerInfant)
        : 0;
    return adult + child + infants;
  };

  const openCreateGroup = () => {
    setShowCreateGroupView(true);
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
  const removeInstallment = (index) => {
    const filtered = installments.filter((val) => val !== installments[index]);
    setInstallments(filtered);
  };
  useEffect(
    () => {
      if (history.location.hash === "#create") {
        window.$("#createGroupModal").modal("show");
      }
      getData();
    },
    // eslint-disabled-next-line
    []
  );
  // useEffect(() => {
  //   setSectors({outGoingSectors:[], returnSectors:[]});
  // }, [groupData.via_Direct_OutGoing, groupData.via_Direct_Return]);

  useEffect(() => {
    setInstallments([]);
    setGroupData((prevState) => ({
      ...prevState,
      installment: "",
      noOfInstallment: "",
    }));
  }, [
    groupData.adult,
    groupData.child,
    groupData.infants,
    groupData.farePerAdult,
    groupData.farePerChild,
    groupData.farePerInfant,
  ]);
  useEffect(() => {
    setInstallments([]);
    setGroupData((prevState) => ({
      ...prevState,
      installment: "",
    }));
  }, [groupData.noOfInstallment]);
  const getData = async () => {
    let token = localStorage.getItem("token");
    Request.MyGroups(token)
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
  const SectorDataChange = (e) => {
    console.log('sector data change target name ', e.target.name);
     if( e.target.name && e.target.name.includes('OutGoing') )
      setOutGoingSector({ ...outGoingSector, [e.target.name]: e.target.value });
    else
      setReturnSector({ ...returnSector, [e.target.name]: e.target.value });
    // setSector({ ...sector, [e.target.name]: e.target.value });
  };
  const clearSectors = () => {
    setSectors({outGoingSectors:[], returnSectors:[]});
  }
  const getOneTicket = (id, source) => {
    let token = localStorage.getItem("token");
    showLoading();
    Request.GroupById(id, token)
      .then((res) => {

        if( source === 'View' ){
          setGroup(res.data);
          window.$("#ViewgroupModal").modal("show");
        }
        else{
          const {outGoingSectors, returnSectors, _id, ...data} = res.data;
          setGroupData(data);
          console.log('sectors get', sectors);
          console.log('setting',{ outGoingSectors, returnSectors });
          setSectors({ outGoingSectors, returnSectors });
          console.log('sectors updated', sectors);

          setShowEditGroupView(true);
          setCurrentGroupId(_id);
        }
        hideLoading();

      })
      .catch((err) => {
        cogoToast.error(err.message, { position: "top-right", hideAfter: 5 });
        hideLoading();
      });
  };
  const onChange = (e) => {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
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
      tourType,
      booked_ticketed,
      via_Direct_OutGoing,
      via_Direct_Return,
      airline,
      oneway_return,
      refundable_nonRefundable,
      exchangeable,
      expiryTime,
      CRSPNR,
      airlinePNR,
      otherPNR,
      adult,
      farePerAdult,
      child,
      farePerChild,
      infants,
      farePerInfant,
      noOfInstallment,
      Baggage,
      HandCarry,
    } = groupData;
    let data = {
      tourType,
      booked_ticketed,
      via_Direct_OutGoing,
      via_Direct_Return,
      airline,
      oneway_return,
      refundable_nonRefundable,
      exchangeable,
      expiryTime,
      CRSPNR,
      airlinePNR,
      otherPNR,
      adult,
      farePerAdult,
      child,
      farePerChild,
      infants,
      farePerInfant,
      noOfInstallment,
      Baggage,
      HandCarry,
      installments,
      outGoingSectors: sectors.outGoingSectors,
      returnSectors: sectors.returnSectors,
    };
    let token = localStorage.getItem("token");
    if( currentGroupId == '' ) {
      //Create Group
      Request.CreateGroup(JSON.stringify(data), token)
        .then((res) => {
          cogoToast.success(res.message, { position: "top-right", hideAfter: 6 });
          clearData();
          window.$("#createGroupModal").modal("hide");
          getData();
          hideLoading();
        })
        .catch((err) => {
          cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
          hideLoading();
        });
      return;

    }

    //Update Group
    Request.UpdateGroup(currentGroupId, JSON.stringify(data), token)
    .then((res) => {
      cogoToast.success(res.message, { position: "top-right", hideAfter: 6 });
      clearData();
      window.$("#createGroupModal").modal("hide");
      getData();
      hideLoading();
    })
    .catch((err) => {
      cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
      hideLoading();
    });



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
        Request.DeletedGroup(id, token)
          .then((res) => {
            setAllGroups(res.data);
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
  const clearData = () => {
     setGroupData({
      tourType: "",
      booked_ticketed: "",
      via_Direct_OutGoing: "",
      via_Direct_Return: "",
      airline: "",
      oneway_return: "",
      refundable_nonRefundable: "",
      exchangeable: "",
      expiryTime: "",
      CRSPNR: "",
      airlinePNR: "",
      otherPNR: "",
      adult: "",
      farePerAdult: "",
      child: "",
      farePerChild: "",
      infants: "",
      farePerInfant: "",
      noOfInstallment: "",
      installment: "",
    });
    setSectors({outGoingSectors:[], returnSectors:[]});
    setInstallments([]);
  }
  const onCloseButton = () => {
    clearData();
    setShowCreateGroupView(false);
    setShowEditGroupView(false);

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
      { showCreateGroupView ?  <CreateGroup
        ticketData={groupData}
        onChange={onChange}
        onSubmit={onSubmit}
        addOutGoingSector={addOutGoingSector}
        addReturnSector={addReturnSector}
        sectors={sectors}
        outGoingSector={outGoingSector}
        returnSector={returnSector}
        SectorDataChange={SectorDataChange}
        addInstallment={addInstallment}
        installments={installments}
        removeInstallment={removeInstallment}
        onCloseButton={onCloseButton}
        totalFare={totalFare}
      /> : 
        ( showEditGroupView ? 
          <UpdateGroup
            ticketData={groupData}
            onChange={onChange}
            onSubmit={onSubmit}
            addOutGoingSector={addOutGoingSector}
            addReturnSector={addReturnSector}
            sectors={sectors}
            outGoingSector={outGoingSector}
            returnSector={returnSector}
            SectorDataChange={SectorDataChange}
            addInstallment={addInstallment}
            installments={installments}
            removeInstallment={removeInstallment}
            onCloseButton={onCloseButton}
            totalFare={totalFare}
            clearSectors={clearSectors}
          /> : 
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
                  <span
                    type="button"
                    className="btn btn-primary font-weight-bolder  ml-3"
                    onClick={openCreateGroup}
                  >
                    <i className="la la-plus" />
                    Create Group
                  </span>
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
                  // <table
                  //   className="table table-separate table-head-custom table-checkable"
                  //   id="kt_datatable_2"
                  // >
                  //   <thead>
                  //     <tr>
                  //       <th>No#</th>
                  //       <th>PEG No#</th>
                  //       <th>Tour Type</th>
                  //       <th>Airline</th>
                  //       <th>Refundable</th>
                  //       <th>Verified</th>
                  //       <th>Time Limit</th>
                  //       <th>Actions</th>
                  //     </tr>
                  //   </thead>
                  //   <tbody>{AllGroups}</tbody>
                  // </table>
                )}
    
                {/*end: Datatable*/}
              </div>
            </div>
            )}
     
      {/* <CreateGroupModal
        ticketData={groupData}
        onChange={onChange}
        onSubmit={onSubmit}
        addSector={addSector}
        sectors={sectors}
        sector={sector}
        SectorDataChange={SectorDataChange}
        addInstallment={addInstallment}
        installments={installments}
        removeInstallment={removeInstallment}
        onCloseButton={onCloseButton}
        totalFare={totalFare}
      /> */}
     
      <ViewGroupModal group={group} onCloseButton={() => setGroup("")} />
    </>
  );
};

export default Index;
