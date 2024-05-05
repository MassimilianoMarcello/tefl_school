import React from "react";

import c from "@/app/page.module.scss";
import s from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import BottomNavbar from "./_C_BottomNavbar";
import SocialIconsComponent from "../Social_Icons/SocialIconsComponent";

const TopNavBar = () => {
  return (
    <nav className={s.navOne}>
      <div className={s.flexContainer}>

        <div className={s.phone}>
          <Image
              src={"/icons/phone-call.svg"}
              alt={"phone icon"}
              width={15}
              height={15}
            />
          <span className={s.callMeIcon}>Call us: +39 055 849 5765</span>
        </div>
        <SocialIconsComponent/>
      </div>
      <div className={s.flexContainer}>
        <ul className={s.flexContainer}>
          <li className={s.navItem}>
            <Link href={"/about_us"} className={s.linkTag}>
              <p className={s.navNamesTop}>about us</p>
            </Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/contact"} className={s.linkTag}>
              {" "}
              <p className={s.navNamesTop}>contact</p>
            </Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/account"} className={s.linkTag}>
              <p className={s.navNamesTop}>account</p>
            </Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/sign_in"} className={s.linkTag}>
              <p className={s.navNamesTop}>sign-in</p>
            </Link>
          </li>
        </ul>
       
      </div>
    </nav>
  );
};

export default TopNavBar;
