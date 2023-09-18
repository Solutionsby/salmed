import { Link } from "react-router-dom";
import "./mainNavigation.scss";
import { useState } from "react";
import { MenuNavigation } from "./ManuNavigation/MenuNavigation";

export const MainNavigation = () => {
  const [active, setActive] = useState(false);
  const menuSwitch = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    toggle: boolean,
    onlyClose: boolean
  ) => {
    if (onlyClose) {
      setter(false);
    } else {
      setter(!toggle);
    }
  };

  return (
    <div className="navigation-wrapper">
      <div className="navigation-logo-wrapper">
        <Link to="/" onClick={() => menuSwitch(setActive, active, true)}>
          <div className="navigation-logo"></div>
        </Link>
      </div>
      <div
        className={active ? "burger-menu-wrapper open" : "burger-menu-wrapper"}
        onClick={() => menuSwitch(setActive, active, false)}
      >
        <div className={active ? "bars open" : "bars"}></div>
        <div className={active ? "bars open" : "bars"}></div>
        <div className={active ? "bars open" : "bars"}></div>
      </div>
      <MenuNavigation
        isActive={active}
        setActive={setActive}
        toggle={() => menuSwitch(setActive, active, false)}
      />
    </div>
  );
};
