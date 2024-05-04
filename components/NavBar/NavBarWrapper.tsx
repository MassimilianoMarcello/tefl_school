import s from "./navbar.module.scss";

import BottomNavbar from "./_C_BottomNavbar";
import TopNavBar from "./_A_TopNavBar";
import CenterNavBar from "./_B_CenterNavBar";
import DropdownMenu from "./DropdownMenu";

const NavBarWrapper = () => {
  return (
    <>
      <TopNavBar />

      <CenterNavBar />

      <BottomNavbar />
      {/* <DropdownMenu/> */}
    </>
  );
};

export default NavBarWrapper;
