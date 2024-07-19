import bannerImage1 from "../../img/headerBanner1.png"; 
import bannerImage2 from "../../img/headerBanner2.png"; 
import "../Banner/Banner.css"


export const HeaderBanner1 = () => {
    return (
      <div className="banner">
        <img src={bannerImage1} alt="Banner1" className="banner-image banner1" />
        <div className="banner-text">
          Chez vous, <span className="text-mobile-split">partout et ailleurs</span> 
        </div>
      </div>
    );
  }

 export const HeaderBanner2 = () => {
    return (
      <div className="banner">
        <img src={bannerImage2} alt="Banner2" className="banner-image banner2" />
      </div>
    );
  }
