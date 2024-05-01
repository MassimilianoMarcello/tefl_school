import Link from 'next/dist/client/link'
import s from'./navbar.module.scss'


const MobileMenu = () => {
  return (<>
      <div>MobileMenu</div>
      <ul className={s.flexContainerRow}>
        <li className={s.navItemMobile}>
            <Link href={"/courses"}>Courses</Link>
        </li>
        <li className={s.navItemMobile}>
        
            <Link href={'/internship'}>Internship</Link>
        </li>
        <li className={s.navItemMobile}>
            <Link href={'/about_us'}>About Us</Link>
        </li>
      </ul>
            
  
  </>

  )
}

export default MobileMenu