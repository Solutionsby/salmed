import "./button.scss";
import React, { useEffect } from "react";

interface ButtonProps {
  children: string;
  classname: string;
}
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PatientsPlugin: any;
  }
}

export const Button: React.FC<ButtonProps> = ({ children, classname }) => {
  useEffect(() => {
    const loadMyDrScript = () => {
      const mydrScript = document.getElementsByTagName("script")[0];
      const js = document.createElement("script");
      js.src = "https://mydr.pl/static/mydr-pp.min.js";
      mydrScript.parentNode?.insertBefore(js, mydrScript);

      js.onload = () => {
        const PatientsPlugin = new window.PatientsPlugin();
        PatientsPlugin.init({
          app: "https://mydr.pl/patients_plugin",
          plugin: "https://mydr.pl/static",
        });
      };
    };

    loadMyDrScript();
  }, []);
  return (
    <div className={`button-wrapper ${classname}`}>
      <button
        className="btn-mydr-pp"
        data-doctor="adamsalbert"
        data-specialty=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6MjE3ODF9.3h7z-J_hL6HC5kr45bvYQprpWPw_oLuL_NbFJvTIpKk"
      >
        {children}
      </button>
    </div>
  );
};
