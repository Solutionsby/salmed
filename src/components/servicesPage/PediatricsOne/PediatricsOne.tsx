import "../services.scss";
import { priceComponent } from "../../db/price.json";
import { useTranslation } from "react-i18next";
import { Button } from "../../button/Button";

export const PediatricsOne = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="services-wrapper">
      <div
        className="header-services"
        style={{ backgroundImage: "url(/img/headers/Headers3.jpg)" }}
      >
        <div className="header-blend">
          <h1>{t("servicesContent.visitOneHeader")}</h1>
        </div>
      </div>
      <div className="content-services">
        <p>{t("servicesContent.visitOne")}</p>
      </div>
      <div className="wrapper-reservation">
        <div className="services-price">
          <div className="price-weekend">
            <h4 className="price-description">
              {t("servicesContent.visitPriceWeekend")}
            </h4>
            <div className="price-line"></div>
            <h3 className="price-cost">{priceComponent[0].priceWeekend}</h3>
          </div>
          <div className="price-week">
            <h4 className="price-description">
              {t("servicesContent.visitPriceWekk")}
            </h4>
            <div className="price-line"></div>
            <h3 className="price-cost">{priceComponent[0].priceWeek}</h3>
          </div>
        </div>
        <Button
          link={
            "https://mydr.pl/patient/new-visit/evisit?kind=Prywatna&doctor={%22id%22:85348,%22name%22:%22Adam%20Salbert%22,%22search_id%22:%22b85d5e4cb74a98%22}&date=2023-09-14&search=true"
          }
        >
          Zarezerwuj
        </Button>
      </div>
    </div>
  );
};
