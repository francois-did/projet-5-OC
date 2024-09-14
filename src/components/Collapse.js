import React, { useState } from 'react';

function Collapse({ title, content, className = "" }) {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction qui change l'état entre ouvert et fermé
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // Combiner la classe CSS passée en prop avec la classe "collapse"
    let collapseClassName = `collapse ${className}`;
    if (isOpen) {
        collapseClassName += " open";
    }

    // Définir un symbole pour indiquer si la section est ouverte ou fermée
    let symbol;
    if (isOpen) {
        symbol = "▼"; // Flèche vers le bas (section ouverte)
    } else {
        symbol = "▲"; // Flèche vers le haut (section fermée)
    }

    return (
        <div className={collapseClassName}>
            <div className="collapse-title">
                {title}
                <span onClick={toggleCollapse} style={{ cursor: "pointer" }}>{symbol}</span>
            </div>
            {isOpen && (
                <div className="collapse-content">
                    {content}
                </div>
            )}
        </div>
    );
}

export default Collapse;
