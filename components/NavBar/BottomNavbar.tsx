"use client";

import React, { useState, useEffect } from "react";
import s from "./navbar.module.scss";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const BottomNavbar = () => {
  const [fix, setFix] = useState(false);

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
                home
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/our_courses"} className={s.linkTag}>
                {" "}
                our courses
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/our_teachers"} className={s.linkTag}>
                our teachers
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/testimonials"} className={s.linkTag}>
                testimonials
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/faq"} className={s.linkTag}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          {" "}
          <ul className={s.flexContainer}>
            <li className={s.navItem}>
              <button className={s.primaryButton}>Dates&Prices </button>
            </li>

            <li className={s.navItem}>
              <button className={s.warningButton}>ApplyNow </button>
            </li>
          </ul>
        </div>
      </div>
      <DropdownMenu/>
    </div>
  
  );
};

export default BottomNavbar;
