import React from "react";

const ViewUploadedNames = (props) => {
  let { onCloseButton, data } = props;
  return (
    <div
      className="modal fade"
      id="ViewMyNameModal"
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
            <h3>Uploaded Name</h3>
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
          <div className="modal-body pl-10">
            <div className="row mb-0">
              {/*begin::Info*/}
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Passenger Type
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.passengerType}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">Title</span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.title}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    First Name
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.firstName}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Last Name
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.lastName}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Exchangeable
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.exchangeable}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Refundable
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.refundable_nonRefundable}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">Fare</span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.fare_price}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    CRS PNR
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.CRSPNR}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Airline PNR
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.airlinePNR}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Booking Time Limit
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data && data.expiryTime}
                  </span>
                </div>
              </div>
            </div>
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

            {/* <button
                onClick={() => onCloseButton()}
                type="button"
                className="btn btn-primary font-weight-bold"
              >
                Buy Ticket
              </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUploadedNames;
