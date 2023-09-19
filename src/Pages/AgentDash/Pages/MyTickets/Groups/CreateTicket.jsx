import React from "react";

const CreateTicket = (props) => {
  let {
    ticket,
    ticketData,
    onCloseButton,
    onChange,
    onSubmit,
    returnSector,
    outGoingSector,
    SectorDataChange,
    addOutGoingSector,
    addReturnSector,
    sectors,
  } = props;

const calculateStayTime = (firstSector, secondSector) => {
  let values = [];
  if (secondSector) {
    let to = firstSector?.ToTime;
    let from = secondSector?.FromTime;
    values.push({ from, to });
  }
  const difference =
    new Date(values[0]?.from) - new Date(values[0]?.to);
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  return {hours, minutes};
}
  const renderSectors = () => {
      
    return (
        
        ticketData.oneway_return === "Return" ?
        <div className="row">
          <div className="col-6 border border-secondary"> 
              <div className="col-4">
                  <div class="form-group">
                  <label>Via / Direct</label>
                  <select
                      required
                      className="form-control"
                      name="via_Direct_OutGoing"
                      value={ticketData.via_Direct_OutGoing}
                      onChange={(e) => onChange(e)}
                  >
                      <option value="">Select</option>
                      <option>VIA</option>
                      <option>DIRECT</option>
                  </select>
                  </div>
              </div>
              {ticketData.via_Direct_OutGoing === "DIRECT" && !sectors.length ? (
                  <div className="row">
                  <div className="col-lg-8">
                      <h4>Sector </h4>
                      <div className="row ">
                      <div className="col-6">
                          {/* <div class="form-group ">
                          <label className="">Date</label>
                          <input
                              required
                              type="date"
                              name="Date"
                              value={sector.Date}
                              className="form-control"
                              placeholder="23000"
                              onChange={(e) => SectorDataChange(e)}
                          />
                          </div> */}

                          <div className="row">
                          <div class="form-group col-6">
                              <label className="">From</label>
                              <input
                              required
                              type="text"
                              name="FromCity_OutGoing"
                              value={outGoingSector.FromCity_OutGoing}
                              className="form-control "
                              onChange={(e) => SectorDataChange(e)}
                              />
                          </div>
                          <div className="col-6">
                              <div class="form-group ">
                              <label className="">Time</label>
                              <input
                                  required
                                  type="datetime-local"
                                  name="FromTime_OutGoing"
                                  value={outGoingSector.FromTime_OutGoing}
                                  onChange={(e) => SectorDataChange(e)}
                                  className="form-control "
                              />
                              </div>
                          </div>
                          </div>
                          <div className="row">
                          <div class="form-group col-6">
                              <label for=" CRS" className="">
                              To
                              </label>
                              <input
                              required
                              type="text"
                              name="ToCity_OutGoing"
                              value={outGoingSector.ToCity_OutGoing}
                              className="form-control "
                              onChange={(e) => SectorDataChange(e)}
                              />
                          </div>
                          <div className="col-6">
                              <div class="form-group ">
                              <label for="AIRLINE" className="">
                                  Time
                              </label>
                              <input
                                  required
                                  type="datetime-local"
                                  name="ToTime_OutGoing"
                                  value={outGoingSector.ToTime_OutGoing}
                                  onChange={(e) => SectorDataChange(e)}
                                  className="form-control "
                              />
                              </div>
                          </div>
                          </div>
                      </div>
                      <div className="col-6">
                          <div class="form-group ">
                          <label for="Fare" className="">
                              Flight No
                          </label>
                          <input
                              required
                              type="text"
                              name="flight_OutGoing"
                              value={outGoingSector.flight_OutGoing}
                              className="form-control"
                              placeholder="SE44"
                              onChange={(e) => SectorDataChange(e)}
                          />
                          </div>
                        
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-2 d-flex align-items-end">
                      <button
                      type="button"
                      className="btn btn-primary mb-7"
                      onClick={() => addOutGoingSector()}
                      >
                      Add Sector
                      </button>
                  </div>
                  </div>
              ) : ticketData.via_Direct_OutGoing === "VIA" ? (
                  <div className="row">
                  <div className="col-lg-10">
                      <h4>Sectors </h4>
                      <div className="row ">
                      <div className="col-9">
                          {/* <div class="form-group ">
                          <label className="">Date</label>
                          <input
                              required
                              type="date"
                              name="Date"
                              value={sector.Date}
                              className="form-control"
                              placeholder="23000"
                              onChange={(e) => SectorDataChange(e)}
                          />
                          </div> */}

                          <div className="row">
                          <div class="form-group col-5">
                              <label className="">From</label>
                              <input
                              required
                              type="text"
                              name="FromCity_OutGoing"
                              value={outGoingSector.FromCity_OutGoing}
                              className="form-control "
                              onChange={(e) => SectorDataChange(e)}
                              />
                          </div>
                          <div className="col-7">
                              <div class="form-group ">
                              <label className="">Time</label>
                              <input
                                  required
                                  type="datetime-local"
                                  name="FromTime_OutGoing"
                                  value={outGoingSector.FromTime_OutGoing}
                                  onChange={(e) => SectorDataChange(e)}
                                  className="form-control "
                              />
                              </div>
                          </div>
                          </div>
                          <div className="row">
                          <div class="form-group col-5">
                              <label for=" CRS" className="">
                              To
                              </label>
                              <input
                              required
                              type="text"
                              name="ToCity_OutGoing"
                              value={outGoingSector.ToCity_OutGoing}
                              className="form-control "
                              onChange={(e) => SectorDataChange(e)}
                              />
                          </div>
                          <div className="col-7">
                              <div class="form-group ">
                              <label for="AIRLINE" className="">
                                  Time
                              </label>
                              <input
                                  required
                                  type="datetime-local"
                                  name="ToTime_OutGoing"
                                  value={outGoingSector.ToTime_OutGoing}
                                  onChange={(e) => SectorDataChange(e)}
                                  className="form-control "
                              />
                              </div>
                          </div>
                          </div>
                      </div>
                      <div className="col-3">
                          <div class="form-group ">
                          <label for="Fare" className="">
                              Flight No
                          </label>
                          <input
                              required
                              type="text"
                              name="flight_OutGoing"
                              value={outGoingSector.flight_OutGoing}
                              className="form-control"
                              placeholder="SE44"
                              onChange={(e) => SectorDataChange(e)}
                          />
                          </div>
                        
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-2 d-flex align-items-end">
                      <button
                      type="button"
                      className="btn btn-primary mb-7"
                      onClick={() => addOutGoingSector()}
                      >
                      Add Sector
                      </button>
                  </div>
                  </div>
              ) : (
                  ""
              )}
              
          </div>
          <div className="col-6 border border-secondary"> 
              <div className="col-4">
                  <div class="form-group">
                  <label>Via / Direct</label>
                  <select
                      required
                      className="form-control"
                      name="via_Direct_Return"
                      value={ticketData.via_Direct_Return}
                      onChange={(e) => onChange(e)}
                  >
                      <option value="">Select</option>
                      <option>VIA</option>
                      <option>DIRECT</option>
                  </select>
                  </div>
              </div>
              {ticketData.via_Direct_Return === "DIRECT" && !sectors.length ? (
                  <div className="row ">
                          <div className="col-lg-10">
                              <h4>Sector </h4>
                              <div className="row ">
                              <div className="col-9">
                                  {/* <div class="form-group ">
                                  <label className="">Date</label>
                                  <input
                                      required
                                      type="date"
                                      name="Date"
                                      value={sector.Date}
                                      className="form-control"
                                      placeholder="23000"
                                      onChange={(e) => SectorDataChange(e)}
                                  />
                                  </div> */}

                                  <div className="row">
                                  <div class="form-group col-5">
                                      <label className="">From</label>
                                      <input
                                      required
                                      type="text"
                                      name="FromCity_Return"
                                      value={returnSector.FromCity_Return}
                                      className="form-control "
                                      onChange={(e) => SectorDataChange(e)}
                                      />
                                  </div>
                                  <div className="col-7">
                                      <div class="form-group ">
                                      <label className="">Time</label>
                                      <input
                                          required
                                          type="datetime-local"
                                          name="FromTime_Return"
                                          value={returnSector.FromTime_Return}
                                          onChange={(e) => SectorDataChange(e)}
                                          className="form-control "
                                      />
                                      </div>
                                  </div>
                                  </div>
                                  <div className="row">
                                  <div class="form-group col-5">
                                      <label for=" CRS" className="">
                                      To
                                      </label>
                                      <input
                                      required
                                      type="text"
                                      name="ToCity_Return"
                                      value={returnSector.ToCity_Return}
                                      className="form-control "
                                      onChange={(e) => SectorDataChange(e)}
                                      />
                                  </div>
                                  <div className="col-7">
                                      <div class="form-group ">
                                      <label for="AIRLINE" className="">
                                          Time
                                      </label>
                                      <input
                                          required
                                          type="datetime-local"
                                          name="ToTime_Return"
                                          value={returnSector.ToTime_Return}
                                          onChange={(e) => SectorDataChange(e)}
                                          className="form-control "
                                      />
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              <div className="col-3">
                                  <div class="form-group ">
                                  <label for="Fare" className="">
                                      Flight No
                                  </label>
                                  <input
                                      required
                                      type="text"
                                      name="flight_Return"
                                      value={returnSector.flight_Return}
                                      className="form-control"
                                      placeholder="SE44"
                                      onChange={(e) => SectorDataChange(e)}
                                  />
                                  </div>
                                 
                              </div>
                              </div>
                          </div>
                          <div className="col-lg-2 d-flex align-items-end">
                              <button
                              type="button"
                              className="btn btn-primary mb-7"
                              onClick={() => addReturnSector()}
                              >
                              Add Sector
                              </button>
                          </div>
                  </div>
                  ) : ticketData.via_Direct_Return === "VIA" ? (
                  <div className="row">
                      <div className="col-lg-10">
                          <h4>Sectors </h4>
                          <div className="row ">
                          <div className="col-9">
                              {/* <div class="form-group ">
                              <label className="">Date</label>
                              <input
                                  required
                                  type="date"
                                  name="Date"
                                  value={returnSector.Date}
                                  className="form-control"
                                  placeholder="23000"
                                  onChange={(e) => SectorDataChange(e)}
                              />
                              </div> */}

                              <div className="row">
                              <div class="form-group col-5">
                                  <label className="">From</label>
                                  <input
                                  required
                                  type="text"
                                  name="FromCity_Return"
                                  value={returnSector.FromCity_Return}
                                  className="form-control "
                                  onChange={(e) => SectorDataChange(e)}
                                  />
                              </div>
                              <div className="col-7">
                                  <div class="form-group ">
                                  <label className="">Time</label>
                                  <input
                                      required
                                      type="datetime-local"
                                      name="FromTime_Return"
                                      value={returnSector.FromTime_Return}
                                      onChange={(e) => SectorDataChange(e)}
                                      className="form-control "
                                  />
                                  </div>
                              </div>
                              </div>
                              <div className="row">
                              <div class="form-group col-5">
                                  <label for=" CRS" className="">
                                  To
                                  </label>
                                  <input
                                  required
                                  type="text"
                                  name="ToCity_Return"
                                  value={returnSector.ToCity_Return}
                                  className="form-control "
                                  onChange={(e) => SectorDataChange(e)}
                                  />
                              </div>
                              <div className="col-7">
                                  <div class="form-group ">
                                  <label for="AIRLINE" className="">
                                      Time
                                  </label>
                                  <input
                                      required
                                      type="datetime-local"
                                      name="ToTime_Return"
                                      value={returnSector.ToTime_Return}
                                      onChange={(e) => SectorDataChange(e)}
                                      className="form-control "
                                  />
                                  </div>
                              </div>
                              </div>
                          </div>
                          <div className="col-3">
                              <div class="form-group ">
                              <label for="Fare" className="">
                                  Flight No
                              </label>
                              <input
                                  required
                                  type="text"
                                  name="flight_Return"
                                  value={returnSector.flight_Return}
                                  className="form-control"
                                  placeholder="SE44"
                                  onChange={(e) => SectorDataChange(e)}
                              />
                              </div>
                            
                          </div>
                          </div>
                      </div>
                      <div className="col-lg-2 d-flex align-items-end">
                          <button
                          type="button"
                          className="btn btn-primary mb-7"
                          onClick={() => addReturnSector()}
                          >
                          Add Sector
                          </button>
                      </div>
                  </div>
              ) : (
                  ""
              )}
              
          </div>
        </div>
        : 
        <div className=" row border border-secondary"> 
            {/* <div className="col-4">
                <div class="form-group">
                <label>Via / Direct</label>
                <select
                    required
                    className="form-control"
                    name="via_Direct"
                    value={ticketData.via_Direct}
                    onChange={(e) => onChange(e)}
                >
                    <option value="">Select</option>
                    <option>VIA</option>
                    <option>DIRECT</option>
                </select>
                </div>
            </div> */}
            {ticketData.via_Direct_OutGoing === "DIRECT" && !sectors.length ? (
                <div className="row">
                <div className="col-lg-8">
                    <h4>Sector </h4>
                    <div className="row ">
                    <div className="col-6">
                        {/* <div class="form-group ">
                        <label className="">Date</label>
                        <input
                            required
                            type="date"
                            name="Date"
                            value={sector.Date}
                            className="form-control"
                            placeholder="23000"
                            onChange={(e) => SectorDataChange(e)}
                        />
                        </div> */}

                        <div className="row">
                        <div class="form-group col-6">
                            <label className="">From</label>
                            <input
                            required
                            type="text"
                            name="FromCity"
                            value={outGoingSector.FromCity_OutGoing}
                            className="form-control "
                            onChange={(e) => SectorDataChange(e)}
                            />
                        </div>
                        <div className="col-6">
                            <div class="form-group ">
                            <label className="">Time</label>
                            <input
                                required
                                type="datetime-local"
                                name="FromTime"
                                value={outGoingSector.FromTime_OutGoing}
                                onChange={(e) => SectorDataChange(e)}
                                className="form-control "
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group ">
                        <label for="Fare" className="">
                            Flight No
                        </label>
                        <input
                            required
                            type="text"
                            name="flight_OutGoing"
                            value={outGoingSector.flight_OutGoing}
                            className="form-control"
                            placeholder="SE44"
                            onChange={(e) => SectorDataChange(e)}
                        />
                        </div>
                      
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 d-flex align-items-end">
                    <button
                    type="button"
                    className="btn btn-primary mb-7"
                    onClick={() => addOutGoingSector()}
                    >
                    Add Sector
                    </button>
                </div>
                </div>
            ) : ticketData.via_Direct_OutGoing === "VIA" ? (
                <div className="row">
                <div className="col-lg-8">
                    <h4>Sectors </h4>
                    <div className="row ">
                    <div className="col-6">
                        <div class="form-group ">
                        <label className="">Date</label>
                        <input
                            required
                            type="date"
                            name="Date"
                            value={outGoingSector.Date}
                            className="form-control"
                            placeholder="23000"
                            onChange={(e) => SectorDataChange(e)}
                        />
                        </div>

                        <div className="row">
                        <div class="form-group col-6">
                            <label className="">From</label>
                            <input
                            required
                            type="text"
                            name="FromCity"
                            value={outGoingSector.FromCity}
                            className="form-control "
                            onChange={(e) => SectorDataChange(e)}
                            />
                        </div>
                        <div className="col-6">
                            <div class="form-group ">
                            <label className="">Time</label>
                            <input
                                required
                                type="datetime-local"
                                name="FromTime"
                                value={outGoingSector.FromTime}
                                onChange={(e) => SectorDataChange(e)}
                                className="form-control "
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group ">
                        <label for="Fare" className="">
                            Flight No
                        </label>
                        <input
                            required
                            type="text"
                            name="flight"
                            value={outGoingSector.flight}
                            className="form-control"
                            placeholder="SE44"
                            onChange={(e) => SectorDataChange(e)}
                        />
                        </div>
                        <div className="row">
                        <div class="form-group col-6">
                            <label for=" CRS" className="">
                            To
                            </label>
                            <input
                            required
                            type="text"
                            name="ToCity"
                            value={outGoingSector.ToCity}
                            className="form-control "
                            onChange={(e) => SectorDataChange(e)}
                            />
                        </div>
                        <div className="col-6">
                            <div class="form-group ">
                            <label for="AIRLINE" className="">
                                Time
                            </label>
                            <input
                                required
                                type="datetime-local"
                                name="ToTime"
                                value={outGoingSector.ToTime}
                                onChange={(e) => SectorDataChange(e)}
                                className="form-control "
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 d-flex align-items-end">
                    <button
                    type="button"
                    className="btn btn-primary mb-7"
                    onClick={() => addOutGoingSector()}
                    >
                    Add Sector
                    </button>
                </div>
                </div>
            ) : (
                ""
            ) } 
        </div>
            
          
           
    );
  }
  return (
        <div className="card" style={{ minHeight: '55vh'}}>
          <div className="card-header ">
              <div className="d-flex flex-row justify-content-between">
              <h5 className="">
              Create Ticket
            </h5>
            <button
              onClick={() => onCloseButton()}
              type="button"
              className="close"
            
            >
              <i aria-hidden="true" className="ki ki-close" />
            </button>
              </div>
           
          </div>
          <div className="">
            <form>
              <div className="card-body pt-2">
                {/* Create Ticket  Start*/}
                <div className="row mt-0">
                  <div className="col-4">
                    <div class="form-group">
                      <label>Tour Type</label>
                      <select
                        className="form-control"
                        name="tourType"
                        required
                        value={ticketData.tourType}
                        onChange={(e) => onChange(e)}
                      >
                        <option>Select</option>
                        <option>HAJJ</option>
                        <option>UMRAH</option>
                        <option>OTHERS</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-group">
                      <label>Airline</label>
                      <select
                        required
                        className="form-control"
                        name="airline"
                        value={ticketData.airline}
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
                 
                  {/* second column */}
                  <div className="col-4 ">
                    <div class="form-group">
                      <label for="BookedTicketed">Reservation/Ticketed</label>
                      <select
                        required
                        className="form-control"
                        name="booked_ticketed"
                        value={ticketData.booked_ticketed}
                        onChange={(e) => onChange(e)}
                      >
                        <option>Select</option>
                        <option>Ticketed</option>
                        <option>Reservation</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="form-group ">
                      <label for="PassengerType" className="">
                        Passenger Type
                      </label>
                      <select
                        required
                        className="form-control "
                        name="passengerType"
                        value={ticketData.passengerType}
                        onChange={(e) => onChange(e)}
                      >
                        <option>Select</option>
                        <option>Adult</option>
                        <option>Infant</option>
                        <option>Child</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="form-group ">
                      <label for="PassengerType" className="">
                        Exchangeable
                      </label>
                      <select
                        required
                        className="form-control "
                        name="exchangeable"
                        value={ticketData.exchangeable}
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
                        value={ticketData.refundable_nonRefundable}
                        onChange={(e) => onChange(e)}
                      >
                        {" "}
                        <option>Select</option>
                        <option>Refundable</option>
                        <option>Non-Refundable</option>
                      </select>
                    </div>
                  </div>
                  {/* Forth Column */}
                  <div className="col-4">
                    <div class="form-group ">
                      <label for="Fare" className="">
                        Fare
                      </label>
                      <input
                        required
                        type="text"
                        name="fare_price"
                        value={ticketData.fare_price}
                        className="form-control"
                        placeholder="23000"
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="form-group">
                      <label className="">
                        Ticket Time Limit/Expiry Time in Hours
                      </label>
                      <input
                        className="form-control "
                        required
                        type="datetime-local"
                        name="expiryTime"
                        id="expiryTime"
                        value={ticketData.expiryTime}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="form-group">
                      <label className="">Hand Carry (KG)</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        required
                        className="form-control "
                        name="HandCarry"
                        value={ticketData.HandCarry}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="form-group">
                      <label className="">Baggage (KG)</label>
                      <input
                        type="number"
                        min="1"
                        max="25"
                        required
                        className="form-control "
                        name="Baggage"
                        value={ticketData.Baggage}
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
                      value={ticketData.CRSPNR}
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
                        value={ticketData.airlinePNR}
                        onChange={(e) => onChange(e)}
                        className="form-control "
                        placeholder="Airline PNR"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-group ">
                      <label for="AIRLINE" className="">
                        Other PNR
                      </label>
                      <input
                        required
                        type="text"
                        name="otherPNR"
                        value={ticketData.otherPNR}
                        onChange={(e) => onChange(e)}
                        className="form-control "
                        placeholder="Other PNR"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-group">
                      <label> One Way / Return</label>
                      <select
                        required
                        className="form-control"
                        name="oneway_return"
                        value={ticketData.oneway_return}
                        onChange={(e) => onChange(e)}
                      >
                        <option>Select</option>
                        <option>One Way</option>
                        <option>Return</option>
                      </select>
                    </div>
                  </div>
                  { ticketData.oneway_return === "One Way" ? 
                    <div className="col-4">
                        <div class="form-group">
                        <label>Via / Direct</label>
                        <select
                            required
                            className="form-control"
                            name="via_Direct_OutGoing"
                            value={ticketData.via_Direct_OutGoing}
                            onChange={(e) => onChange(e)}
                        >
                            <option value="">Select</option>
                            <option>VIA</option>
                            <option>DIRECT</option>
                        </select>
                        </div>
                    </div> 
                  : ''  
                }
                </div>

                {renderSectors()}
                <div className="row ">
                    <div className="col-6">
                  {sectors?.outGoingSectors
                    ? sectors?.outGoingSectors?.map?.((val, ind) => {
                        // const {hours, minutes} = calculateStayTime(val, sectors.outGoingSectors[ind + 1]);
                        let values = [];
                    if (sectors.outGoingSectors[ind + 1]) {
                      let to = val?.ToTime_OutGoing;
                      let from = sectors.outGoingSectors[ind + 1]?.FromTime_OutGoing;
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
                          <div className=" col-6 d-flex flex-column ">
                            <h4 className="mb-4 text-center">
                             OutGoing Sector{" "}
                              {ticketData.via_Direct_OutGoing === "DIRECT"
                                ? ""
                                : ind === 0
                                ? "1"
                                : ind + 1}
                            </h4>
                            <div className="d-flex justify-content-between">
                              <div>
                                <h4>Flight</h4>
                                <p>{val.flight_OutGoing}</p>
                                <h4 className="mt-2">From</h4>
                                <p>{val.FromCity_OutGoing}</p>
                                <h4 className="mt-2">To</h4>
                                <p>{val.ToCity_OutGoing}</p>
                              </div>
                              <div>
                                
                                <h4 style={{marginTop: '4.7rem'}}>At</h4>
                                <p>{val.FromTime_OutGoing}</p>
                                <h4 className="mt-2">At</h4>
                                <p>{val.ToTime_OutGoing}</p>
                              </div>
                            </div>
                          </div>
                          {hours || minutes ? (
                          <div className="bg-light-secondary col-12 col-md-12 col-lg-12 ml-3 mt-3"  >
                            <p className=" font-weight-bold text-center text-truncate w-100" style={{color:"brown"}}>
                              Stay At
                            <h5 className="font-weight-bold  d-inline mb-4 text-center mt-2 ml-2 mr-2">
                            {sectors.outGoingSectors[ind + 1]?.FromCity_OutGoing}
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
                    {sectors?.returnSectors
                    ? sectors?.returnSectors?.map?.((val, ind) => {
                      let values = [];
                      if (sectors.returnSectors[ind + 1]) {
                        let to = val?.ToTime_Return;
                        let from = sectors.returnSectors[ind + 1]?.FromTime_Return;
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
                          <div className=" col-6  d-flex flex-column ">
                            <h4 className="mb-4 text-center">
                             Return Sector{" "}
                              {ticketData.via_Direct_Return === "DIRECT"
                                ? ""
                                : ind === 0
                                ? "1"
                                : ind + 1}
                            </h4>
                            <div className="d-flex  justify-content-between">
                              <div>
                                <h4>Flight</h4>
                                <p>{val.flight_Return}</p>
                                <h4 className="mt-2">From</h4>
                                <p>{val.FromCity_Return}</p>
                                <h4 className="mt-2">To</h4>
                                <p>{val.ToCity_Return}</p>
                              </div>
                              <div>
                                
                                <h4 style={{marginTop: '4.7rem'}}>At</h4>
                                <p>{val.FromTime_Return}</p>
                                <h4 className="mt-2">At</h4>
                                <p>{val.ToTime_Return}</p>
                              </div>
                            </div>
                          </div>
                          {hours || minutes ? (
                            <div className="bg-light-secondary col-12 col-md-12 col-lg-12 ml-3 mt-3"  >
                              <p className=" font-weight-bold text-center text-truncate w-100" style={{color:"brown"}}>
                               Stay At
                              <h5 className="font-weight-bold  d-inline mb-4 text-center mt-2 ml-2 mr-2">
                              {sectors.returnSectors[ind + 1]?.FromCity_OutGoing}
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
                {/* Create Ticket  End*/}
              </div>
            </form>
          </div>
          <div className="d-flex flex-row  justify-content-end mb-3 pr-10">
            <button
              onClick={() => onCloseButton()}
              type="button"
              className="btn btn-light-primary font-weight-bold mr-3"
              /* data-dismiss="modal" */
            >
              Close
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="btn btn-primary font-weight-bold "
            >
              Create Ticket
              {/* {update ? "Update User" : "Create User"} */}
            </button>
          </div>
        </div>
      
  );
};

export default CreateTicket;
