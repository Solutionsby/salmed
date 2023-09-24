import "./languageSelector.scss";
import i18n, { changeLanguage } from "i18next";

interface LanguageSelectorProps {
  changeLanguage: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  console.log(i18n.language);

  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
  };
  return (
    <div className="language-selector-wrapper">
      <div
        className="language-pl language"
        style={{ color: i18n.language === "pl" ? "black" : "gray" }}
        onClick={() => handleLanguageChange("pl")}
      >
        PL
      </div>
      <div>|</div>
      <div
        className="language-en language"
        onClick={() => handleLanguageChange("en")}
        style={{ color: i18n.language === "en" ? "black" : "gray" }}
      >
        EN
      </div>
    </div>
  );
};
