import React from 'react';
import styles from './Button.module.scss';

const ApplyTodayButton: React.FC = () => {
  return (
    <button className={styles.applyTodayButton}>
      Apply Today
    </button>
  );
};

export default ApplyTodayButton;
