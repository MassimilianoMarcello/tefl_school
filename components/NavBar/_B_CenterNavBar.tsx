import React from "react";

import c from "@/app/page.module.scss";
import s from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import tefl_logo from "@/public/assets/Tuscany_logo4.png";
import HamburgerButton from "./HamburgerButton";

const CenterNavBar = () => {
  return (
    <nav className={s.navTwo}>
      <div className={s.navTwoBox}>
        <div className={s.logoContainer}>
          
          <Image
            src={tefl_logo}
            alt={"logo image"}
            // layout="fill"
            //   objectFit="content"
            className={s.logoImage}
            // priority
          /> 
        {/* <h1>website name</h1> */}
        </div>
        <div className={s.allLinksDesktop}>
          <ul className={s.flexContainer}>
            <li className={s.navItem}>
              <Link href={"/accreditated"} className={s.linkTag}>
              <p className={s.navNamesCenter}>accredited</p>
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/internship"} className={s.linkTag}>
              <p className={s.navNamesCenter}>internship</p>
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/blog"} className={s.linkTag}>
              <p className={s.navNamesCenter}>blog</p>
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/consultation_sessions"} className={s.linkTag}>
              <p className={s.navNamesCenter}>consultation sessions</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <HamburgerButton/>
    </nav>
  );
};

export default CenterNavBar;
