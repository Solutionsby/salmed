import { Link } from "react-router-dom";
import "./mainNavigation.scss";
import { useState } from "react";
import { MenuNavigation } from "./ManuNavigation/MenuNavigation";

export const MainNavigation = () => {
  const [active, setActive] = useState(false);
  const clickToggle = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    toggle: boolean
  ) => {
    setter(!toggle);
  };
  const closeMenu = () => {
    if (active === true) {
      setActive(false);
    }
  };

  return (
    <div className="navigation-wrapper">
      <div className="navigation-logo-wrapper">
        <Link to="/" onClick={closeMenu}>
          <div className="navigation-logo"></div>
        </Link>
      </div>
      <div
        className={active ? "burger-menu-wrapper open" : "burger-menu-wrapper"}
        onClick={() => clickToggle(setActive, active)}
      >
        <div className={active ? "bars open" : "bars"}></div>
        <div className={active ? "bars open" : "bars"}></div>
        <div className={active ? "bars open" : "bars"}></div>
      </div>
      <MenuNavigation
        isActive={active}
        toggle={() => clickToggle(setActive, active)}
      />
    </div>
  );
};
