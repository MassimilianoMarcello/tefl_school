import Link from 'next/dist/client/link'
import React from 'react'

const MobileMenu = () => {
  return (<>
      <div>MobileMenu</div>
      <ul>
        <li>
            <Link href={''}>Courses</Link>
        </li>
        <li>
            <Link href={''}>Internship</Link>
        </li>
        <li>
            <Link href={''}>About Us</Link>
        </li>
      </ul>
  
  </>

  )
}

export default MobileMenu