interface GtagCommandConfig {
  [key: string]: unknown;
}

interface Gtag {
  (command: "config", targetId: string, config?: GtagCommandConfig): void;
  (command: "set", config: GtagCommandConfig): void;
  (command: "js", date: Date): void;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: Gtag;
  }
}

import { GA_TRACKING_ID } from "../db/google_tracker.json";



// Inicjalizacja Google Analytics

export const initGA = () => {
  if (typeof window !== "undefined" && !window.gtag) {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // eslint-disable-next-line
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_TRACKING_ID);
    };
  }
};

export const logPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
