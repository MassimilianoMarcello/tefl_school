import React from 'react';
import styles from './Button.module.scss';

const EnrollNowButton: React.FC = () => {
  return (
    <button className={styles.enrollNowButton}>
      Enroll Now
    </button>
  );
};

export default EnrollNowButton;
