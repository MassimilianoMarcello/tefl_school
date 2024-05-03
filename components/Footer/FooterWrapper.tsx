// FooterWrapper.tsx
import React from 'react';
import styles from './FooterWrapper.module.scss'; // Importa i tuoi stili Sass
import QuickLinks from './B_QuickLinks';
import Contact from './A_Contact';
import Information from './C_Information';
import SignUp from './D_EmailForm';

const FooterWrapper = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.gridContainer}>
        <div className={styles.contactContainer}>
          <Contact />
        </div>
        <div className={styles.quickLinksContainer}>
          <QuickLinks />
        </div>
        <div className={styles.informationContainer}>
          <Information />
        </div>
        <div className={styles.signUpContainer}>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default FooterWrapper;
