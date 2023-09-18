import "./priceList.scss";
import { useTranslation } from "react-i18next";
import { priceComponent } from "../db/price.json";

export const PriceList: React.FC = () => {
  const { t } = useTranslation("translation");
  return (
    <div>
      <div className="price-list-wrapper">
        <div className="price-list-header"></div>
        <div className="price-list-pediatric-indection price-list">
          {priceComponent.map(
            ({
              id,
              headerName,
              headerContent,
              priceContentWeek,
              priceWeek,
              priceContentWeekend,
              priceWeekend,
            }) => (
              <div className="price-component-wrapper" key={id}>
                <h4>
                  {t(headerName)}
                  {t(headerContent)}
                </h4>
                <div className="price-list-content">
                  <p>{t(priceContentWeek)}</p>
                  <div className="line"></div>
                  <p>{priceWeek}</p>
                </div>
                <div className="price-list-content">
                  <p>{t(priceContentWeekend)}</p>
                  <div className="line"></div>
                  <p>{priceWeekend}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
