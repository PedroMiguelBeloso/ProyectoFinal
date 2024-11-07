import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cartIcon from "../assets/vecteezy_shopping-cart-icon-shopping-basket-on-transparent_19787018.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">The Market Trail</div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Start
          </Link>{" "}
          {/* "/" te lleva a la ruta raiz*/}
          <Link to="/" className="nav-link">
            Products
          </Link>
          <a href="#about" className="nav-link">
            About us
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <Link to="/cart"> <div className="cartZone"><img src={cartIcon} alt="" className="cartIcon" /></div> </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
