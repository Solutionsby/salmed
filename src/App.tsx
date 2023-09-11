import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { MainPage } from "./components/mainPage/MainPage";

import "./App.css";

// Importuje tłumaczenia
import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";
import { MainNavigation } from "./components/navigation/MainNavigation";
import { Footer } from "./components/footer/Footer";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    pl: { translation: translationPL },
  },
  lng: "pl",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <MainNavigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
