import React from 'react';
import './AboutUs.css';
import BackButton from '../BackButton/BotonDeVolver';

const AboutUs = () => {
    return (
        <div className="about-us">
      <BackButton />
            <h1>PROYECTO FINAL</h1>
            <p><strong>Instituto:</strong> ORT</p>
            <p><strong>Profesor:</strong> Santiago Castro</p>
            <p><strong>Materia:</strong> Programación en Nuevas Tecnologías 2</p>
            <p><strong>Alumnos:</strong> {}</p>
            <p>Beloso Berdun Pedro Miguel</p>
            <p>Agustin Alonso</p>
            <p>Aguilar Leonardo</p>
            <p>Cristian</p>
        </div>
    );
};

export default AboutUs;
