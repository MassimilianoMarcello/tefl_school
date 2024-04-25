import React from 'react'
import s from'./navbar.module.scss'
import Link from 'next/link'

const DropdownMenu = () => {
  return (
    <div className={s.dropdownContainer}>DropdownMenu
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
    
    </div>
    </div>
  )
}

export default DropdownMenu