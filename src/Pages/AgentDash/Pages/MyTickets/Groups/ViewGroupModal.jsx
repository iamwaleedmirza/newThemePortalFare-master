import React from "react";
import Timer from "../../All Deals/Timer";
const ViewGroupModal = (props) => {
  let { onCloseButton, group } = props;
  const formatTime = (datetime) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var date  = new Date(Date.parse(datetime));
    return date.toLocaleDateString("en-US",options);
  }
  return (
    <div
      className="modal fade"
      id="ViewgroupModal"
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
            {group.Verified ? (
              <span>
                <span className="label font-weight-bold label-lg  label-light-success label-inline p-4 pl-10 pr-10">
                  Verified
                </span>
              </span>
            ) : group.rejected ? (
              <span className="label font-weight-bold label-lg  label-light-danger label-inline p-4 pl-10 pr-10">
                Rejected
              </span>
            ) : (
              <span className="label font-weight-bold label-lg  label-light-warning label-inline p-4 pl-10 pr-10">
                Pending
              </span>
            )}
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
            <span className="text-dark  mb-4">
              <b>Created By : </b> &nbsp; &nbsp;
              <span className="text-muted">
                {group && group.createdBy.firstName}{" "}
              </span>
              &nbsp; &nbsp;
              <b>Company Name :</b>&nbsp;
              <span className="text-muted">
                {group && group.createdBy.companyName}
              </span>
              &nbsp; &nbsp;
              <b>Email :</b>&nbsp;
              <span className="text-muted">
                {group && group.createdBy.email}{" "}
              </span>
              &nbsp; &nbsp;
              <b> Company Email :</b>&nbsp;
              <span className="text-muted">
                {group && group.createdBy.companyEmail}
              </span>
              &nbsp; &nbsp;
              <b> Mobile number :</b>&nbsp;
              <span className="text-muted">
                {group && group.createdBy.mobNumber}
              </span>
            </span>

            <hr />
            <div className="row mb-0">
              {/*begin::Info*/}
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Tour Type
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.tourType}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Airline
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.airline}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Refundable
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.refundable_nonRefundable}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Exchangeable
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.exchangeable}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Via/Direct{" "}
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.via_Direct}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    One Way / Return
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.oneway_return}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Reservation/Ticketed
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.booked_ticketed}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">Adult</span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.adult}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">Child</span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.child}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Infant
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.infants}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Baggage
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.Baggage + " KG"}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Hand Carry
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.HandCarry + " KG"}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    CRS PNR
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.CRSPNR}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Airline PNR
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.airlinePNR}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Others PNR
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.otherPNR}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    Booking Time Limit
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                  { Object.keys(group).length ? <Timer expiryTime={group?.expiryTime} /> : '__-__-__' }  
                  </span>
                </div>
              </div>
              {/* <div className="col-6 col-md-3">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    No. of Installments
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {group.noOfInstallment}
                  </span>
                </div>
              </div> */}
            </div>

            {/* <h4 className="mb-4 mt-0">Installments</h4>
            <div className="row mb-5">
              {group.installments
                ? group.installments.map?.((val, ind) => {
                    return (
                      <div className="col-1 p-0" key={ind}>
                        <span className="p-3 rounded bg-light-danger">
                          {"PKR :" + val}
                        </span>
                      </div>
                    );
                  })
                : ""}
            </div> */}
            <h4 className="mb-4 mt-0">Sector Details</h4>
            <div className="row ">
                    <div className="col-6">
                  {group?.outGoingSectors
                    ? group.outGoingSectors?.map?.((val, ind) => {
                        // const {hours, minutes} = calculateStayTime(val, sectors.outGoingSectors[ind + 1]);
                        let values = [];
                    if (group.outGoingSectors[ind + 1]) {
                      let to = val?.ToTime_OutGoing;
                      let from = group.outGoingSectors[ind + 1]?.FromTime_OutGoing;
                      values.push({ from, to });
                    }
                    const difference =
                      new Date(values[0]?.from) - new Date(values[0]?.to);
                    const hours = Math.floor(
                      (difference / (1000 * 60 * 60)) % 24
                    );
                    const minutes = Math.floor((difference / 1000 / 60) % 60);

                        return (
                          <>
                            <div className="col-12 col-md-12  bg-light-primary ml-3">
                              <h5 className="text-dark font-weight-bold mb-4 text-center mt-2">
                               Out Going Sector {""}
                                {group.via_Direct_Out_Going === "DIRECT"
                                  ? ""
                                  : ind === 0
                                  ? "1"
                                  : ind + 1}
                              </h5>
                              <div className="d-flex justify-content-between">
                                <div className="mb-8 d-flex flex-column">
                                  <span className="text-dark font-weight-bold mb-4">
                                    Flight
                                  </span>
                                  <span className="text-muted font-weight-bolder font-size-lg">
                                    {val.flight_OutGoing}
                                  </span>
                                </div>

                              </div>
                              <div className="d-flex justify-content-between">
                                <div className="w-100 d-flex  justify-content-between ">
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">
                                      From
                                    </span>
                                    <span className="text-muted font-weight-bolder font-size-lg text-truncate w-100">
                                      {val.FromCity_OutGoing}
                                    </span>
                                  </div>
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">
                                      At
                                    </span>
                                    <span className="text-muted font-weight-bolder font-size-lg">
                                      {formatTime(val.FromTime_OutGoing)}
                                    </span>
                                  </div>
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">
                                      To
                                    </span>
                                    <span className="text-muted font-weight-bolder font-size-lg text-truncate w-100">
                                      {val.ToCity_OutGoing}
                                    </span>
                                  </div>
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">
                                      At
                                    </span>
                                    <span className="text-muted font-weight-bolder font-size-lg">
                                      {formatTime(val.ToTime_OutGoing)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          
                          {hours || minutes ? (
                          <div className="bg-light-secondary col-12 col-md-12 col-lg-12 ml-3 mt-3"  >
                            <p className=" font-weight-bold text-center text-truncate w-100" style={{color:"brown"}}>
                              Stay At
                            <h5 className="font-weight-bold  d-inline mb-4 text-center mt-2 ml-2 mr-2">
                            {group.outGoingSectors[ind + 1]?.FromCity_OutGoing}
                            <span className="text-center font-weight-bold ml-4">
                              {hours ? `${hours} h` : ""}{" "}
                              {minutes ? `${minutes} m` : ""}
                            </span> 
                            </h5>
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                          </>
                        );
                      })
                    : ""}
                    </div>
                    <div className="col-6">
                    {group?.returnSectors
                    ? group?.returnSectors?.map?.((val, ind) => {
                      let values = [];
                      let nextSector = group.returnSectors[ind + 1];
                      if (nextSector) {
                        let to = val?.ToTime_Return;
                        let from = nextSector?.FromTime_Return;
                        values.push({ from, to });
                      }
                      const difference =
                        new Date(values[0]?.from) - new Date(values[0]?.to);
                      const hours = Math.floor(
                        (difference / (1000 * 60 * 60)) % 24
                      );
                      const minutes = Math.floor((difference / 1000 / 60) % 60);
                        return (
                          <>
                            <div className="col-12 col-md-12  bg-light-primary ml-3">
                          <h5 className="text-dark font-weight-bold mb-4 text-center mt-2">
                            Return Sector {""}
                            {group.via_Direct_Return === "DIRECT"
                              ? ""
                              : ind === 0
                              ? "1"
                              : ind + 1}
                          </h5>
                          <div className="d-flex justify-content-between">
                            <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                Flight
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {val.flight_Return}
                              </span>
                            </div>
                            {/* <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                Date
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {new Date(val.Date).toISOString().slice(0, 10)}
                              </span>
                            </div> */}
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="w-100 d-flex  justify-content-between ">
                              <div className="mb-8 d-flex flex-column">
                                <span className="text-dark font-weight-bold mb-4">
                                  From
                                </span>
                                <span className="text-muted font-weight-bolder font-size-lg text-truncate w-100">
                                  {val.FromCity_Return}
                                </span>
                              </div>
                              <div className="mb-8 d-flex flex-column">
                                <span className="text-dark font-weight-bold mb-4">
                                  At
                                </span>
                                <span className="text-muted font-weight-bolder font-size-lg">
                                  {formatTime(val.FromTime_Return)}
                                </span>
                              </div>
                              <div className="mb-8 d-flex flex-column">
                                <span className="text-dark font-weight-bold mb-4">
                                  To
                                </span>
                                <span className="text-muted font-weight-bolder font-size-lg text-truncate w-100">
                                  {val.ToCity_Return}
                                </span>
                              </div>
                              <div className="mb-8 d-flex flex-column">
                                <span className="text-dark font-weight-bold mb-4">
                                  At
                                </span>
                                <span className="text-muted font-weight-bolder font-size-lg">
                                  {formatTime(val.ToTime_Return)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                          {hours || minutes ? (
                          <div className="bg-light-secondary col-12 col-md-12 col-lg-12 ml-3 mt-3">
                            <p className=" font-weight-bold text-center text-truncate w-100" style={{color:"brown"}}>
                              Stay At
                            <h5 className=" font-weight-bold mb-4 text-center mt-2 d-inline ml-2 mr-2">
                              {nextSector.FromCity_Return}
                            <span className="text-center font-weight-bold ml-4">
                              {hours ? `${hours} h` : ""}{" "}
                              {minutes ? `${minutes} m` : ""}
                            </span>
                            </h5>
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                          </>
                        );
                      })
                    : ""}
                    </div>

            </div>
            {/* <div className="row">
              {group.sectors
                ? group.sectors.map?.((val, ind) => {
                    let values = [];
                    if (group.sectors[ind + 1]) {
                      let to = val?.ToTime;
                      let from = group.sectors[ind + 1]?.FromTime;
                      values.push({ from, to });
                    }
                    const difference =
                      new Date(values[0]?.from) - new Date(values[0]?.to);
                    const hours = Math.floor(
                      (difference / (1000 * 60 * 60)) % 24
                    );
                    const minutes = Math.floor((difference / 1000 / 60) % 60);
                    return (
                      <>
                        <div className="col-5 col-md-3  bg-light-primary ml-3">
                          <h5 className="text-dark font-weight-bold mb-4 text-center mt-2">
                            Sector {""}
                            {group.via_Direct === "DIRECT"
                              ? ""
                              : ind === 0
                              ? "1"
                              : ind + 1}
                          </h5>
                          <div className="d-flex justify-content-between">
                            <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                Flight
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {val.flight}
                              </span>
                            </div>
                            <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                Date
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {new Date(val.Date).toISOString().slice(0, 10)}
                              </span>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="w-100 d-flex  justify-content-between ">
                              <div className="mb-8 d-flex flex-column">
                                <span className="text-dark font-weight-bold mb-4">
                                  From
                                </span>
                                <span className="text-muted font-weight-bolder font-size-lg text-truncate w-100">
                                  {val.FromCity}
                                </span>
                              </div>
                              <div className="mb-8 d-flex flex-column">
                                <span className="text-dark font-weight-bold mb-4">
                                  At
                                </span>
                                <span className="text-muted font-weight-bolder font-size-lg">
                                  {(() => {
                                    let time = val.FromTime.split("T");
                                    return time[1];
                                  })()}
                                </span>
                              </div>
                              <div className="mb-8 d-flex flex-column">
                                <span className="text-dark font-weight-bold mb-4">
                                  To
                                </span>
                                <span className="text-muted font-weight-bolder font-size-lg text-truncate w-100">
                                  {val.ToCity}
                                </span>
                              </div>
                              <div className="mb-8 d-flex flex-column">
                                <span className="text-dark font-weight-bold mb-4">
                                  At
                                </span>
                                <span className="text-muted font-weight-bolder font-size-lg">
                                  {(() => {
                                    let time = val.ToTime.split("T");
                                    return time[1];
                                  })()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {hours || minutes ? (
                          <div className="bg-light-secondary col-2 col-md-1 col-lg-1 ml-3">
                            <h5 className="text-dark font-weight-bold mb-4 text-center mt-2">
                              Stay At
                            </h5>
                            <p className="text-dark font-weight-bold text-truncate w-100">
                              {group.sectors[ind + 1]?.FromCity}
                            </p>
                            <span className="text-dark font-weight-bold">
                              {hours ? `${hours} h` : ""}{" "}
                              {minutes ? `${minutes} m` : ""}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    );
                  })
                : ""}
            </div> */}
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

export default ViewGroupModal;
