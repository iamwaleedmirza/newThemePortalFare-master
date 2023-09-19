import React from "react";
import Tickets from "./Tickets/Index";
import Groups from "./Groups/Index";
const Index = () => {
  return (
    <>
      <Tickets />
      <div className="mt-5 mb-40" />
      <Groups />
    </>
  );
};

export default Index;
