import React from 'react';
import './BotonDeVolver.css';


function BackButton() {
  return (
    <button onClick={() => window.history.back()}>Volver atrás</button>
  );
}

export default BackButton;
