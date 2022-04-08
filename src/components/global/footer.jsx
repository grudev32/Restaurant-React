import React from "react";

import LogoImage from "../../resources/Logo/Logo-06.png";

import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
    FaWhatsapp,
    FaEnvelopeOpenText,
    FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="footer-wrapper">
                <div className="content-wrapper">
                    <img
                        src={LogoImage}
                        className="footer-logo"
                        alt="footer-logo"
                    />
                    <div className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Amet aperiam expedita magni ratione fugiat sed
                        exercitationem, cum sequi sint deserunt consequatur
                        delectus, nemo praesentium eum quasi voluptas dolores
                        deleniti cumque?
                    </div>
                    <h1 className="social-title">Get In Touch</h1>
                    <div className="social-container">
                        <FaFacebookF
                            className="social-icon"
                            onClick={() =>
                                window.open(
                                    "https://www.facebook.com/HeNaRyAzEr",
                                    "_blank"
                                )
                            }
                        />
                        <FaWhatsapp
                            className="social-icon"
                            onClick={() =>
                                window.open(
                                    "https://wa.me/201207885279",
                                    "_blank"
                                )
                            }
                        />
                        <FaGithub
                            className="social-icon"
                            onClick={() =>
                                window.open(
                                    "https://github.com/Henry-Azer",
                                    "_blank"
                                )
                            }
                        />
                        <FaLinkedinIn
                            className="social-icon"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/henry-azer-1220121a7",
                                    "_blank"
                                )
                            }
                        />
                        <FaEnvelopeOpenText
                            className="social-icon"
                            onClick={() =>
                                window.open(
                                    "mailto:henryazer@outlook.com",
                                    "_blank"
                                )
                            }
                        />
                        <FaPhoneAlt
                            className="social-icon"
                            onClick={() =>
                                window.open("tel:+201207885279", "_blank")
                            }
                        />
                    </div>
                </div>
                <div className="copyright-wrapper">
                    <div className="copyright">
                        <span>Copyright ©2022 All rights reserved | </span>
                        <span>Developed By: Cactus Team</span>
                    </div>
                    <div className="information">
                        <span>System Programming Project | </span>
                        <span>Dr. Nader Mahmoud | </span>
                        <span>Eng. Beshoy Samy</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
