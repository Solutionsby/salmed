import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { MainPage } from "./components/mainPage/MainPage";
import { MainNavigation } from "./components/navigation/MainNavigation";
import { Footer } from "./components/footer/Footer";
import { AboutMe } from "./components/aboutMe/AbouteMe";
import { PriceList } from "./components/ priceList/PriceList";
import { Contact } from "./components/ contact/Contact";
import { PediatricsOne } from "./components/servicesPage/PediatricsOne/PediatricsOne";
import { PediatricsTwo } from "./components/servicesPage/PediatricsTwo/PediatricsTwo";
import { InternistOne } from "./components/servicesPage/InternistOne/InternistOne";
import { InternistTwo } from "./components/servicesPage/InternistTwo/InternistTwo";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserMd,
  faBriefcaseMedical,
  faLaptopMedical,
  faStethoscope,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

// Importuje tłumaczenia
// import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";

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
library.add(
  faUserMd,
  faBriefcaseMedical,
  faLaptopMedical,
  faStethoscope,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt
);

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <MainNavigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="priceList" element={<PriceList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pedriatic-indection" element={<PediatricsOne />} />
          <Route path="pedriatic-healthy" element={<PediatricsTwo />} />
          <Route path="internist-indection" element={<InternistOne />} />
          <Route path="internist-healthy" element={<InternistTwo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
