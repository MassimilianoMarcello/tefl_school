import React from 'react'
import s from'./navbar.module.scss'
import Link from 'next/link'


const DropdownMenu = () => {
  return (
    <div className={s.dropdownContainer}>
     <div className={s.flexContainer}>
        <ul className={s.flexContainerRow}>
          <li className={s.navItem}>
            <h3>Next Courses</h3>
          </li>
       
            <li className={s.navItem}>
              <Link href={"/courseone"} className={s.linkTag}>
           120 h course one
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/course2"} className={s.linkTag}>
              180 h course two
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/course3"} className={s.linkTag}>
          220h course 3
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/course4"} className={s.linkTag}>
            all included course
              </Link>
            </li>
            
          </ul >
          <ul className={s.dropdownMenu}>
          <li className={s.dropdownItem }>
    <h3>English Level Test</h3>
    <p>Discover the perfect online TEFL course for you by taking our test! We'll align your skills and aspirations with the ideal TEFL program.</p>
    <Link href="/test" className={s.linkTag}>
      <button className={s.testButton}>Take the test</button>
    </Link>
  </li>
          </ul>
    
    </div>
    </div>
  )
}

export default DropdownMenu