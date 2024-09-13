import React, { useState } from 'react';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction qui change l'état entre ouvert et fermé
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // Définir une classe CSS pour savoir si la section est ouverte ou fermée
    let className = "collapse";
    if (isOpen) {
        className += " open";
    }

    // Définir un symbole pour indiquer si la section est ouverte ou fermée
    let symbol;
    if (isOpen) {
        symbol = "▼"; // Flèche vers le haut (section ouverte)
    } else {
        symbol = "▲"; // Flèche vers le bas (section fermée)
    }

    // Afficher ou non le contenu
    let contentSection;
    if (isOpen) {
        contentSection = (
            <div className="collapse-content">
                {content}
            </div>
        );
    } else {
        contentSection = null;
    }

    return (
        <div className={className}>
            <div className="collapse-title">
                {title}
                <span onClick={toggleCollapse} style={{ cursor: "pointer" }} >{symbol}</span> 
            </div>
            {contentSection}
        </div>
    );
}

export default Collapse;
