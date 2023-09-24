import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Button } from "../button/Button";
import "./footer.scss";
import icons from "../db/icons.json";
import contact from "../db/contact.json";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-contact">
        <Button classname={"footer-button"}>Umów Wizytę</Button>
        <a href={`tel:+48${contact.telephone}`}>
          <div className="footer-contat-links">
            <FontAwesomeIcon icon={icons.telephone as IconProp} />
            {contact.telephone}
          </div>
        </a>
        <a href={`mailto:${contact.email}`}>
          <div className="footer-contat-links">
            <FontAwesomeIcon icon={icons.eMail as IconProp} />
            {contact.email}
          </div>
        </a>
        <a href="http://">
          <div className="footer-contat-links">
            <FontAwesomeIcon icon={icons.adress as IconProp} />
            {contact.adress}
          </div>
        </a>
      </div>
      <Link to="privacy-policy">Polityka prywatności</Link>
      <div className="solutionsby"></div>
    </div>
  );
};
