import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { MainPage } from "./components/mainPage/MainPage";
import { MainNavigation } from "./components/navigation/MainNavigation";
import { PrivacyPolicy } from "./components/policy/PrivacyPolicy";
import { Footer } from "./components/footer/Footer";
import { AboutMe } from "./components/aboutMe/AbouteMe";
import { PriceList } from "./components/ priceList/PriceList";
import { Contact } from "./components/ contact/Contact";
import { PrivacyPolicyText } from "./components/policy/privacy-policy-text/PrivacyPolicyText";
import { priceComponent } from "./components/db/price.json";
import { serviceContent } from "./components/db/services.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";
import {
  faUserMd,
  faBriefcaseMedical,
  faLaptopMedical,
  faStethoscope,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
// Importuje tłumaczenia
import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";
import ScrollToTopEffect from "./assets/ScrollToTop";
import { ServicesPages } from "./components/servicesPage/servicesPages/ServicesPages";
import { WelcomScreen } from "./components/welcomScreen/WelcomeScreen";
import ReactGa from "react-ga";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
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
  faMapMarkerAlt,
  faClinicMedical
);

function App() {
  useEffect(() => {
    ReactGa.initialize("G-RHW479BGCS");
    checkPrivacyAccepted();
  }, []);
  const [privacAccepted, setPrivacyAccepted] = useState<boolean | null>(null);

  const handlePrivacy = (decision: boolean) => {
    setPrivacyAccepted(decision);
    if (decision === true) {
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 2);
      document.cookie = `privacyAccepted=true; expires=${expirationDate.toUTCString()}; path=/`;
      ReactGa.pageview(window.location.pathname + window.location.search);
    } else {
      setPrivacyAccepted(decision === false);
      ReactGa.pageview(
        window.location.pathname + window.location.search,
        undefined,
        "privacy-declined"
      );
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
  console.log(privacAccepted);
  return (
    <Router>
      <div className="app-wrapper">
        <MainNavigation changeLanguage={i18n.changeLanguage} />
        <ScrollToTopEffect />
        <Routes>
          <Route path="/" element={<WelcomScreen />} />
          <Route path="mainPage" element={<MainPage />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="priceList" element={<PriceList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicyText />} />
          <Route
            path="pedriatic-indection"
            element={
              <ServicesPages
                price={priceComponent[0]}
                content={serviceContent[0]}
              />
            }
          />
          <Route
            path="pedriatic-healthy"
            element={
              <ServicesPages
                price={priceComponent[1]}
                content={serviceContent[1]}
              />
            }
          />
          <Route
            path="internist-indection"
            element={
              <ServicesPages
                price={priceComponent[2]}
                content={serviceContent[2]}
              />
            }
          />
          <Route
            path="internist-healthy"
            element={
              <ServicesPages
                price={priceComponent[3]}
                content={serviceContent[3]}
              />
            }
          />
        </Routes>
        <PrivacyPolicy
          privacAccepted={privacAccepted}
          handlePrivacy={handlePrivacy}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
