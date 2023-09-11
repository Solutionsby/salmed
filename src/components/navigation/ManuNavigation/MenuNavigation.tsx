import "./menuNavigation.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const MenuNavigation: React.FC<{ isActive: boolean }> = ({
  isActive,
}) => {
  const { t } = useTranslation("translation");
  return (
    <div className={isActive ? "menu-navigation open" : "menu-navigation"}>
      <ul>
        <li>
          <Link to="about">{t("navigation.aboutMe")}</Link>
        </li>
        <li>
          <Link to="priceList">{t("navigation.priceList")}</Link>
        </li>
        <li>
          <Link to="contact">{t("navigation.contact")}</Link>
        </li>
      </ul>
    </div>
  );
};
