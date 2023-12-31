import "./welcomScreen.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import logo from "/img/logo/Salmed_logo_poziom_biale.svg";

export const WelcomScreen = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="welcome-screen-wrapper">
      <div className="center-bgc background">
        <div className="ball">
          <a href="https://centrum.sal-med.pl">
            {t("welcomeScreen.center")}
            <img src={logo} alt="Logo Centrum Leczenia Marichuana Leczniczą " />
          </a>
        </div>
      </div>
      <div className="clinic-bgc background">
        <div className="ball second-ball">
          <Link to="mainPage">
            {t("welcomeScreen.clinic")}{" "}
            <FontAwesomeIcon icon={"fas fa-clinic-medical" as IconProp} />
          </Link>
        </div>
      </div>
    </div>
  );
};
