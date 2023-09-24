import "./languageSelector.scss";
import { useState } from "react";

interface LanguageSelectorProps {
  changeLanguage: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  changeLanguage,
}) => {
  const [activeLenguage, setActiveLenguage] = useState<string>("pl");
  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
    setActiveLenguage(language);
  };
  return (
    <div className="language-selector-wrapper">
      <div
        className="language-pl language"
        style={{ color: activeLenguage === "pl" ? "black" : "gray" }}
        onClick={() => handleLanguageChange("pl")}
      >
        PL
      </div>
      <div>|</div>
      <div
        className="language-en language"
        onClick={() => handleLanguageChange("en")}
        style={{ color: activeLenguage === "en" ? "black" : "gray" }}
      >
        EN
      </div>
    </div>
  );
};
