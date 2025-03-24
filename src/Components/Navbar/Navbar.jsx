import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Clicking the logo redirects to Home */}
      <div className="logo">
        <h2><Link to="/">ERN</Link></h2>
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="cta-btn">
        <button>Booking</button>
      </div>
    </div>
  );
};

export default Navbar;
