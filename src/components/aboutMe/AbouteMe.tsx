import "./abouteMe.scss";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="about-me-wrapper">
      <div className="about-me-photo"></div>
      <div className="about-me-description">
        {t("aboutMeSection.aboutMeDescription")}
      </div>
    </div>
  );
};
