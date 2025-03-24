import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <h2>ERN</h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="cta-btn">
                <button>Booking</button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar