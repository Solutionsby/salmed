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
      <div className="language-pl language">
        <div
          className="language-selector-cover"
          onClick={() => handleLanguageChange("pl")}
          style={{
            backgroundColor:
              activeLenguage === "pl" ? "transparent" : "rgba(0,0,0,0.7)",
          }}
        ></div>
      </div>
      <div className="language-selector-linie"></div>
      <div className="language-en language">
        <div
          className="language-selector-cover"
          onClick={() => handleLanguageChange("en")}
          style={{
            backgroundColor:
              activeLenguage === "en" ? "transparent" : "rgba(0,0,0,0.7)",
          }}
        ></div>
      </div>
    </div>
  );
};
