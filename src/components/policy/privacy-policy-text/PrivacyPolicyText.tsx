import "./privacyPolicyText.scss";
import { useTranslation } from "react-i18next";

export const PrivacyPolicyText = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="privacy-policy-text-wrapper">
      <div className="privacy-policy-text-entry">
        <p>{t("privacyPolicyText.entry")}</p>
        <p>{t("privacyPolicyText.dataController")}</p>
      </div>
      <div className="privacy-policy-text-paragrafs">
        <div className="paragrafOne privacy-policy-text-paragraf">
          <h4>{t("privacyPolicyText.paragrafOne.heading")}</h4>
          <p>{t("privacyPolicyText.paragrafOne.text")}</p>
          <ul>
            <li>
              <p>{t("privacyPolicyText.paragrafOne.textAHeading")}</p>
              <ul>
                <li>
                  <p>{t("privacyPolicyText.paragrafOne.textAOne")}</p>
                </li>
                <li>
                  <p>{t("privacyPolicyText.paragrafOne.textATwo")}</p>
                </li>
                <li>
                  <p>{t("privacyPolicyText.paragrafOne.textAThree")}</p>
                </li>
                <li>
                  <p>{t("privacyPolicyText.paragrafOne.textAFour")}</p>
                </li>
              </ul>
            </li>
            <li>
              <p>{t("privacyPolicyText.paragrafOne.textBHeading")}</p>
              <ul>
                <li>
                  <p>{t("privacyPolicyText.paragrafOne.textBOne")}</p>
                </li>
                <li>
                  <p>{t("privacyPolicyText.paragrafOne.textBTwo")}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="paragrafTwo privacy-policy-text-paragraf">
          <h4>{t("privacyPolicyText.paragrafTwo.heading")}</h4>
          <ul>
            <li>
              <p>{t("privacyPolicyText.paragrafTwo.textA")}</p>
            </li>
            <li>
              <p>{t("privacyPolicyText.paragrafTwo.textB")}</p>
            </li>
            <li>
              <p>{t("privacyPolicyText.paragrafTwo.textC")}</p>
            </li>
          </ul>
        </div>
        <div className="paragrafThree privacy-policy-text-paragraf">
          <h4>{t("privacyPolicyText.paragrafThree.heading")}</h4>
          <p>{t("privacyPolicyText.paragrafThree.text")}</p>
        </div>
        <div className="paragrafFour privacy-policy-text-paragraf">
          <h4>{t("privacyPolicyText.paragrafFour.heading")}</h4>
          <p>{t("privacyPolicyText.paragrafFour.text")}</p>
        </div>
        <div className="paragrafFive privacy-policy-text-paragraf">
          <h4>{t("privacyPolicyText.paragrafFive.heading")}</h4>
          <p>{t("privacyPolicyText.paragrafFive.text")}</p>
        </div>
        <div className="paragrafSix privacy-policy-text-paragraf">
          <h4>{t("privacyPolicyText.paragrafSix.heading")}</h4>
          <p>{t("privacyPolicyText.paragrafSix.text")}</p>
        </div>
        <div className="paragrafSeven privacy-policy-text-paragraf">
          <h4>{t("privacyPolicyText.paragrafSeven.heading")}</h4>
          <p>{t("privacyPolicyText.paragrafSeven.text")}</p>
        </div>
        <div className="ending privacy-policy-text-paragraf">
          <p>{t("privacyPolicyText.ending")}</p>
        </div>
      </div>
    </div>
  );
};
