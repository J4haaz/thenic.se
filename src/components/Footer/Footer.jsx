import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="/assets/images/logo.png"
            alt="NIC Logo"
            className="footer-logo"
          />
          <p>&copy; 2023 thenic.se</p>
        </div>
        <div className="footer-center">
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About NIC</a></li>
            <li><a href="#">The Masjid</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <button className="footer-support-button">SUPPORT</button>
        </div>
        <div className="footer-right">
          <h4>FOLLOW US</h4>
          <div className="footer-socials">
          <a href="#" className="social-icon fab fa-facebook-f"></a>
          <a href="#" className="social-icon fab fa-instagram"></a>
          <a href="#" className="social-icon fab fa-youtube"></a>
          </div>
          <p>Email: contact@thenic.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
