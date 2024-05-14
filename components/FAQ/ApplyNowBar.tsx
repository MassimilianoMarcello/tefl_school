import Link from 'next/link'
import React from 'react'
// import s from '@/components/NavBar/navbar.module.scss';
import styles from './FaqPage.module.scss';




const ApplyNowBar = () => {
  return (
    <>
      <Link href={''}>
        <button className={styles.applyButton}>
          Apply now
        </button>
      </Link>   
      <div>
        <ul className="sidebarList">
          <li className="sidebarTitle" style={{ listStyleType: "none" }}>
            <h3>Next Courses</h3>
          </li>

          <li className="sidebarItem" style={{ listStyleType: "none" }}>
            <Link href={"/"} className="sidebarLink" style={{ textDecoration: 'none' }}>
              <p className="courseName">120 h course one</p>
            </Link>
          </li>
          <li className="sidebarItem" style={{ listStyleType: "none" }}>
            <Link href={"/"} className="sidebarLink" style={{ textDecoration: 'none' }}>
              <p className="courseName">180 h course two</p>
            </Link>
          </li>
          <li className="sidebarItem" style={{ listStyleType: "none" }}>
            <Link href={"/"} className="sidebarLink" style={{ textDecoration: 'none' }}>
              <p className="courseName">220h course 3</p>
            </Link>
          </li>
          <li className="sidebarItem" style={{ listStyleType: "none" }}>
            <Link href={"/"} className="sidebarLink" style={{ textDecoration: 'none' }}>
              <p className="courseName">all included course</p>
            </Link>
          </li>
        </ul>
      </div> 
    </>
  )
}

export default ApplyNowBar;
