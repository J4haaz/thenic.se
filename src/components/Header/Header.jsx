import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src="/assets/images/logo.png" alt="Logo" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-bar ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-item active">Home</a></li>
            <li><a href="#about" className="nav-item">About NIC</a></li>
            <li><a href="#masjid" className="nav-item">The Masjid</a></li>
            <li><a href="#education" className="nav-item">Education</a></li>
            <li><a href="#team" className="nav-item">Team</a></li>
            <li><a href="#contact" className="nav-item">Contact Us</a></li>
          </ul>
          <button className="support-button">SUPPORT</button>
        </nav>
        <div className="social-icons">
          <a href="#" className="social-icon fab fa-facebook-f"></a>
          <a href="#" className="social-icon fab fa-instagram"></a>
          <a href="#" className="social-icon fab fa-youtube"></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
