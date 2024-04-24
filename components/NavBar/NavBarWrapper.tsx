import s from'./navbar.module.scss'

import BottomNavbar from "./BottomNavbar";
import TopNavBar from "./TopNavBar";
import CenterNavBar from "./CenterNavBar";

const NavBarWrapper = () => {
  return (
    <>
      <div className={s.topNavBar}>
        {" "}
        <TopNavBar />
      </div>
      <div className={s.centerNavBar}>
        {" "}
        <CenterNavBar />
      </div>
      <div className={s.bottomNavBar}>
        {" "}
        <BottomNavbar />
      </div>
    </>
  );
};

export default NavBarWrapper;
