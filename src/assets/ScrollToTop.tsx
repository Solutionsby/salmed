import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopEffect = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default ScrollToTopEffect;
