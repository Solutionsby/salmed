import "./menuNavigationLandscape.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const MenuNavigationLandscape = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="menu-navigation-landscep-wrapper">
      <ul className="menu-ul-wrapper-landscape">
        <li>
          <Link to="/#aboutMeSection">{t("navigation.aboutMe")}</Link>
        </li>
        <li>
          <Link to="/#serviceSection">{t("navigation.services")}</Link>
        </li>
        <li>
          {" "}
          <Link to="priceList">{t("navigation.priceList")}</Link>
        </li>
        <li>
          {" "}
          <Link to="contact">{t("navigation.contact")}</Link>
        </li>
      </ul>
    </div>
  );
};
