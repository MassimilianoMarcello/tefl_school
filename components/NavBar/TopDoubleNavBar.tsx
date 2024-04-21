import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import s from "@/app/page.module.scss";
import Image from "next/image";
import Link from "next/link";

const TopDoubleNavBar = () => {
  return (
    <>
      <nav className={s.flexContainer}>
        <div className={s.flexContainer}>
          <div className="email">
            <Image
              src={"/icons/envelope.svg"}
              alt={"mail icon"}
              width={20}
              height={20}
            />

            <span>info@youdomain.com</span>
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
          <div className="facebook">
            <Image
              src={"/icons/facebook.svg"}
              alt={"facebook icon"}
              width={20}
              height={20}
            />
          </div>
          <div className="instagram">
            <Image
              src={"/icons/instagram.svg"}
              alt={"instagram icon"}
              width={20}
              height={20}
            />
          </div>
          <div className="youtube">
            <Image
              src={"/icons/youtube.svg"}
              alt={"youtube icon"}
              width={20}
              height={20}
            />
          </div>
        </div>
      </nav>
      <nav className={s.flexContainer}>
        <div className={s.flexContainer}>
          <Image
            src={"/icons/youtube.svg"}
            alt={"logo image"}
            width={20}
            height={20}
          />
          <h1>website name</h1>
        </div>
        <ul className={s.flexContainer}>
          <li className="nav-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link href={"/"}> OurCourses</Link>
          </li>
          <li className="nav-item">
            <Link href={"/"}>Our Teachers</Link>
          </li>
          <li className="nav-item">
            <Link href={"/"}>Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link href={"/"}>FAQ</Link>
          </li>
          <li className="nav-item">
            <Link href={"/"}></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopDoubleNavBar;
