import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Button } from "../button/Button";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import icons from "../db/icons.json";
import contact from "../db/contact.json";
import logo from "/img/logo/Salmed_logo_poziom_biale.svg";
import "./footer.scss";

export const Footer = () => {
  const { t } = useTranslation("translation");
  const location = useLocation();
  const isWelcomeScreen = location.pathname === "/";
  if (isWelcomeScreen) {
    return null;
  }
  return (
    <div className="footer-wrapper">
      <Link className="privacy-policy" to="privacy-policy">
        {t("privacyPolicy.policy")}
      </Link>
      <div className="footer-contact">
        <Button classname={"footer-button"}>
          {t("buttonText.reservation")}
        </Button>
        <a href={`tel:+48${contact.telephone}`}>
          <div className="footer-contat-links">
            <FontAwesomeIcon icon={icons.telephone as IconProp} />
            {contact.telephone}
          </div>
        </a>
        <a href={`mailto:${contact.email}`}>
          <div className="footer-contat-links">
            <FontAwesomeIcon icon={icons.eMail as IconProp} />
            {contact.email}
          </div>
        </a>
        <a href="http://">
          <div className="footer-contat-links">
            <FontAwesomeIcon icon={icons.adress as IconProp} />
            {contact.adress}
          </div>
        </a>
      </div>
      <a href="https://centrum.sal-med.pl" className="salmed-clinic">
        <img src={logo} alt="" />
      </a>
    </div>
  );
};
