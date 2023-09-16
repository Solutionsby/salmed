import "./menuNavigation.scss";
import contact from "../../db/contact.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import icons from "../../db/icons.json";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const MenuNavigation: React.FC<{
  isActive: boolean;
  toggle: () => void;
}> = ({ isActive, toggle }) => {
  const { t } = useTranslation("translation");
  return (
    <div className={isActive ? "menu-navigation open" : "menu-navigation"}>
      <ul>
        <li>
          <Link to="about" onClick={toggle}>
            {t("navigation.aboutMe")}
          </Link>
        </li>
        <li>
          <Link to="priceList" onClick={toggle}>
            {t("navigation.priceList")}
          </Link>
        </li>
        <li>
          <Link to="contact" onClick={toggle}>
            {t("navigation.contact")}
          </Link>
        </li>
        <li>
          <div className="menu-contact-wrapper">
            <div className="contat-phone contact-elements">
              <a href={`tel:+48${contact.telephone}`}>
                <FontAwesomeIcon icon={icons.telephone as IconProp} />
                {contact.telephone}
              </a>
            </div>
            <div className="contact-mail contact-elements ">
              <a href={`mailto:${contact.email}`}>
                <FontAwesomeIcon icon={icons.eMail as IconProp} />
                {contact.email}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
