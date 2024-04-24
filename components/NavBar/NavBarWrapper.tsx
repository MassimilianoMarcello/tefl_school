import s from'./navbar.module.scss'

import BottomNavbar from "./BottomNavbar";
import TopNavBar from "./TopNavBar";
import CenterNavBar from "./CenterNavBar";

const NavBarWrapper = () => {
  return (
    <>
      
    
        <TopNavBar />
  
    
   
        <CenterNavBar />

 
        <BottomNavbar />

    </>
  );
};

export default NavBarWrapper;
