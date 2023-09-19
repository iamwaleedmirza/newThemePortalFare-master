import React from "react";

const UploadNamesModal = (props) => {
  let { data, onSubmit, onChange, onCloseButton } = props;
  return (
    <div
      className="modal fade"
      id="uploadNames"
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
            <h5 className="modal-title" id="createTicketLabel">
              Create Names
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
              <div className="card-body pt-2">
                {/* Create Ticket  Start*/}
                <div className="row mt-0">
                  <div className="col-4">
                    <div className="row">
                      <div className="col-6">
                        <div class="form-group">
                          <label>PassengerType</label>
                          <select
                            className="form-control"
                            name="passengerType"
                            required
                            value={data.passengerType}
                            onChange={(e) => onChange(e)}
                          >
                            <option>Select</option>
                            <option>Adult</option>
                            <option>Child</option>
                            <option>Infant</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-group">
                          <label>Title</label>
                          <select
                            className="form-control"
                            name="title"
                            required
                            value={data.title}
                            onChange={(e) => onChange(e)}
                          >
                            <option>Select</option>
                            <option>MR</option>
                            <option>MRS</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-group ">
                      <label for="Fare" className="">
                        First Name
                      </label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={data.firstName}
                        className="form-control"
                        placeholder="First Name"
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-group ">
                      <label for="Fare" className="">
                        Last Name
                      </label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={data.lastName}
                        className="form-control"
                        placeholder="Last Name"
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>

                  <div className="col-4">
                    <div class="form-group">
                      <label>Airline</label>
                      <select
                        required
                        className="form-control"
                        name="airline"
                        value={data.airline}
                        onChange={(e) => onChange(e)}
                      >
                        <option>Select</option>
                        <option>PK(PAKISTAN INTERNATIONAL AIRLINE)</option>
                        <option>PA(AIRBLUE)</option>
                        <option>NL(SHAHEEN AIR)</option>
                        <option>SV(SAUDI AIRLINES)</option>
                        <option>EK(FLY EMIRATES)</option>
                        <option>EY(ETIHAD AIRWAYS)</option>
                        <option>KU(KUWAIT AIRWAYS)</option>
                        <option>GF(GULF AIRLINES)</option>
                        <option>WY(OMAN AIR)</option>
                        <option>OV(SALAM AIR)</option>
                        <option>QR(QATAR AIRWAYS)</option>
                        <option>G9(AIR ARABIA)</option>
                        <option>FZ(FLY DUBAI)</option>
                        <option>TK(TURKISH AIRWAYS)</option>
                        <option>6S(SAUDI GULF)</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-4 ">
                    <div class="form-group ">
                      <label className="">Exchangeable</label>
                      <select
                        required
                        className="form-control "
                        name="exchangeable"
                        value={data.exchangeable}
                        onChange={(e) => onChange(e)}
                      >
                        <option>Select</option>
                        <option>Exchange-able</option>
                        <option>Non Exchange-able</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="form-group">
                      <label for="RefundableNon-Refundable">
                        Refundable/Non-Refundable
                      </label>
                      <select
                        required
                        className="form-control"
                        name="refundable_nonRefundable"
                        value={data.refundable_nonRefundable}
                        onChange={(e) => onChange(e)}
                      >
                        {" "}
                        <option>Select</option>
                        <option>Refundable</option>
                        <option>Non-Refundable</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-group ">
                      <label for="Fare" className="">
                        Fare
                      </label>
                      <input
                        required
                        type="text"
                        name="fare_price"
                        value={data.fare_price}
                        className="form-control"
                        placeholder="23000"
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="form-group">
                      <label className="">
                        Ticket Time Limit / Expiry Time
                      </label>
                      <input
                        className="form-control "
                        required
                        type="datetime-local"
                        name="expiryTime"
                        id="expiryTime"
                        value={data.expiryTime}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div class="form-group col-4">
                    <label className="">CRS PNR</label>
                    <input
                      required
                      type="text"
                      name="CRSPNR"
                      value={data.CRSPNR}
                      className="form-control "
                      onChange={(e) => onChange(e)}
                      placeholder="CSR PNR"
                    />
                  </div>
                  <div className="col-4">
                    <div class="form-group ">
                      <label className="">AIRLINE PNR</label>
                      <input
                        required
                        type="text"
                        name="airlinePNR"
                        value={data.airlinePNR}
                        onChange={(e) => onChange(e)}
                        className="form-control "
                        placeholder="Airline PNR"
                      />
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
              onClick={onSubmit}
              className="btn btn-primary font-weight-bold"
            >
              Upload Names
              {/* {update ? "Update User" : "Create User"} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadNamesModal;
