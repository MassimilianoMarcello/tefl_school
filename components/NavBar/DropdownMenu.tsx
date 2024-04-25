import React from 'react'
import s from'./navbar.module.scss'
import Link from 'next/link'

const DropdownMenu = () => {
  return (
    <div className={s.dropdownContainer}>DropdownMenu
     <div className={s.flexContainer}>
        <ul className={s.flexContainerRow}>
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
            
          </ul>
    
    </div>
    </div>
  )
}

export default DropdownMenu