import "../services.scss";
import { pediatricTwo } from "../../db/price.json";
import { useTranslation } from "react-i18next";
import { Button } from "../../button/Button";

export const PediatricsTwo = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="services-wrapper">
      <div
        className="header-services"
        style={{ backgroundImage: "url(/img/headers/Headers1.jpg)" }}
      >
        <div className="header-blend">
          <h1>{t("servicesContent.visitTwoHeader")}</h1>
        </div>
      </div>
      <div className="content-services">
        <p>{t("servicesContent.visitTwo")}</p>
      </div>
      <div className="wrapper-reservation">
        <div className="services-price">
          <div className="price-weekend">
            <h4 className="price-description">
              {t("servicesContent.visitPriceWeekend")}
            </h4>
            <div className="price-line"></div>
            <h3 className="price-cost">{pediatricTwo.pediatricOneWeekend}</h3>
          </div>
          <div className="price-week">
            <h4 className="price-description">
              {t("servicesContent.visitPriceWekk")}
            </h4>
            <div className="price-line"></div>
            <h3 className="price-cost">{pediatricTwo.pediatricOneWeek}</h3>
          </div>
        </div>
        <Button classname={"services-button"}>Zarezerwuj</Button>
      </div>
    </div>
  );
};
