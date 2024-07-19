import React from "react";
import "../Footer/Footer.css";
import logo from "../../img/KasaLogo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
      <div className="content">
        <p>&copy; 2020 Kasa. All<span className="mobile-text"> rights reserved</span></p>
      </div>
    </footer>
  );
}

export default Footer;