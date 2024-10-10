import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">Proyecto PNT2</div>
                <div className="navbar-links">
                    <a href="#home" className="nav-link">Inicio</a>
                    <a href="#products" className="nav-link">Productos</a>
                    <a href="#about" className="nav-link">Sobre Nosotros</a>
                    <a href="#contact" className="nav-link">Contacto</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;