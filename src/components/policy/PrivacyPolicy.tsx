import { Link } from "react-router-dom";
import "./privacyPolicy.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const PrivacyPolicy = () => {
  const [privacAccepted, setPrivacyAccepted] = useState<boolean | null>(null);
  const { t } = useTranslation("translation");

  const handlePrivacy = (decision: boolean) => {
    setPrivacyAccepted(decision);
    if (decision === true) {
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 2);
      document.cookie = `privacyAccepted=true; expires=${expirationDate.toUTCString()}; path=/`;
    } else {
      setPrivacyAccepted(decision);
      // wstrzymanie zbierania danych
    }
  };
  const checkPrivacyAccepted = () => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name.trim() === "privacyAccepted") {
        setPrivacyAccepted(value === "true");
        break;
      }
    }
  };
  useEffect(() => {
    checkPrivacyAccepted();
  }, []);

  if (privacAccepted === null) {
    return (
      <div className="privacy-policy-wrapper">
        <div className="privacy-policy-content">
          <p>{t("privatyPolicy.popUpText")}</p>
          <div className="privacy-policy-button">
            <span onClick={() => handlePrivacy(true)}>
              {t("privatyPolicy.accept")}
            </span>
            <span onClick={() => handlePrivacy(false)}>
              {t("privatyPolicy.denial")}
            </span>
          </div>
          <Link
            to="privacy-policy"
            onClick={() => handlePrivacy(false)}
            className="privaty-policy-link"
          >
            {t("privatyPolicy.more")}
          </Link>
        </div>
      </div>
    );
  } else {
    return <div id="policy" className="privacy-policy-wrapper close"></div>;
  }
};
