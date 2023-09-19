import React from "react";

const CreateAgentModal = (props) => {
  return (
    <div
      className="modal fade"
      id="createAgent"
      data-backdrop="static"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="staticBackdrop"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createAgentLabel">
              Create User
            </h5>
            <button
              type="button"
              onClick={props.onCloseButton}
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
                        type="text"
                        className="form-control"
                        placeholder="Enter User Name"
                        name="userName"
                        value={props.data.userName}
                        onChange={props.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Company Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Company Name"
                        name="companyName"
                        value={props.data.companyName}
                        onChange={props.handleInputChange}
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
                        value={props.data.email}
                        onChange={props.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Company Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Company Email"
                        name="companyEmail"
                        value={props.data.companyEmail}
                        onChange={props.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-4 col-lg-4">
                    <label>
                      Image
                      <small className="text-muted">
                        (Allowed file types: png, jpg, jpeg.)
                      </small>
                    </label>
                    <div className=" text-center w-75 border  mb-2">
                      <div
                        className="image-input image-input-outline image-input-empty w-100"
                        style={{
                          backgroundImage: `url(${
                            props.image
                              ? props.image
                              : "assets/media/users/blank.png"
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
                            onChange={(e) => props.handleImage(e)}
                          />
                          <input type="hidden" name="profile_avatar_remove" />
                        </label>
                        <span
                          className={`btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow ${
                            props.image ? "d-flex" : ""
                          } `}
                          data-action="cancel"
                          data-toggle="tooltip"
                          title="Cancel Logo"
                          onClick={props.EmptyImage}
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
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        value={props.data.firstName}
                        onChange={props.handleInputChange}
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
                        value={props.data.PassportNumber}
                        onChange={props.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        name="lastName"
                        value={props.data.lastName}
                        onChange={props.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">
                        License No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter License No."
                        name="licenseNo"
                        value={props.data.licenseNo}
                        onChange={props.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">
                        CNIC No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter CNIC No."
                        name="cnicNumber"
                        value={props.data.cnicNumber}
                        onChange={props.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Phone No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone No."
                        name="LandlineNumber"
                        value={props.data.LandlineNumber}
                        onChange={props.handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">
                        Mobile No. <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">+92</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                          name="mobNumber"
                          value={props.data.mobNumber}
                          onChange={props.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">
                        WhatsApp No. <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i
                              className="fa fa-whatsapp text-primary"
                              aria-hidden="true"
                            ></i>
                            +92
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter WhatsApp Number"
                          name="whatsAppNumber"
                          value={props.data.whatsAppNumber}
                          onChange={props.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold">IATA</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <label className="checkbox checkbox-inline checkbox-success">
                              <input
                                type="checkbox"
                                name="iataVerify"
                                checked={props.data.iataVerify}
                                onChange={props.handleInputChange}
                              />
                              <span></span>
                            </label>
                          </span>
                        </div>
                        {props.data.iataVerify ? (
                          <input
                            type="text"
                            name="iataNo"
                            value={props.data.iataNo}
                            onChange={props.handleInputChange}
                            className="form-control"
                            placeholder="Enter IATA No."
                          />
                        ) : (
                          <input
                            type="text"
                            name="iataNo"
                            className="form-control"
                            placeholder="Please Check the box to enter IATA no"
                            disabled
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold" htmlFor="country">
                        Country
                      </label>
                      <select
                        className="form-control "
                        id="country"
                        name="country"
                        value={props.data.country}
                        onChange={props.handleInputChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold" htmlFor="district">
                        District
                      </label>
                      <select
                        className="form-control "
                        id="district"
                        value={props.data.district}
                        name="district"
                        onChange={props.handleInputChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    {props.update ? (
                      ""
                    ) : (
                      <div className="form-group">
                        <label className="font-weight-bold">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={props.data.password}
                          onChange={props.handleInputChange}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold" htmlFor="city">
                        City
                      </label>
                      <select
                        className="form-control "
                        id="city"
                        name="city"
                        value={props.data.city}
                        onChange={props.handleInputChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold" htmlFor="tehsil">
                        Tehsil
                      </label>
                      <select
                        className="form-control "
                        id="tehsil"
                        name="tehsil"
                        value={props.data.tehsil}
                        onChange={props.handleInputChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    {props.update ? (
                      ""
                    ) : (
                      <div className="form-group">
                        <label className="font-weight-bold">
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={props.data.confirmPassword}
                          onChange={props.handleInputChange}
                        />
                      </div>
                    )}
                  </div>

                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <label className="font-weight-bold" htmlFor="province">
                        Province
                      </label>
                      <select
                        className="form-control "
                        id="province"
                        name="province"
                        value={props.data.province}
                        onChange={props.handleInputChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">Address</label>
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        value={props.data.address}
                        onChange={props.handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    {/* <div className="form-group">
                      <label className="font-weight-bold">
                        Address Line 1 <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 1"
                        name="addressLine1"
                        value={props.data.addressLine1}
                        onChange={props.handleInputChange}
                      />
                    </div> */}
                  </div>
                  <div className="col-12 col-md-4 col-lg-4"></div>
                  <div className="col-12 col-md-4 col-lg-4"></div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={props.onCloseButton}
              className="btn btn-light-primary font-weight-bold"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary font-weight-bold"
              onClick={props.handleSubmit}
            >
              {props.update ? "Submit Changes" : "Create Agent"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAgentModal;
