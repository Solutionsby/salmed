import { Header } from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import icons from "../db/icons.json";
import contact from "../db/contact.json";
import "./contact.scss";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="contact-wrapper">
      <Header image={"/img/slides/Slider1.jpg"} />
      <div className="contact-description-wrapper">
        <h1>{t("contact.contact")}</h1>
        <h2>{t("contact.telephoneNumber")}</h2>
        <a href={`tel:+48${contact.telephone}`}>
          <FontAwesomeIcon icon={icons.telephone as IconProp} />
          {contact.telephone}
        </a>
        <h2>{t("contact.emailAdress")}</h2>
        <a href={`mailto:${contact.email}`}>
          <FontAwesomeIcon icon={icons.eMail as IconProp} />
          {contact.email}
        </a>
        <h2>{t("contact.adress")}</h2>
        <a href="https://maps.app.goo.gl/nxx9Vd9gyYJ5qo997">
          <FontAwesomeIcon icon={icons.adress as IconProp} />
          {contact.adress}
        </a>
      </div>
    </div>
  );
};
