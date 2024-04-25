import s from "./navbar.module.scss";

import BottomNavbar from "./BottomNavbar";
import TopNavBar from "./TopNavBar";
import CenterNavBar from "./CenterNavBar";
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
