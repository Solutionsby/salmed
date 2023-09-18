import { AboutMe } from "../aboutMe/AbouteMe";
import { ServicePage } from "../servicesPage/ServicesPage";
import { Slider } from "../slider/Slider";
import "./mainPage.scss";

export const MainPage: React.FC = () => {
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
