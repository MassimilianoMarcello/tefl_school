// Contact.tsx
import React from 'react';
import styles from './A_Contact.module.scss'; 

const Contact = () => {
  return (
    <address className={styles.contactContainer}>
      <h1 className={styles.title}>the <span className={styles.highlight}>tefl</span> tuscany</h1>
      <h2 className={styles.subtitle}>learning center</h2>
      <p className={styles.address}>Centro Studi Mugello srl</p>
      <p className={styles.address}>Via degli Argini, 8/14, Borgo San Lorenzo (FI) Italy</p>
      <div className={styles.info}>
        <p>Partita Iva: 04603520489</p>
        <p><a className={styles.phoneNumber} href="tel:+390558495765">Call us +39 055 849 5765</a></p>
        <p className={styles.hours}>(Mon to Fri– 9am to 5pm)</p>
      </div>
    </address>
  );
};

export default Contact;

