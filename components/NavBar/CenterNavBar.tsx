import React from "react";

import c from "@/app/page.module.scss";
import s from'./navbar.module.scss'
import Image from "next/image";
import Link from "next/link";


const CenterNavBar = () => {
  return (
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
   
  </nav>
 
  )
}

export default CenterNavBar