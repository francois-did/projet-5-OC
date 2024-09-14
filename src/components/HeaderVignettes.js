import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderVignettes.scss'; // Utilise le bon fichier de styles

function HeaderVignette() {
  return (
    <header className="header-vignette">
      <div className="header-logo">
        <h1>K<span className="logo-icon">a</span>sa</h1> 
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

export default HeaderVignette;
