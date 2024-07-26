import "../../components/Card/Card.css"; // Import the CSS file for styling
import React from "react";
import { useNavigate } from "react-router-dom";

const LogementsCard = ({ id, title, cover }) => { //reçoit les props ID TITLE et COVER
  const navigate = useNavigate();  
  const handleCardClick = () => { //Charger la route quand une carte est cliqué 
    navigate(`/logements/${id}`);
  };

  return (
    <div className="logements-card" data-id={id} onClick={handleCardClick}>
      <div className="card-cover">
        <img src={cover} alt={title} />
        <div className="card-content">
          {title}
        </div>
      </div>
    </div>
  );
};

export default LogementsCard;