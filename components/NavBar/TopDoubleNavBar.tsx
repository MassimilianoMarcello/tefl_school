import React from "react";

import c from "@/app/page.module.scss";
import s from'./navbar.module.scss'
import Image from "next/image";
import Link from "next/link";
import BottomNavbar from "./BottomNavbar";

const TopDoubleNavBar = () => {
  return (
    <>
      <nav className={s.navOne}>
        <div className={s.flexContainer}>
          <div className="email">
            <Image
              src={"/icons/envelope.svg"}
              alt={"mail icon"}
              width={20}
              height={20}
            />

            {/* <span>info@youdomain.com</span> */}
          </div>
          <div className="phone">
            <Image
              src={"/icons/phone-call.svg"}
              alt={"phone icon"}
              width={20}
              height={20}
            />
            <span>Call us +39 055 849 5765</span>
          </div>
        </div>
        <div className={s.flexContainer}>
        <ul className={s.flexContainer}>
            <li className={s.navItem}>
              <Link href={"/about_us"} className={s.linkTag}>
             about us
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/contact"} className={s.linkTag}>
                {" "}
         contact
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/account"} className={s.linkTag}>
              account
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/sign_in"} className={s.linkTag}>
              sign-in
              </Link>
            </li>
            
          </ul>
          <div className={s.socialIcon}>
          <Link href="https://www.facebook.com/tefltuscany" target="_blank" className={s.linkTag}>
          <Image
              src={"/icons/facebook.svg"}
              alt={"facebook icon"}
              width={30}
              height={30}
            />
      </Link>
     
          </div>
          <div className={s.socialIcon}>
          <Link href="https://www.instagram.com/centrostudimugello1994/" target="_blank" className={s.linkTag}>
  
            <Image
              src={"/icons/instagram.svg"}
              alt={"instagram icon"}
              width={30}
              height={30}
            />
              </Link>
          </div>
          <div className={s.socialIcon}>
          <Link href="https://www.youtube.com/channel/UC4Iq349wLtnznhw_BfO1Dhw" target="_blank" className={s.linkTag}>
  
            <Image
              src={"/icons/youtube.svg"}
              alt={"youtube icon"}
              width={30}
              height={30}
            />
               </Link>
          </div>
        </div>
      </nav>
      <nav className={s.navTwo}>
        <div className={s.navTwoBox}>
        <div className={s.logoContainer}>
          <Image
            src={"/assets/tefl_transp.png"}
            alt={"logo image"}
            width={350}
            height={80}
          />
          {/* <h1>website name</h1> */}
        </div>
        <ul className={s.flexContainer}>
          <li className={s.navItem}>
            <Link href={"/accreditated"} className={s.linkTag}>accredited</Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/internship"} className={s.linkTag}>internship</Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/blog"} className={s.linkTag}>blog</Link>
          </li>
          <li className={s.navItem}>
            <Link href={"/consultation_sessions"} className={s.linkTag}>consultation sessions</Link>
          </li>

        </ul>
        </div>
        <BottomNavbar/>
      </nav>
     
    </>
  );
};

export default TopDoubleNavBar;