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
      <div className="aboutMe">
        <AboutMe />
      </div>
      <div className="main-page-service">
        <ServicePage />
      </div>
    </div>
  );
};
