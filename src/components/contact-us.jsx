import React from "react";

import {
    FaFacebookF,
    FaPhoneAlt,
    FaInstagram,
    FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
    return (
        <section className="contact-route">
            <div class="Container-1">
                <div class="Form-1">
                    <div class="Title">
                        <h6>Contect Us</h6>
                    </div>
                    <div class="Head-Text">
                        <p>
                            Get in touch with us,we are looking forword
                            <br /> to make it easy to order
                        </p>
                    </div>

                    <div class="Form-2">
                        <div class="line-1"></div>
                        <div class="lines-form">
                            <div>
                                <FaPhoneAlt className="form-icon" />
                                <span>199911</span>
                            </div>
                            <div>
                                <FaMapMarkerAlt className="form-icon" />
                                <span>12 Hegaz st., Egypt , Cairo</span>
                            </div>
                            <div>
                                <FaFacebookF className="form-icon" />
                                <span>pesto</span>
                            </div>
                            <div>
                                <FaInstagram className="form-icon" />
                                <span>Pesto</span>
                            </div>
                        </div>
                        <div class="line-2"></div>
                    </div>
                </div>
            </div>
            <div class="Container-2">
                <div class="Form-3">
                    <div class="Title">
                        <h6>Review</h6>
                    </div>
                    <div class="Head-Text">
                        <p class="text-1">
                            Please , Let us know your opinion, <br /> it's our
                            pleasure to know your opinion. <br />
                        </p>
                        <p class="text-2">Share your experience with us</p>
                    </div>

                    <div class="Form-4">
                        <div class="line-1"></div>
                        <div class="lines-form">
                            <div class="fname">
                                <label for="fname"></label>
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="FullName"
                                    class="fname"
                                />
                            </div>
                            <div class="Email">
                                <label for="Email"></label>
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="Opinion"
                                    id="Opinion"
                                    cols="50"
                                    rows="30"
                                    placeholder="Opinion"
                                ></textarea>
                                <br />
                            </div>
                            <input
                                type="button"
                                value="Sign up"
                                class="button"
                            />{" "}
                            <br />
                        </div>
                        <div class="line-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
