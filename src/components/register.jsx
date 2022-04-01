import { logDOM } from "@testing-library/react";
import React from "react";

const Register = () => {
    return (
        <section className="register-route">
            <div className="Registeration">
                <img className="Logo" src={require('../imgs/Logo.png').default} alt="Logo"/>
                <img className="Piza" src={require('../imgs/Piza.png').default} alt="Piza"/>
                <img className="Pasta" src={require('../imgs/Pasta.png').default} alt="Pasta"/>

                <p className="paragraph1">That's from our glad to be a part of our family</p>
                <form className="Input">
                    <input className="input" type="text" placeholder="Full Name" required/><br/>
                    <input className="input" type="email" placeholder="Email Address" required/><br/>
                    <input className="input" type="password" placeholder="Password" required/><br/>
                    <input className="input" type="password" placeholder="Confirm Password" required/><br/>
                    <input className="Button" type="submit" value="Sign up"/>
                </form>

                <div className="form2">
                    <p>Are you already a part of our family ..?</p>
                    <input className="Button" type="submit" value="Log In"/><br/>
                </div>
            </div>
        </section>
    );
};

export default Register;
