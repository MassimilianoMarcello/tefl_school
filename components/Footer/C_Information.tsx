// B_QuickLinks.tsx
import Link from 'next/link';
import React from 'react';
import styles from './B_QuickLinks.module.scss'; // Importa i tuoi stili Sass

const C_Information = () => {
  return (
    <div className={styles.quickLinksContainer}>
      <h2>B_QuickLinks</h2>
      <ul className={styles.linksList}>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
        <li>
          <Link href={''}>
            <p className={styles.link}>lorem ipsum</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default C_Information;