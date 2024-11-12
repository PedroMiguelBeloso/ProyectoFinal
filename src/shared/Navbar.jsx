import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import cartIcon from "../assets/vecteezy_shopping-cart-icon-shopping-basket-on-transparent_19787018.png";

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

          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}> <div className="cartZone"><img src={cartIcon} alt="" className="cartIcon" /></div> </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;