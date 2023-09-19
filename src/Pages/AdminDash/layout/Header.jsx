import React, { useState } from "react";
import { useSelector } from "react-redux";
import Requests from "../../../Utils/Requests";
const Header = () => {
  const Auth = useSelector((state) => state.Auth.data);
  const token = localStorage.getItem("token");
  const [notifications, setNotifications] = useState("");

  const getNotifications = () => {
    Requests.Notifications(token)
      .then((res) => {
        setNotifications(res);
      })
      .catch((err) => console.log(err, "error"));
  };

  return (
    <div id="kt_header" className="header header-fixed">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        <div
          className="header-menu-wrapper header-menu-wrapper-left"
          id="kt_header_menu_wrapper"
        >
          <div
            id="kt_header_menu"
            className="header-menu header-menu-mobile header-menu-layout-default"
          ></div>
        </div>
        <div className="topbar">
          <div className="dropdown">
            <div
              className="topbar-item"
              data-toggle="dropdown"
              data-offset="10px,0px"
            >
              <div
                className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary"
                onClick={getNotifications}
              >
                <span className="svg-icon svg-icon-xl svg-icon-primary d-flex p-0 m-0">
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
                        d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path
                        d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                        fill="#000000"
                      />
                    </g>
                  </svg>
                  <span
                    className="test-secondary"
                    style={{
                      position: "absolute",
                      top: "0px",
                      right: 0,
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    {Auth.NewNotification.length > 9
                      ? "9+"
                      : Auth.NewNotification.length}
                  </span>
                </span>
                <span className="pulse-ring" />
              </div>
            </div>
            <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
              <form>
                <div
                  className="d-flex flex-column pt-2 bgi-size-cover bgi-no-repeat rounded-top"
                  style={{
                    backgroundImage: "url(assets/media/misc/bg-1.jpg)",
                    backgroundPosition: "center",
                  }}
                >
                  <h4 className="d-flex flex-center rounded-top">
                    <span className="text-white">Notifications</span>
                  </h4>
                  <ul
                    className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-1 px-8"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active show"
                        data-toggle="tab"
                        href="#topbar_notifications_notifications"
                      >
                        New
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#topbar_notifications_events"
                      >
                        Old
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane active show p-8"
                    id="topbar_notifications_notifications"
                    role="tabpanel"
                  >
                    <div
                      className="scroll pr-7 mr-n7 ps"
                      data-scroll="true"
                      data-height={300}
                      data-mobile-height={200}
                      style={{ height: "300px", overflow: "hidden" }}
                    >
                      {notifications.NewNotification?.length ? (
                        notifications.NewNotification?.map((val, ind) => {
                          <div
                            className="d-flex align-items-center mb-6"
                            key={ind}
                          >
                            <div className="d-flex flex-column font-weight-bold">
                              <span className="text-muted">{val}</span>
                            </div>
                          </div>;
                        })
                      ) : (
                        <div className="d-flex flex-center text-center text-muted min-h-200px">
                          All caught up!
                          <br />
                          No new notifications.
                        </div>
                      )}

                      <div
                        className="ps__rail-x"
                        style={{ left: "0px", bottom: "0px" }}
                      >
                        <div
                          className="ps__thumb-x"
                          tabIndex={0}
                          style={{ left: "0px", width: "0px" }}
                        />
                      </div>
                      <div
                        className="ps__rail-y"
                        style={{ top: "0px", right: "0px" }}
                      >
                        <div
                          className="ps__thumb-y"
                          tabIndex={0}
                          style={{ top: "0px", height: "0px" }}
                        />
                      </div>
                    </div>
                    {/* <div className="d-flex flex-center pt-7">
                      <a
                        href="#"
                        className="btn btn-light-primary font-weight-bold text-center"
                      >
                        See All
                      </a>
                    </div> */}
                  </div>
                  <div
                    className="tab-pane"
                    id="topbar_notifications_events"
                    role="tabpanel"
                  >
                    <div
                      className="scroll pr-7 mr-n7 ps"
                      data-scroll="true"
                      data-height={300}
                      data-mobile-height={200}
                      style={{ height: "300px", overflow: "hidden" }}
                    >
                      {notifications.OldNotification?.length ? (
                        notifications.OldNotification?.map((val, ind) => {
                          return (
                            <div
                              className="d-flex align-items-center mb-6 p-3 border border-bottom"
                              key={ind}
                            >
                              <div className="d-flex flex-column font-weight-bold">
                                <span className=" ">{val}</span>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="d-flex flex-center text-center text-muted min-h-200px">
                          All caught up!
                          <br />
                          No new notifications.
                        </div>
                      )}

                      <div
                        className="ps__rail-x"
                        style={{ left: "0px", bottom: "0px" }}
                      >
                        <div
                          className="ps__thumb-x"
                          tabIndex={0}
                          style={{ left: "0px", width: "0px" }}
                        />
                      </div>
                      <div
                        className="ps__rail-y"
                        style={{ top: "0px", right: "0px" }}
                      >
                        <div
                          className="ps__thumb-y"
                          tabIndex={0}
                          style={{ top: "0px", height: "0px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="topbar-item">
            <div
              className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
              id="kt_quick_user_toggle"
            >
              <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
                Hi,
              </span>
              <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                {Auth.firstName || "User"}
              </span>
              <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
                <span className="symbol-label font-size-h5 font-weight-bold">
                  {window.$.trim(Auth.firstName).charAt(0) || "U"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
