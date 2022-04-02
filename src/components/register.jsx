import React from "react";

import LogoImage from "../resources/images/Logo.png";
import PizzaImage from "../resources/images/Pizza.png";
import PastaImage from "../resources/images/Pasta.png";

const Register = () => {
    return (
        <section className="register-route">
            <div className="Registration">
                <img className="Logo" src={LogoImage} alt="Logo" />
                <img className="Pizza" src={PizzaImage} alt="Pizza" />
                <img className="Pasta" src={PastaImage} alt="Pasta" />

                <p className="paragraph1">
                    That's from our glad to be a part of our family
                </p>
                <form className="Input">
                    <input
                        className="input"
                        type="text"
                        placeholder="Full Name"
                        required
                    />
                    <br />
                    <input
                        className="input"
                        type="email"
                        placeholder="Email Address"
                        required
                    />
                    <br />
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <br />
                    <input
                        className="input"
                        type="password"
                        placeholder="Confirm Password"
                        required
                    />
                    <br />
                    <input className="Button" type="submit" value="Sign up" />
                </form>

                <div className="form2">
                    <p>Are you already a part of our family ..?</p>
                    <input className="Button" type="submit" value="Log In" />
                    <br />
                </div>
            </div>
        </section>
    );
};

export default Register;
