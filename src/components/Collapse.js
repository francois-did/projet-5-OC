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

    
    let symbol;
    if (isOpen) {
        symbol = "▼"; 
    } else {
        symbol = "▲"; 
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
