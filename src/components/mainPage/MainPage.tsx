import { useLocation } from "react-router-dom";
import { AboutMe } from "../aboutMe/AbouteMe";
import { ServicePage } from "../servicesPage/ServicesPage";
import { Slider } from "../slider/Slider";
import "./mainPage.scss";
import { useEffect } from "react";

export const MainPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash;
    if (sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="main-page-wrapper">
      <div className="main-page-header">
        <Slider />
      </div>
      <div className="main-page-service" id="serviceSection">
        <ServicePage />
      </div>
      <div className="aboutMe" id="aboutMeSection">
        <AboutMe />
      </div>
    </div>
  );
};
