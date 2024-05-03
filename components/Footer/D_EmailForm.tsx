// SignUp.tsx
"use client"


import React, { useState } from 'react';
import styles from './D_EmailForm.module.scss'; // Importa i tuoi stili Sass

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email inviata:', email);
    setEmail('');
  };

  return (
    <div className={styles.signUpContainer}>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Inserisci la tua email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button className={styles.button} type="submit">
          Iscriviti
        </button>
      </form>
    </div>
  );
};

export default SignUp;
