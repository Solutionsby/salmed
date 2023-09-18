import "./priceList.scss";
import { useTranslation } from "react-i18next";
import { priceComponent } from "../db/price.json";
import { Header } from "../header/Header";

export const PriceList: React.FC = () => {
  const { t } = useTranslation("translation");
  return (
    <div>
      <div className="price-list-wrapper">
        <Header image={"/img/slides/Slider2.jpg"} />
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
