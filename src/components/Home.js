import React from 'react';
import Header from './Header';
import Banner from './Banner';
import MainContent from './MainContent';
import FooterMax from './footerMax';
import '../styles/Header.scss'

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MainContent />
      <FooterMax />
    </div>
  );
}

export default Home;
