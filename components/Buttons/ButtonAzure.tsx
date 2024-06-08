import React from 'react';
import styles from './Button.module.scss';

interface ButtonAzureProps {
  text: string;
}

const ButtonAzure: React.FC<ButtonAzureProps> = ({ text }) => {
  return (
    <button className={styles.buttonAzure}>
      {text}
    </button>
  );
};

export default ButtonAzure;
