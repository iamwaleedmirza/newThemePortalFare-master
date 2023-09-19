import React, { useState, useEffect } from "react";
import CreateUserModel from "./CreateUserModel";
// import { KTDatatablesBasicBasic } from "./dataTable";
import Request from "../../../Utils/Requests";
import cogoToast from "cogo-toast";
import Routes from "../../../Utils/Routes";
import Swal from "sweetalert2";
import Table from "../../../Components/Table";
import { Pagination } from "../../../Components/Pagination";
const token = localStorage.getItem("token");
const Home = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    cnicNumber: "",
    mobNumber: "",
    LandlineNumber: "",
    whatsAppNumber: "",
    PassportNumber: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    country: "",
    province: "",
    district: "",
    tehsil: "",
    city: "",
    address: "",
    CreateAgent: false,
    DeactivateAgent: false,
    VerifyGroups: false,
    EditTickets: false,
    FindGroups: false,
    ViewReqNames: false,
    ViewDemands: false,
    EditContentData: false,
    EditAgentProfile: false,
    DeleteAgent: false,
    RejectGroups: false,
    VerifyTickets: false,
    FindTickets: false,
    VerifyReqName: false,
    TransferDemand: false,
    ViewAgentsAccount: false,
    ChangeAgentPassword: false,
    ViewGroups: false,
    DeleteGroups: false,
    RejectsTickets: false,
    EditSubcriptions: false,
    RejectReqName: false,
    EditDemands: false,
    ViewDeals: false,
    ActivateAgent: false,
    EditGroup: false,
    ViewTickets: false,
    DeleteTickets: false,
    ViewSubscriptions: false,
    DeleteReqName: false,
    DeleteDemand: false,
    ViewAgents: false,
    profile: "",
  });
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const [users, setUsers] = React.useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);
  useEffect(
    () => {
      getData();
    },
    // eslint-disable-next-line
    []
  );
  const getData = async () => {
    let token = localStorage.getItem("token");
    let data = await Request.getAllUsers(token);
    setUsers(data.user);
    setLoading(false);
  };
  const handleImage = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result);
      setData({ ...data, profile: e.target.files[0] });
    };
    reader.readAsDataURL(file);
  };
  const EmptyImage = () => {
    setImage("");
    setData({ ...data, profile: "" });
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
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.type === "file"
          ? e.target.files[0]
          : e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    showLoading();
    const {
      firstName,
      lastName,
      cnicNumber,
      mobNumber,
      LandlineNumber,
      whatsAppNumber,
      PassportNumber,
      email,
      userName,
      password,
      confirmPassword,
      country,
      province,
      district,
      tehsil,
      city,
      address,
      CreateAgent,
      DeactivateAgent,
      VerifyGroups,
      EditTickets,
      FindGroups,
      ViewReqNames,
      ViewDemands,
      EditContentData,
      EditAgentProfile,
      DeleteAgent,
      RejectGroups,
      VerifyTickets,
      FindTickets,
      VerifyReqName,
      TransferDemand,
      ViewAgentsAccount,
      ChangeAgentPassword,
      ViewGroups,
      DeleteGroups,
      RejectsTickets,
      EditSubcriptions,
      RejectReqName,
      EditDemands,
      ViewDeals,
      ActivateAgent,
      EditGroup,
      ViewTickets,
      DeleteTickets,
      ViewSubscriptions,
      DeleteReqName,
      DeleteDemand,
      ViewAgents,
      profile,
    } = data;
    let formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("cnicNumber", cnicNumber);
    formData.append("PassportNumber", PassportNumber);
    formData.append("LandlineNumber", LandlineNumber);
    formData.append("mobNumber", mobNumber);
    formData.append("whatsAppNumber", whatsAppNumber);
    formData.append("address", address);
    formData.append("password", password);
    formData.append("district", district);
    formData.append("tehsil", tehsil);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("country", country);
    formData.append("profile", profile);
    formData.append("CreateAgent", CreateAgent);
    formData.append("DeactivateAgent", DeactivateAgent);
    formData.append("VerifyGroups", VerifyGroups);
    formData.append("EditTickets", EditTickets);
    formData.append("ViewReqNames", ViewReqNames);
    formData.append("ViewDemands", ViewDemands);
    formData.append("EditContentData", EditContentData);
    formData.append("EditAgentProfile", EditAgentProfile);
    formData.append("DeleteAgent", DeleteAgent);
    formData.append("RejectGroups", RejectGroups);
    formData.append("VerifyTickets", VerifyTickets);
    formData.append("FindTickets", FindTickets);
    formData.append("FindGroups", FindGroups);
    formData.append("VerifyReqName", VerifyReqName);
    formData.append("TransferDemand", TransferDemand);
    formData.append("ViewAgentsAccount", ViewAgentsAccount);
    formData.append("ChangeAgentPassword", ChangeAgentPassword);
    formData.append("ViewGroups", ViewGroups);
    formData.append("DeleteGroups", DeleteGroups);
    formData.append("RejectsTickets", RejectsTickets);
    formData.append("EditSubcriptions", EditSubcriptions);
    formData.append("RejectReqName", RejectReqName);
    formData.append("EditDemands", EditDemands);
    formData.append("ViewDeals", ViewDeals);
    formData.append("ActivateAgent", ActivateAgent);
    formData.append("EditGroup", EditGroup);
    formData.append("ViewTickets", ViewTickets);
    formData.append("DeleteTickets", DeleteTickets);
    formData.append("ViewSubscriptions", ViewSubscriptions);
    formData.append("DeleteReqName", DeleteReqName);
    formData.append("DeleteDemand", DeleteDemand);
    formData.append("ViewAgents", ViewAgents);
    Request.CreateUser(formData, token)
      .then((res) => {
        cogoToast.success(res.message, { position: "top-right", hideAfter: 6 });
        getData();
        setData({
          firstName: "",
          lastName: "",
          cnicNumber: "",
          mobNumber: "",
          LandlineNumber: "",
          whatsAppNumber: "",
          PassportNumber: "",
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
          country: "",
          province: "",
          district: "",
          tehsil: "",
          city: "",
          address: "",
          CreateAgent: false,
          DeactivateAgent: false,
          VerifyGroups: false,
          EditTickets: false,
          FindGroups: false,
          ViewReqNames: false,
          ViewDemands: false,
          EditContentData: false,
          EditAgentProfile: false,
          DeleteAgent: false,
          RejectGroups: false,
          VerifyTickets: false,
          FindTickets: false,
          VerifyReqName: false,
          TransferDemand: false,
          ViewAgentsAccount: false,
          ChangeAgentPassword: false,
          ViewGroups: false,
          DeleteGroups: false,
          RejectsTickets: false,
          EditSubcriptions: false,
          RejectReqName: false,
          EditDemands: false,
          ViewDeals: false,
          ActivateAgent: false,
          EditGroup: false,
          ViewTickets: false,
          DeleteTickets: false,
          ViewSubscriptions: false,
          DeleteReqName: false,
          DeleteDemand: false,
          ViewAgents: false,
          profile: "",
        });
        setImage("");
        window.$("#createUser").modal("hide");
        hideLoading();
      })
      .catch((err) => {
        hideLoading();
        cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
      });
  };
  const DeleteAgents = (id) => {
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
        Request.DeleteUser(token, id)
          .then((res) => {
            setUsers(res.users);
            Swal.fire(res.message, "success");
          })
          .catch((err) => console.log(err, "error"));
      }
    });
  };
  const ActivateUser = (id) => {
    showLoading();
    Request.ActivateUser(token, id)
      .then((res) => {
        cogoToast.success(res.message, { position: "top-right", hideAfter: 6 });
        setUsers(res.users);
        hideLoading();
      })
      .catch((err) => {
        hideLoading();
        cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
      });
  };
  const DisableUser = (id) => {
    showLoading();
    Request.DisableUser(token, id)
      .then((res) => {
        cogoToast.success(res.message, { position: "top-right", hideAfter: 6 });
        setUsers(res.users);
        hideLoading();
      })
      .catch((err) => {
        hideLoading();
        cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
      });
  };
  const EditUser = (id) => {
    showLoading();
    setUpdate(true);
    Request.GetOneUser(token, id)
      .then((res) => {
        setData(res.user);
        if (res.user.profile) {
          setImage(`${Routes.imageUrl}${res.user.profile}`);
        }
        window.$("#createUser").modal("show");
        hideLoading();
      })
      .catch((err) => {
        hideLoading();
        cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
      });
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    showLoading();
    const {
      firstName,
      lastName,
      cnicNumber,
      mobNumber,
      LandlineNumber,
      whatsAppNumber,
      PassportNumber,
      email,
      userName,
      country,
      province,
      district,
      tehsil,
      city,
      address,
      CreateAgent,
      DeactivateAgent,
      VerifyGroups,
      EditTickets,
      FindGroups,
      ViewReqNames,
      ViewDemands,
      EditContentData,
      EditAgentProfile,
      DeleteAgent,
      RejectGroups,
      VerifyTickets,
      FindTickets,
      VerifyReqName,
      TransferDemand,
      ViewAgentsAccount,
      ChangeAgentPassword,
      ViewGroups,
      DeleteGroups,
      RejectsTickets,
      EditSubcriptions,
      RejectReqName,
      EditDemands,
      ViewDeals,
      ActivateAgent,
      EditGroup,
      ViewTickets,
      DeleteTickets,
      ViewSubscriptions,
      DeleteReqName,
      DeleteDemand,
      ViewAgents,
      profile,
    } = data;
    let formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("cnicNumber", cnicNumber);
    formData.append("PassportNumber", PassportNumber);
    formData.append("LandlineNumber", LandlineNumber);
    formData.append("mobNumber", mobNumber);
    formData.append("whatsAppNumber", whatsAppNumber);
    formData.append("address", address);
    formData.append("district", district);
    formData.append("tehsil", tehsil);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("country", country);
    formData.append("profile", profile);
    formData.append("CreateAgent", CreateAgent);
    formData.append("DeactivateAgent", DeactivateAgent);
    formData.append("VerifyGroups", VerifyGroups);
    formData.append("EditTickets", EditTickets);
    formData.append("ViewReqNames", ViewReqNames);
    formData.append("ViewDemands", ViewDemands);
    formData.append("EditContentData", EditContentData);
    formData.append("EditAgentProfile", EditAgentProfile);
    formData.append("DeleteAgent", DeleteAgent);
    formData.append("RejectGroups", RejectGroups);
    formData.append("VerifyTickets", VerifyTickets);
    formData.append("FindTickets", FindTickets);
    formData.append("FindGroups", FindGroups);
    formData.append("VerifyReqName", VerifyReqName);
    formData.append("TransferDemand", TransferDemand);
    formData.append("ViewAgentsAccount", ViewAgentsAccount);
    formData.append("ChangeAgentPassword", ChangeAgentPassword);
    formData.append("ViewGroups", ViewGroups);
    formData.append("DeleteGroups", DeleteGroups);
    formData.append("RejectsTickets", RejectsTickets);
    formData.append("EditSubcriptions", EditSubcriptions);
    formData.append("RejectReqName", RejectReqName);
    formData.append("EditDemands", EditDemands);
    formData.append("ViewDeals", ViewDeals);
    formData.append("ActivateAgent", ActivateAgent);
    formData.append("EditGroup", EditGroup);
    formData.append("ViewTickets", ViewTickets);
    formData.append("DeleteTickets", DeleteTickets);
    formData.append("ViewSubscriptions", ViewSubscriptions);
    formData.append("DeleteReqName", DeleteReqName);
    formData.append("DeleteDemand", DeleteDemand);
    formData.append("ViewAgents", ViewAgents);
    Request.EditOneUser(formData, token, data._id)
      .then((res) => {
        cogoToast.success(res.message, { position: "top-right", hideAfter: 6 });
        getData();
        setData({
          firstName: "",
          lastName: "",
          cnicNumber: "",
          mobNumber: "",
          LandlineNumber: "",
          whatsAppNumber: "",
          PassportNumber: "",
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
          country: "",
          province: "",
          district: "",
          tehsil: "",
          city: "",
          address: "",
          CreateAgent: false,
          DeactivateAgent: false,
          VerifyGroups: false,
          EditTickets: false,
          FindGroups: false,
          ViewReqNames: false,
          ViewDemands: false,
          EditContentData: false,
          EditAgentProfile: false,
          DeleteAgent: false,
          RejectGroups: false,
          VerifyTickets: false,
          FindTickets: false,
          VerifyReqName: false,
          TransferDemand: false,
          ViewAgentsAccount: false,
          ChangeAgentPassword: false,
          ViewGroups: false,
          DeleteGroups: false,
          RejectsTickets: false,
          EditSubcriptions: false,
          RejectReqName: false,
          EditDemands: false,
          ViewDeals: false,
          ActivateAgent: false,
          EditGroup: false,
          ViewTickets: false,
          DeleteTickets: false,
          ViewSubscriptions: false,
          DeleteReqName: false,
          DeleteDemand: false,
          ViewAgents: false,
          profile: "",
        });
        setImage("");
        window.$("#createUser").modal("hide");
        hideLoading();
      })
      .catch((err) => {
        hideLoading();
        cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
      });
  };
  const onCloseButton = () => {
    setImage("");
    setData({
      firstName: "",
      lastName: "",
      cnicNumber: "",
      mobNumber: "",
      LandlineNumber: "",
      whatsAppNumber: "",
      PassportNumber: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      country: "",
      province: "",
      district: "",
      tehsil: "",
      city: "",
      address: "",
      CreateAgent: false,
      DeactivateAgent: false,
      VerifyGroups: false,
      EditTickets: false,
      FindGroups: false,
      ViewReqNames: false,
      ViewDemands: false,
      EditContentData: false,
      EditAgentProfile: false,
      DeleteAgent: false,
      RejectGroups: false,
      VerifyTickets: false,
      FindTickets: false,
      VerifyReqName: false,
      TransferDemand: false,
      ViewAgentsAccount: false,
      ChangeAgentPassword: false,
      ViewGroups: false,
      DeleteGroups: false,
      RejectsTickets: false,
      EditSubcriptions: false,
      RejectReqName: false,
      EditDemands: false,
      ViewDeals: false,
      ActivateAgent: false,
      EditGroup: false,
      ViewTickets: false,
      DeleteTickets: false,
      ViewSubscriptions: false,
      DeleteReqName: false,
      DeleteDemand: false,
      ViewAgents: false,
      profile: "",
    });
    setUpdate(false);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let Users = currentPosts.map?.((val, ind) => {
    return (
      <tr key={ind}>
        <td>{ind + 1}</td>
        <td>PFU-{ind + 1}</td>
        <td>
          <img
            className="rounded-circle mr-2 "
            style={{ width: "2.5rem" }}
            src={
              val.profile
                ? Routes.imageUrl + val.profile
                : "assets/media/users/blank.png"
            }
            alt="logo"
          />
          {val.firstName + " " + val.lastName}
        </td>
        <td>{val.email}</td>
        <td>{val.mobNumber}</td>
        <td>
          {val.Active ? (
            <span>
              <span className="label font-weight-bold label-lg  label-light-success label-inline">
                Active
              </span>
            </span>
          ) : (
            <span>
              <span className="label font-weight-bold label-lg  label-light-success label-inline">
                Disabled
              </span>
            </span>
          )}
        </td>
        <td>
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
        </td>
      </tr>
    );
  });
  const labels = [
    " No#",
    "PFU No#",
    "Full Name",
    "Email",
    "Phone",
    "Status",
    "Actions",
  ];
  return (
    <>
      <div className="card card-custom w-100">
        <div className="card-header flex-wrap border-0 pt-6 pb-0">
          <div className="card-title">
            <h3 className="card-label">All Employes</h3>
          </div>
          <div className="card-toolbar">
            {/*begin::Button*/}

            <span
              type="button"
              className="btn btn-primary font-weight-bolder"
              data-toggle="modal"
              data-target="#createUser"
            >
              <i className="la la-plus" />
              Add New Employee
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
              <Table labels={labels} data={Users} />
              <Pagination
                totalPosts={users?.length}
                postsPerPage={postsPerPage}
                paginate={paginate}
                page={currentPage}
                setPostsPerPage={setPostsPerPage}
              />
            </>
          )}
        </div>
      </div>
      <CreateUserModel
        data={data}
        handleInputChange={handleInputChange}
        handleSubmit={update ? handleEditSubmit : handleSubmit}
        handleImage={handleImage}
        image={image}
        EmptyImage={EmptyImage}
        update={update}
        onCloseButton={onCloseButton}
      />
    </>
  );
};

export default Home;
