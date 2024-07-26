//Affiche Header, Logo et une Navigation
import React from "react";
import { Link, useLocation } from "react-router-dom";
// link : liens de nav sans chargement de page
//uselocation : hook qui accède a l'objet de location
import "../Header/Header.css";
import logo from "../../img/KasaLogo.png";

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ''}>Accueil</Link>
          </li> 
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ''}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
