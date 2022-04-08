import React, { useState, useEffect } from "react";

import { NavLink, useHistory } from "react-router-dom";

import LogoImage from "../../resources/Logo/Logo-07.png";

const Header = (props) => {
    const history = useHistory();

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

    useEffect(() => {
        const handleScrollEvent = () => {
            handleScroll(100, 10);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    const handleScroll = (topOffset, height) => {
        if (window.pageYOffset > topOffset + height) {
            setSticky({ isSticky: true, offset: height });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    return (
        <section
            id="sticky-header"
            className={`
                ${
                    props.routeClass === "home-header"
                        ? sticky.isSticky
                            ? "home-header header-sticky"
                            : "home-header"
                        : "header-section"
                }`}
        >
            <div className="header-wrapper">
                <img
                    src={LogoImage}
                    className="header-logo"
                    alt="header-logo"
                    onClick={() => history.push("/")}
                />
                <div className="header-navigation">
                    <NavLink to="/" className="header-route">
                        Home
                    </NavLink>
                    <NavLink to="/pesto-menu" className="header-route">
                        Menu
                    </NavLink>
                    <NavLink to="/contact-us" className="header-route">
                        Contact us
                    </NavLink>
                    <NavLink to="/about-us" className="header-route">
                        About us
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Header;
