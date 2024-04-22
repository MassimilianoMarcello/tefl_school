import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import c from "@/app/page.module.scss";
import s from'./navbar.module.scss'
import Image from "next/image";
import Link from "next/link";

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
          <div className={s.socialIcon}>
            <Image
              src={"/icons/facebook.svg"}
              alt={"facebook icon"}
              width={20}
              height={20}
            />
          </div>
          <div className={s.socialIcon}>
            <Image
              src={"/icons/instagram.svg"}
              alt={"instagram icon"}
              width={20}
              height={20}
            />
          </div>
          <div className={s.socialIcon}>
            <Image
              src={"/icons/youtube.svg"}
              alt={"youtube icon"}
              width={20}
              height={20}
            />
          </div>
        </div>
      </nav>
      <nav className={s.navTwo}>
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
      </nav>
    </>
  );
};

export default TopDoubleNavBar;
