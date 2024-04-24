import React from 'react';

// Definizione del tipo Color
type Color = string;

// Definizione delle prop del componente IconClose
interface IconCloseProps {
  color: Color; // La prop color accetta un valore di tipo Color
}

// Componente IconClose
const IconClose: React.FC<IconCloseProps> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill={color} d="M7 11h10v2H7z"/>
    <path fill={color} d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
  </svg>
);

export default IconClose;

