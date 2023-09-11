import "./menuNavigation.scss";
import contact from "../../db/contact.json";
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
            <a href={`tel:+48${contact.telephone}`}>{contact.telephone}</a>

            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </li>
      </ul>
    </div>
  );
};
