import React, { useState } from "react";
import "./../Collapse/Collapse.css"; 

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true); //Etat qui détermine si plié ou non

  const toggleCollapse = () => { //Fonction pour inverser la valeur true ou false, plié ou non
    setIsCollapsed(!isCollapsed); 
  };

    const renderContent = () => { 
      if (Array.isArray(content)) { //Si content est un tableau :
        return (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      } else { // Si ce n'est pas un tableau, afficher un paragraphe simple
        return <p>{content}</p>;
      }
    };
  

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <div className="collapse-title">{title}</div>
        <div className={`collapse-icon ${isCollapsed ? "closed" : "open"}`}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={`collapse-content ${!isCollapsed ? "open" : ""}`}>{renderContent()}
      </div>
    </div>
  );
};


export default Collapse;