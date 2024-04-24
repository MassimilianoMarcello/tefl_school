"use client"

import s from "./navbar.module.scss";
import React, { useState } from 'react';
// import s from './HamburgerButton.module.scss';
// import  cross from '@/public/icons/bx-grid-alt.svg';
// import circle from '@/public/icons/bx-minus-circle.svg';
import Image from "next/image";
import Link from "next/link";
import IconOpen from './IconOpen'; // Importa il componente JSX per l'icona uno
import IconClose from './IconClose'; // Importa il componente JSX per l'icona due




const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Stato per gestire l'apertura/chiusura del menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.hamburgerMenu}>
     <button className={s.hamburgerIcon} onClick={toggleMenu}>
        {isOpen ? (
          <IconOpen color="#FF0000" /> // Imposta il colore dell'icona due quando il menu è aperto
        ) : (
          <IconClose color="#000000" /> // Imposta il colore dell'icona uno quando il menu è chiuso
        )}
      </button>
      {isOpen && (
        <div className={s.menu}>
          {/* Inserisci qui i tuoi link per il menu mobile */}
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerButton;
