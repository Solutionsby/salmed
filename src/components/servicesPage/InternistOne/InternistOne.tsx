import "../services.scss";
import { internistOne } from "../../db/price.json";
import { useTranslation } from "react-i18next";
import { Button } from "../../button/Button";

export const InternistOne = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="services-wrapper">
      <div
        className="header-services"
        style={{ backgroundImage: "url(/img/headers/Headers4.jpg)" }}
      >
        <div className="header-blend">
          <h1>{t("servicesContent.visitOneHeader")}</h1>
        </div>
      </div>
      <div className="content-services">
        <p>{t("servicesContent.visitThree")}</p>
      </div>
      <div className="wrapper-reservation">
        <div className="services-price">
          <div className="price-weekend">
            <h4 className="price-description">
              {t("servicesContent.visitPriceWeekend")}
            </h4>
            <div className="price-line"></div>
            <h3 className="price-cost">{internistOne.internistOneWeekend}</h3>
          </div>
          <div className="price-week">
            <h4 className="price-description">
              {t("servicesContent.visitPriceWekk")}
            </h4>
            <div className="price-line"></div>
            <h3 className="price-cost">{internistOne.internistOneWeek}</h3>
          </div>
        </div>
        <Button classname={"services-button"}>Zarezerwuj</Button>
      </div>
    </div>
  );
};
