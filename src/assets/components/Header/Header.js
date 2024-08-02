
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header/Header.css";
import logo from "../../img/KasaLogo.png";

const Header = () => {
  const location = useLocation(); 

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="Kasa Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
          </li> 
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
