import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Profile from "./layout/Profile";
import MobileHeader from "./layout/MobileHeader";
import Aside from "./layout/Aside";
import DashBoard from "./DashBoard";
import TicketManagement from "./Pages/TicketManagement/index";
import MyTickets from "./Pages/MyTickets/Tickets/Index";
import MyGroups from "./Pages/MyTickets/Groups/Index";
import AllDeals from "./Pages/All Deals/index";
import Interested from "./Pages/Interested/index";
import DemandManagement from "./Pages/DemandManagement/index";
import MyDemands from "./Pages/MyDemands/index";
import UploadNames from "./Pages/UploadNames/index";
import AllNames from "./Pages/AllNames/index";
import MyNames from "./Pages/MyNames/index";
import Tickets from "./Pages/TicketManagement/Tickets/Index";
import Groups from "./Pages/TicketManagement/Groups/Index";
import RequiredNames from "./Pages/RequiredNames/index";
import MyRequiredNames from "./Pages/MyRequiredNames/index";
// import Requests from "../../Utils/Requests";
import { LayoutInit } from "../../Utils/Layout";
const index = () => {
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
                    <Route path="/find-tickets" component={Tickets} />
                    <Route path="/find-groups" component={Groups} />
                    <Route path="/user-tickets" component={MyTickets} />
                    <Route path="/user-groups" component={MyGroups} />
                    <Route path="/all-deals" component={AllDeals} />
                    <Route path="/user-interested" component={Interested} />
                    <Route
                      path="/demands-management"
                      component={DemandManagement}
                    />
                    <Route path="/user-demands" component={MyDemands} />
                    <Route path="/upload-names" component={UploadNames} />
                    <Route path="/all-names" component={AllNames} />
                    <Route path="/user-names" component={MyNames} />
                    <Route path="/required-names" component={RequiredNames} />
                    <Route
                      path="/user-required-names"
                      component={MyRequiredNames}
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
