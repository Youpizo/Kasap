import React from "react";
import "../DetailLogement/DetailLogement.css"
import Collapse from "../Collapse/Collapse";
import Rating from "../Rating/Rating";
import Tags from "../Tags/Tags"
import Slideshow from "../Slideshow/Slideshow";

const DetailLogement = ({ logement }) => { //Props -> Logement
    const { title, description, host, rating, location, equipments, tags, pictures } = logement; 
    //Destructuration du prop logement pour chaques propriétés

    return (
        <div>
            <Slideshow pictures={pictures} />
            <div className="logement-details">
                <div className="logement-infos">
                    <h2 className="logement-title">{title}</h2>
                    <p className="logement-location">{location}</p>
                    <Tags tags={tags} />
                </div>
                <div className="host-and-rating">
                    <div className="logement-host">
                        <p>{host.name}</p>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="32" fill="#C4C4C4" />
                            <image href={host.picture} x="0" y="0" width="64" height="64" clip-path="url(#circleClip)" />
                            <defs>
                                <clipPath id="circleClip">
                                    <circle cx="32" cy="32" r="32" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="logement-rating">
                        <Rating rating={rating} />
                    </div>
                </div>
            </div>
            <div className="logement-collapses">
                <Collapse title="Description" content={description} />
                <Collapse title="Equipments" content={equipments} />
            </div>
        </div>
    );
};

export default DetailLogement;
