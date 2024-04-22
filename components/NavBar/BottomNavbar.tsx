import React, { useState } from "react";

const BottomNavbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 392) {
      setFix = true;
    } else {
      setFix = false;
    }
  }
  return <div>BottomNavbar</div>;
};

export default BottomNavbar;
