// B_QuickLinks.tsx
import Link from 'next/link';
import React from 'react';
import styles from './B_QuickLinks.module.scss'; 

const QuickLinks = () => {
  return (
    <div className={styles.quickLinksContainer}>
      <h2>B_QuickLinks</h2>
      <ul className={styles.linksList}>
        <li>
          <Link href={''}>
            <p className={styles.link}>all our courses</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>meet the team</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>tefl brochure</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>about us</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>FAQs</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>Careers</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>student login</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;