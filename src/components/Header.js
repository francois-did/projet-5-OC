import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss'; 
import headerImage from '../images/kasa.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1> <img src={headerImage} alt="Logo" className="headerImage" /> </h1> 
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/" className="nav-link">Accueil</Link></li>
          <li><Link to="/about" className="nav-link">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
