import React from "react";
import AllActivity from "./activity/AllActivity";
import Repair from "./repair/Repair";

const BottomOverView = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
      <div className="flex-1 flex flex-col">
        <AllActivity />
      </div>
      <div className="flex-1 flex flex-col">
        <Repair />
      </div>
    </div>
  );
};

export default BottomOverView;
