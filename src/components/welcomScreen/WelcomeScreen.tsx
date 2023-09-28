import "./welcomScreen.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const WelcomScreen = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="welcome-screen-wrapper">
      <div className="ball">
        <a href="">{t("welcomeScreen.center")}</a>
      </div>
      <div className="ball">
        <Link to="mainPage">{t("welcomeScreen.clinic")}</Link>
      </div>
    </div>
  );
};
