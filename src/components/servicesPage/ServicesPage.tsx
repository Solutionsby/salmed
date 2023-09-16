import { useTranslation } from "react-i18next";
import { services } from "../db/services.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import "./servicePage.scss";

export const ServicePage = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="service-page-wrapper">
      <div className="service-component">
        {services.map(
          ({ id, fontAwsomeIcon, nameKey, descriptionKey, linkPath }) => (
            <div key={id} className="services-component-wrapper">
              <Link to={linkPath} className="services-links">
                <div className="service-icon">
                  <FontAwesomeIcon icon={fontAwsomeIcon as IconProp} />
                </div>
                <div className="service-texts">
                  <div className="service-name">{t(nameKey)}</div>
                  <div className="service-description">{t(descriptionKey)}</div>
                  <p>{t("services.more")}</p>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};
