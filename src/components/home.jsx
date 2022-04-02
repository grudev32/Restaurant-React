import React from "react";

import Header from "./global/header";

const Home = () => {
    return (
        <section className="home-route">
            <Header />

            <div className="home-services">
                <div className="services-wrapper">
                    <h1 className="services-title">Our Services</h1>

                    <div className="services-cards">
                        <div className="service-card">
                            <div className="card-wrapper">
                                <img
                                    src="https://hips.hearstapps.com/ver.h-cdn.co/assets/16/34/best-restaurants-soleil.jpg"
                                    alt="service"
                                    className="card-image"
                                />
                                <h2 className="card-title">Luxury Style</h2>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-wrapper">
                                <img
                                    src="https://www.thegibsonhotel.ie/wp-content/uploads/2019/07/couple-enjoying-romantic-dinner-restaurant-768x510.jpg"
                                    alt="service"
                                    className="card-image"
                                />
                                <h2 className="card-title">Quiet Place</h2>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-wrapper">
                                <img
                                    src="https://krispitech.com/wp-content/uploads/2021/07/Scan-a-QR-code-on-android.jpg"
                                    alt="service"
                                    className="card-image"
                                />
                                <h2 className="card-title">QR Code Menu</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
