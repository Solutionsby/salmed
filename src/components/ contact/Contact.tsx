import { Header } from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import icons from "../db/icons.json";
import contact from "../db/contact.json";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <Header image={"/img/slides/Slider1.jpg"} />
      <div className="contact-description-wrapper">
        <h1>Kontakt:</h1>
        <h2>Numer Telefonu:</h2>
        <a href={`tel:+48${contact.telephone}`}>
          <FontAwesomeIcon icon={icons.telephone as IconProp} />
          {contact.telephone}
        </a>
        <h2>Adres e-mail:</h2>
        <a href={`mailto:${contact.email}`}>
          <FontAwesomeIcon icon={icons.eMail as IconProp} />
          {contact.email}
        </a>
        <h2>Adres e-mail:</h2>
        <a href="http://">
          <FontAwesomeIcon icon={icons.adress as IconProp} />
          {contact.adress}
        </a>
      </div>
    </div>
  );
};
