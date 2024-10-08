import React from 'react';  
import Collapse from './Collapse';  
import '../styles/About.scss';  
import Header from './Header';
import BannerAbout from './BannerAbout';
import FooterMax from './footerMax';
import '../styles/Collapse.scss';
import '../styles/Header.scss';




function About() {
    return (
        <>
        <Header />
        <BannerAbout />
        <div className="about-page">
            <div className="about-content">
                <Collapse 
                    title="Fiabilité" 
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
                />
                <Collapse 
                    title="Respect" 
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
                />
                <Collapse 
                    title="Service" 
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." 
                />
                <Collapse 
                    title="Sécurité" 
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
                />
            </div>
            
            
        

        </div>
        <FooterMax />
        </>
        
    );
    
}


export default About;

