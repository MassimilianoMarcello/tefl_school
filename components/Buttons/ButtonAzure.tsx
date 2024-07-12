import React from 'react';
import styles from './Button.module.scss';

interface ButtonAzureProps {
  text: string;
  color?:string;
}

const ButtonAzure: React.FC<ButtonAzureProps> = ({ text ,color}) => {
  return (
    <button className={styles.buttonAzure} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default ButtonAzure;
