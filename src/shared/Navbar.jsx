import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">The Market Trail</div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </div>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" exact className="nav-link" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-link" activeClassName="active">
                        About us
                    </NavLink>
                    <NavLink to="/contact" className="nav-link" activeClassName="active">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;