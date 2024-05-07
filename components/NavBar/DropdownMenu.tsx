
import s from'./navbar.module.scss'
import Link from 'next/link'


const DropdownMenu = () => {
  return (
    <div className={s.dropdownContainer}>
     <div className={s.flexContainer}>
        <ul className={s.flexContainerRow}>
          <li className={s.dropdownItem } style={{ listStyleType: 'none' }}>
            <h3>Next Courses</h3>
          </li>
       
          <li className={s.dropdownItem} style={{ listStyleType: 'none' }}>
              <Link href={"/"} className={s.linkTag}>
              <p className={s.navNamesDrop}>120 h course one</p>
              </Link>
            </li>
            <li className={s.dropdownItem } style={{ listStyleType: 'none'}}>
              <Link href={"/"} className={s.linkTag}>
              <p className={s.navNamesDrop}>180 h course two</p> 
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href={"/"} className={s.linkTag} style={{ listStyleType: 'none' }}>
              <p className={s.navNamesDrop}>220h course 3</p> 
              </Link>
            </li>
            <li className={s.dropdownItem } style={{ listStyleType: 'none' }}>
              <Link href={"/"} className={s.linkTag}>
              <p className={s.navNamesDrop}>all included course</p>
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