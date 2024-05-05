// B_QuickLinks.tsx
import Link from 'next/link';
import React from 'react';
import styles from './B_QuickLinks.module.scss';  
const C_Information = () => {
  return (
    <div className={styles.quickLinksContainer}>
      <h2>Information</h2>
      <ul className={styles.linksList}>
        <li className={styles.listItem}>
          <Link  href={''} className={styles.link}>
            <p className={styles.link}>all our courses</p>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={''}  className={styles.link}>
            <p className={styles.link}>meet the team</p>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={''} className={styles.link}>
            <p className={styles.link}>tefl brochure</p>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={''} className={styles.link}>
            <p className={styles.link}>about us</p>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={''} className={styles.link}>
            <p className={styles.link}>FAQs</p>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={''} className={styles.link}>
            <p className={styles.link}>Careers</p>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={''} className={styles.link}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={''} className={styles.link}>
            <p className={styles.link}>student login</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default C_Information;