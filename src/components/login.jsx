import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import LogoImage from "../resources/Logo/Logo.png";
import PizzaImage from "../resources/Logo/Pizza.png";
import PastaImage from "../resources/Logo/Pasta.png";
import BackgroundImage from "../resources/backgrounds/Background.png";

/* 
Name: Andrew Nashaat
ID: 220190120
*/
function Login() {
    const history = useHistory();

    useEffect(() => {
        document.title = "Login | Pesto Menu";
    });

    return (
        <section className="login-route">
            <img
                className="Logo"
                src={LogoImage}
                alt="Logo"
                onClick={() => history.push("/")}
            />
            <img className="pesto" src={PastaImage} alt="pesto" />
            <img className="pizza" src={PizzaImage} alt="pizza" />
            <img
                className="register-background"
                src={BackgroundImage}
                alt="register-background"
            />
            <p> Don't miss a delicious meal...</p>
            <form action="" method="get">
                <input
                    type="email"
                    class="input-box"
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    class="input-box"
                    placeholder="Password"
                />
                <br />
                <button type="submit" class="button">
                    Login
                </button>
                <br /> <br />
                <p> Do you want to join our family..?</p>
                <button
                    type="submit"
                    class="button"
                    onClick={() => history.push("/register")}
                >
                    Sign up
                </button>
                <br />
            </form>
        </section>
    );
}

export default Login;
