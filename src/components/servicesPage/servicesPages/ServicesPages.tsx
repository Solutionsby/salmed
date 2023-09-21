import { useTranslation } from "react-i18next";
import { Header } from "../../header/Header";
import { Button } from "../../button/Button";
import "./servicesPages.scss";

interface priceObject {
  price: {
    headerName: string;
    headerContent: string;
    priceContentWeek: string;
    priceContentWeekend: string;
    priceWeek: string;
    priceWeekend: string;
  };
  content: {
    visitHeader: string;
    headerImg: string;
    visitDescripton: string;
  };
}

export const ServicesPages: React.FC<priceObject> = ({ price, content }) => {
  const { t } = useTranslation("translation");
  console.log(price.priceWeek);

  return (
    <div className="services-pages-wrapper">
      <Header image={content.headerImg}>
        <div className="header-blend">
          <h1>{t(content.visitHeader)}</h1>
        </div>
      </Header>
      <div className="services-pages-descripon-wrapper">
        <div className="services-descripton">{t(content.visitDescripton)}</div>
        <div className="services-price-list">
          <div className="price">
            <h4>{t(price.priceContentWeek)}</h4>
            <div className="price-line"></div>
            <h3>{price.priceWeek}</h3>
          </div>
          <div className="price">
            <h4>{t(price.priceContentWeekend)}</h4>
            <div className="price-line"></div>
            <h3>{price.priceWeekend}</h3>
          </div>
        </div>
        <Button classname={"services-button"}>Zarezerwuj</Button>
      </div>
    </div>
  );
};
