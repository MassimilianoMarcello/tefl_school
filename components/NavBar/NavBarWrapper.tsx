import React from "react";

import BottomNavbar from "./BottomNavbar";
import TopNavBar from "./TopNavBar";
import CenterNavBar from "./CenterNavBar";

const NavBarWrapper = () => {
  return (
    <>
      <div>
        {" "}
        <TopNavBar />
      </div>
      <div>
        {" "}
        <CenterNavBar />
      </div>
      <div>
        {" "}
        <BottomNavbar />
      </div>
    </>
  );
};

export default NavBarWrapper;
