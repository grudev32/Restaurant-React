import React from "react";

import { NavLink } from "react-router-dom";

import LogoImage from "../../resources/Logo/Logo-07.png";

const Header = () => {
    return (
        <section className="header-section">
            <div className="header-wrapper">
                <img
                    src={LogoImage}
                    className="header-logo"
                    alt="header-logo"
                />
                <div className="header-navigation">
                    <NavLink to="/" className="header-route">
                        Home
                    </NavLink>
                    <NavLink to="/pesto-menu" className="header-route">
                        Menu
                    </NavLink>
                    <NavLink to="/about-us" className="header-route">
                        About Us
                    </NavLink>
                    <NavLink to="/contact-us" className="header-route">
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Header;
