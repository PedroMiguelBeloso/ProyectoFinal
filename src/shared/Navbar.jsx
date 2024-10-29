import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">The Market Trail</div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Start</Link>  
                    <Link to="/" className="nav-link">Products</Link> 
                    <Link to="/about" className="nav-link">About Us</Link> 
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
