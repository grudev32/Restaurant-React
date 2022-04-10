import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import LogoImage from "../resources/images/Logo.png";
import PizzaImage from "../resources/images/Pizza.png";
import PastaImage from "../resources/images/Pasta.png";
import BackgroundImage from "../resources/backgrounds/Background.jpg";

/* 
Name: Alber Ashraf
ID: 220190120
*/
const Register = () => {
    const history = useHistory();

    useEffect(() => {
        document.title = "Register | Pesto Menu";
    });

    return (
        <section className="register-route">
            <img
                src={BackgroundImage}
                alt="register-background"
                className="register-background"
            />
            <div className="Registration">
                <img
                    className="Logo"
                    src={LogoImage}
                    alt="Logo"
                    onClick={() => history.push("/")}
                />
                <img className="Pizza" src={PizzaImage} alt="Pizza" />
                <img className="Pasta" src={PastaImage} alt="Pasta" />

                <p className="paragraph1">
                    That's from our glad to be a part of our family
                </p>
                <form className="input-form">
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
                    <input className="btn btn-1" type="submit" value="Sign up" />
                </form>

                <div className="form2">
                    <p>Are you already a part of our family ..?</p>
                    <input
                        className="btn btn-1"
                        type="submit"
                        value="Log In"
                        onClick={() => history.push("/login")}
                    />
                    <br />
                </div>
            </div>
        </section>
    );
};

export default Register;
