import { ServicePage } from "../servicesPage/servicesPage";
import { Slider } from "../slider/Slider";
import "./mainPage.scss";

export const MainPage: React.FC = () => {
  return (
    <div className="main-page-wrapper">
      <div className="main-page-header">
        <Slider />
      </div>
      <div className="main-page-service">
        <ServicePage />
      </div>
    </div>
  );
};
