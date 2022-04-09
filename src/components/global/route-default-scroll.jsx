import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* 
Name: Henry Azer
ID: 220190314
*/
const ScrollRouteToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollRouteToTop;
