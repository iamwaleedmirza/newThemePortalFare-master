import React, { useEffect, useState } from "react";
import Request from "../../Utils/Requests";
import CountUp from "react-countup";
const DashBoard = () => {
  const [totalTickets, setTotalTickets] = useState("");
  const [totalGroups, setTotalGroups] = useState("");

  useEffect(
    () => {
      GetData();
    },
    //  eslint-disabled-next-line
    []
  );
  const GetData = async () => {
    let token = localStorage.getItem("token");
    const tickets = await Request.TotalTicket(token);
    const groups = await Request.TotalGroups(token);
    setTotalGroups(groups.data);
    setTotalTickets(tickets.data);
  };

  return (
    <>
      <div className="card card-custom bg-gray-100 card-stretch gutter-b">
        <div className="card-header border-0 bg-danger py-5">
          <h3 className="card-title font-weight-bolder text-white">
            Statistics
          </h3>
        </div>
        <div className="card-body p-0 position-relative overflow-hidden">
          <div className="card-spacer">
            <div className="row m-0">
              <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                <div className="row">
                  <div className="col-6">
                    <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                          <path
                            d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="text-danger font-weight-bold font-size-h6 mt-2">
                      Groups
                    </span>
                  </div>
                  <div className="col-6 d-flex justify-content-center align-items-center">
                    <h1 className="text-danger">
                      <CountUp start={0} end={totalGroups} duration={3.75} />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col bg-light-success px-6 py-8 rounded-xl">
                <div className="row">
                  <div className="col-6">
                    <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                          <path
                            d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                            fill="#000000"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="text-success font-weight-bold font-size-h6 mt-2">
                      Tickets
                    </span>
                  </div>
                  <div className="col-6 d-flex justify-content-center align-items-center">
                    <h1 className="text-success">
                      <CountUp start={0} end={totalTickets} duration={3.75} />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resize-triggers">
            <div className="expand-trigger">
              <div style={{ width: "506px", height: "447px" }} />
            </div>
            <div className="contract-trigger" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
