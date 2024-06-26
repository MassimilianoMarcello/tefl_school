"use client";

import React, { useState, useEffect } from "react";
import s from "./navbar.module.scss";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const BottomNavbar = () => {
  const [fix, setFix] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // Aggiunto stato per la visibilità del menu dropdown

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 392) {
        setFix(true);
      } else {
        setFix(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        fix ? `${s.bottomNavContainer} ${s.fixed}` : s.bottomNavContainer
      }
    >
      <div className={s.flexContainer}>
        <div>
          <ul className={s.flexContainer}>
            <li className={s.navItem}>
              <Link href={"/"} className={s.linkTag}>
                <p className={s.navNames}>home</p>
              </Link>
            </li>
            <li
              className={s.navItem}
              // riattivare per far funzionare il menu dropdown
              // onMouseEnter={() => setDropdownVisible(true)} 
              // onMouseLeave={() => setDropdownVisible(false)} 
            >
              {/* <a className={s.linkTag}> */}
              <Link href={"/our_courses"} className={s.linkTag}>
              <p className={s.navNames}>our courses</p>
              </Link>
                {/* </a>  */}
              {dropdownVisible && <DropdownMenu />} {/* Mostra il menu dropdown se dropdownVisible è true */}
            </li>
            <li className={s.navItem}>
              <Link href={"/our_teachers"} className={s.linkTag}>
              <p className={s.navNames}>our teachers</p>
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/reviews"} className={s.linkTag}>
              <p className={s.navNames}>reviews</p>
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/faq"} className={s.linkTag}>
              <p className={s.navNames}>FAQ</p>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          {" "}
          <ul className={s.flexContainer}>
            <li className={s.navItem}>
              <button className={s.primaryButton}>Dates & Prices </button>
            </li>

            <li className={s.navItem}>
              <button className={s.warningButton}>Apply Now </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;