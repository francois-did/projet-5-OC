import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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

    return (
        <div className={collapseClassName}>
            <div className="collapse-title">
                {title}
                <span onClick={toggleCollapse} style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
                </span>
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
