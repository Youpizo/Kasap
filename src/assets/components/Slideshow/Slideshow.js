import React, { useState, useEffect } from "react";
import "../Slideshow/Slideshow.css"

const Slideshow = ({ pictures }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Eventlistener pour les flèches
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                goToPreviousSlide();
            } else if (event.key === 'ArrowRight') {
                goToNextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      
      }, []); 

    const goToPreviousSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
    };

     
    const shouldRenderButtons = pictures.length > 1;

    return (
        <div className="slideshow">
            <div className="slide-container">
                {shouldRenderButtons && (
                    <div onClick={goToPreviousSlide} className="prev">
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                        </svg>
                    </div>
                )}
                <img src={pictures[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />
                <div className="slide-counter">{currentSlide + 1}/{pictures.length}</div>
                {shouldRenderButtons && (
                    <div onClick={goToNextSlide} className="next">
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slideshow;