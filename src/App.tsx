import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { MainPage } from "./components/mainPage/MainPage";
import { MainNavigation } from "./components/navigation/MainNavigation";
import { Footer } from "./components/footer/Footer";
import { AbouteMe } from "./components/aboutMe/AbouteMe";
import { PriceList } from "./components/ priceList/PriceList";
import { Contact } from "./components/ contact/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserMd,
  faBriefcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

// Importuje tłumaczenia
// import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";
import { PediatricsOne } from "./components/servicesPage/PediatricsOne/PediatricsOne";

i18n.use(initReactI18next).init({
  resources: {
    // en: { translation: translationEN },
    pl: { translation: translationPL },
  },
  lng: "pl",
  fallbackLng: "pl", // zmienić na Angielski
  interpolation: {
    escapeValue: false,
  },
});
library.add(faUserMd, faBriefcaseMedical);

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <MainNavigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<AbouteMe />} />
          <Route path="priceList" element={<PriceList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pedriatic-indection" element={<PediatricsOne />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
