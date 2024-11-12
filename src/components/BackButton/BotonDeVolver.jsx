import React from 'react';
import "./BotonDeVolver.css";


function BackButton() {
  return (
    <button className="back-button" onClick={() => window.history.back()}>Back home</button>
  );
}

export default BackButton;
