'use client'

import React, { useState, useEffect } from "react";
import s from './navbar.module.scss'
import Link from "next/link";

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

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={fix ? `${s.bottomNavContainer} ${s.fixed}` : s.bottomNavContainer}>
     <ul className={s.flexContainer}>
          <li className={s.navItem}>
            <Link href={"/"} className={s.linkTag}>home</Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/"} className={s.linkTag}> our courses</Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/"} className={s.linkTag}>our teachers</Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/"} className={s.linkTag}>testimonials</Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/"} className={s.linkTag}>FAQ</Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/"} className={s.linkTag}>blog</Link>
          </li>
        </ul>
  </div>;
};

export default BottomNavbar;
