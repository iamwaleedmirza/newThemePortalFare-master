import React from "react";

const CreateUserModel = (props) => {
  let {
    data,
    handleInputChange,
    handleSubmit,
    handleImage,
    image,
    EmptyImage,
    update,
    onCloseButton,
  } = props;
  return (
    <div
      className="modal fade"
      id="createUser"
      data-backdrop="static"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="staticBackdrop"
      aria-hidden="true"
    >
      <div
        className="modal-dialog  modal-dialog-centered modal-xl"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createUserLabel">
              Create User
            </h5>
            <button
              onClick={() => onCloseButton()}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i aria-hidden="true" className="ki ki-close" />
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">
                        User Name <span className="text-danger">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        placeholder="Enter user name"
                        name="userName"
                        value={data.userName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={data.firstName}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        name="lastName"
                        value={data.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-4 col-lg-4">
                    <label>
                      Image{" "}
                      <small className="text-muted">
                        (Allowed file types: png, jpg, jpeg.)
                      </small>
                    </label>
                    <div className=" text-center w-75 border  mb-2">
                      <div
                        className="image-input image-input-outline image-input-empty w-100"
                        style={{
                          backgroundImage: `url(${
                            image ? image : "assets/media/users/blank.png"
                          })`,
                          backgroundPosition: "center",
                          height: "170px",
                          backgroudSize: "cover",
                        }}
                      >
                        <div
                          className="image-input-wrapper w-100"
                          style={{
                            backgroundImage: "none",
                            height: "100%",
                          }}
                        />
                        <label
                          className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                          data-action="change"
                          data-toggle="tooltip"
                          title
                          data-original-title="Change Logo"
                        >
                          <i className="fa fa-pen icon-sm text-muted" />
                          <input
                            type="file"
                            name="profile"
                            accept=".png, .jpg, .jpeg"
                            // value={LabInfo.profile_avatar}
                            onChange={(e) => handleImage(e)}
                          />
                          <input type="hidden" name="profile_avatar_remove" />
                        </label>
                        <span
                          className={`btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow ${
                            image ? "d-flex" : ""
                          } `}
                          data-action="cancel"
                          data-toggle="tooltip"
                          title="Cancel Logo"
                          onClick={() => EmptyImage()}
                        >
                          <i className="ki ki-bold-close icon-xs text-muted" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">
                        CNIC No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter CNIC"
                        name="cnicNumber"
                        value={data.cnicNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Passport No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Passport No."
                        name="PassportNumber"
                        value={data.PassportNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Phone No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone No."
                        name="LandlineNumber"
                        value={data.LandlineNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Mobile No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile No."
                        name="mobNumber"
                        value={data.mobNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">What's App No.</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter What's App No."
                        name="whatsAppNumber"
                        value={data.whatsAppNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div class="form-group">
                      <label className="font-weight-bold" htmlFor="Country">
                        Country
                      </label>
                      <select
                        class="form-control "
                        name="country"
                        value={data.country}
                        onChange={handleInputChange}
                        id="Country"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <label className="font-weight-bold" htmlFor="Province">
                        Province
                      </label>
                      <select
                        class="form-control "
                        name="province"
                        value={data.province}
                        onChange={handleInputChange}
                        id="Province"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <label className="font-weight-bold" htmlFor="City">
                        City
                      </label>
                      <select
                        class="form-control "
                        name="city"
                        value={data.city}
                        onChange={handleInputChange}
                        id="City"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <label className="font-weight-bold" htmlFor="District">
                        District
                      </label>
                      <select
                        class="form-control "
                        name="district"
                        value={data.district}
                        onChange={handleInputChange}
                        id="District"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <label className="font-weight-bold" htmlFor="Tehsil">
                        Tehsil
                      </label>
                      <select
                        class="form-control "
                        name="tehsil"
                        value={data.tehsil}
                        onChange={handleInputChange}
                        id="Tehsil"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group mb-1">
                      <label className="font-weight-bold">
                        Address <span class="text-danger">*</span>
                      </label>
                      <textarea
                        class="form-control"
                        name="address"
                        value={data.address}
                        onChange={handleInputChange}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  {update ? (
                    ""
                  ) : (
                    <>
                      <div className="col-12 col-md-4 col-lg-4">
                        <div class="form-group">
                          <label className="font-weight-bold">
                            Password <span class="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4">
                        <div class="form-group">
                          <label className="font-weight-bold">
                            Confirm Password <span class="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <h1 className=" mt-5">User Rights</h1>
                <div className="row mt-5 ">
                  <div className="col-3">
                    <div className="row  align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              checked={false}
                              name="CreateAgent"
                              checked={data.CreateAgent}
                              onChange={handleInputChange}
                              id="createAgent"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="createAgent"
                      >
                        Create Agent
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="DeactivateAgent"
                              checked={data.DeactivateAgent}
                              onChange={handleInputChange}
                              id="dactivateAgent"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="dactivateAgent"
                      >
                        Deactivate Agent
                      </label>
                    </div>
                    <div className="row align-items-center ">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="VerifyGroups"
                              checked={data.VerifyGroups}
                              onChange={handleInputChange}
                              id="VerifyGroups"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="VerifyGroups"
                      >
                        Verify Groups
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="EditTickets"
                              checked={data.EditTickets}
                              onChange={handleInputChange}
                              id="EditTickets"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="EditTickets"
                      >
                        Edit Tickets
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary ">
                          <label>
                            <input
                              type="checkbox"
                              name="FindGroups"
                              checked={data.FindGroups}
                              onChange={handleInputChange}
                              id="FindGroups"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="FindGroups"
                      >
                        Find Groups
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ViewReqNames"
                              checked={data.ViewReqNames}
                              onChange={handleInputChange}
                              id="ViewReqNames"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="ViewReqNames"
                      >
                        View Req. Names
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ViewDemands"
                              checked={data.ViewDemands}
                              onChange={handleInputChange}
                              id="ViewDemands"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer  "
                        htmlFor="ViewDemands"
                      >
                        View Demands
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="EditContentData"
                              checked={data.EditContentData}
                              onChange={handleInputChange}
                              id="EditContent/Data"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="EditContent/Data"
                      >
                        Edit Content/Data
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row  align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="EditAgentProfile"
                              checked={data.EditAgentProfile}
                              onChange={handleInputChange}
                              id="EditAgentProfile"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="EditAgentProfile"
                      >
                        Edit Agent Profile
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="DeleteAgent"
                              checked={data.DeleteAgent}
                              onChange={handleInputChange}
                              id="DeleteAgent"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="DeleteAgent"
                      >
                        Delete Agent
                      </label>
                    </div>
                    <div className="row align-items-center ">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="RejectGroups"
                              checked={data.RejectGroups}
                              onChange={handleInputChange}
                              id="RejectGroups"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="RejectGroups"
                      >
                        Reject Groups
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="VerifyTickets"
                              checked={data.VerifyTickets}
                              onChange={handleInputChange}
                              id="VerifyTickets"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="VerifyTickets"
                      >
                        Verify Tickets
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary ">
                          <label>
                            <input
                              type="checkbox"
                              name="FindTickets"
                              checked={data.FindTickets}
                              onChange={handleInputChange}
                              id="FindTickets"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="FindTickets"
                      >
                        Find Tickets
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="VerifyReqName"
                              checked={data.VerifyReqName}
                              onChange={handleInputChange}
                              id="VerifyReqName"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="VerifyReqName"
                      >
                        Verify Req. Name
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="TransferDemand"
                              checked={data.TransferDemand}
                              onChange={handleInputChange}
                              id="TransferDemand"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label  cursor-pointer "
                        htmlFor="TransferDemand"
                      >
                        Transfer Demand
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ViewAgentsAccount"
                              checked={data.ViewAgentsAccount}
                              onChange={handleInputChange}
                              id="ViewAgentsAccount"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="ViewAgentsAccount"
                      >
                        View Agents Account
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row  align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ChangeAgentPassword"
                              checked={data.ChangeAgentPassword}
                              onChange={handleInputChange}
                              id="ChangeAgentPassword"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="ChangeAgentPassword"
                      >
                        Change Agent Password
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ViewGroups"
                              checked={data.ViewGroups}
                              onChange={handleInputChange}
                              id="ViewGroup"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="ViewGroup"
                      >
                        View Group
                      </label>
                    </div>
                    <div className="row align-items-center ">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="DeleteGroups"
                              checked={data.DeleteGroups}
                              onChange={handleInputChange}
                              id="DeleteGroups"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="DeleteGroups"
                      >
                        Delete Groups
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="RejectsTickets"
                              checked={data.RejectsTickets}
                              onChange={handleInputChange}
                              id="RejectsTickets"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="RejectsTickets"
                      >
                        Rejects Tickets
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary ">
                          <label>
                            <input
                              type="checkbox"
                              name="RejectReqName"
                              checked={data.RejectReqName}
                              onChange={handleInputChange}
                              id="RejectReqName"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="RejectReqName"
                      >
                        Reject Req. Name
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="EditDemands"
                              checked={data.EditDemands}
                              onChange={handleInputChange}
                              id="EditDemands"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="EditDemands"
                      >
                        Edit Demands
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ViewDeals"
                              checked={data.ViewDeals}
                              onChange={handleInputChange}
                              id="ViewDeals"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer  "
                        htmlFor="ViewDeals"
                      >
                        View Deals
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ActivateAgent"
                              checked={data.ActivateAgent}
                              onChange={handleInputChange}
                              id="ActivateAgent"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="ActivateAgent"
                      >
                        Activate Agent
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row  align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="EditGroup"
                              checked={data.EditGroup}
                              onChange={handleInputChange}
                              id="EditGroup"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="EditGroup"
                      >
                        Edit Group
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ViewTickets"
                              checked={data.ViewTickets}
                              onChange={handleInputChange}
                              id="ViewTickets"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="ViewTickets"
                      >
                        View Tickets
                      </label>
                    </div>
                    <div className="row align-items-center ">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="DeleteTickets"
                              checked={data.DeleteTickets}
                              onChange={handleInputChange}
                              id="DeleteTickets"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="DeleteTickets"
                      >
                        Delete Tickets
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="DeleteReqName"
                              checked={data.DeleteReqName}
                              onChange={handleInputChange}
                              id="DeleteReqName"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="DeleteReqName"
                      >
                        Delete Req. Name
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary ">
                          <label>
                            <input
                              type="checkbox"
                              name="DeleteDemand"
                              checked={data.DeleteDemand}
                              onChange={handleInputChange}
                              id="DeleteDemand"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer"
                        htmlFor="DeleteDemand"
                      >
                        Delete Demand
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ViewAgents"
                              checked={data.ViewAgents}
                              onChange={handleInputChange}
                              id="ViewAgents"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="ViewAgents"
                      >
                        View Agents
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="EditSubcriptions"
                              checked={data.EditSubcriptions}
                              onChange={handleInputChange}
                              id="EditSubcriptions"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="EditSubcriptions"
                      >
                        Edit Subcriptions
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div class="col-3">
                        <span class="switch switch-outline switch-icon switch-sm  switch-primary">
                          <label>
                            <input
                              type="checkbox"
                              name="ViewSubscriptions"
                              checked={data.ViewSubscriptions}
                              onChange={handleInputChange}
                              id="ViewSubscriptions"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                      <label
                        class="col-form-label cursor-pointer "
                        htmlFor="ViewSubscriptions"
                      >
                        View Subscriptions
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => onCloseButton()}
              type="button"
              className="btn btn-light-primary font-weight-bold"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary font-weight-bold"
            >
              {update ? "Update User" : "Create User"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModel;
