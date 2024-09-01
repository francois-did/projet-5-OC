import React from 'react';
import '../styles/NotFound.scss'; 
import Header from './Header'; 
import '../styles/main.scss'; 
import FooterMax from './footerMax';

function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d'accueil</a>
      </div>
      <FooterMax />
    </>
  );
}

export default NotFound;
