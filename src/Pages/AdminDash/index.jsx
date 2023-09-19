import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Profile from "./layout/Profile";
import User from "./users/index";
import MobileHeader from "./layout/MobileHeader";
import Aside from "./layout/Aside";
import DashBoard from "./DashBoard";
import Agent from "./Agents/index";
import Tickets_Groups from "./Pages/AllTickets/Index";
import { Management } from "./Pages/PortalManagement/index";
// import Requests from "../../Utils/Requests";
import { LayoutInit } from "../../Utils/Layout";
const index = () => {
  // window.KTApp.init();
  // window.KTLayoutAsideToggle.init();
  // useEffect(() => {
  //   window.KTApp.init();
  //   window.KTApp.init(window.KTAppSettings);
  //   window.KTLayoutAsideToggle.init();
  // }, []);
  return (
    <>
      <MobileHeader />
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-row flex-column-fluid page">
          <Aside />
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            <Header />
            <div
              className="content d-flex flex-column flex-column-fluid border"
              id="kt_content"
            >
              <div className="d-flex flex-column-fluid">
                <div className="container-fluid ">
                  <Switch>
                    <Route path="/" exact component={DashBoard} />
                    <Route path="/user" component={User} />
                    <Route path="/agent" component={Agent} />
                    <Route path="/management" component={Management} />

                    <Route
                      path="/all-tickets-groups"
                      component={Tickets_Groups}
                    />
                  </Switch>
                  {/* <DashBoard /> */}
                  {/* <Table /> */}
                  {/* <div className="row">
                
              </div> */}
                </div>
              </div>
              <Profile />
            </div>
          </div>
        </div>
      </div>
      <LayoutInit />
    </>
  );
};

export default index;
