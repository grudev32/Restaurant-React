import React, { useEffect} from "react";

import Header from "./global/header";
import Footer from "./global/footer";
import BackToTop from "./global/back-to-top";

import HomeSlider from "./home/home-slider";

import PizzaImage from "../resources/images/kindpng_5396179.png";
import PastaImage from "../resources/images/PngItem_1147129.png";

const slides = [
    {
        subTitle: "Pizza",
        title: "Italian",
        image: "https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
        subTitle: "Pasta",
        title: "Italian",
        image: "https://c0.wallpaperflare.com/preview/124/905/130/bowl-chopsticks-close-up-cuisine.jpg",
    },
    {
        subTitle: "Awesome",
        title: "Fork",
        image: "https://c1.wallpaperflare.com/preview/714/652/925/spaghetti-pasta-noodles-italian.jpg",
    },
    {
        subTitle: "Pizza",
        title: "Italian",
        image: "https://cdn.pixabay.com/photo/2018/07/09/09/34/pizza-3525673_960_720.jpg",
    },
    {
        subTitle: "Hot",
        title: "Pepper",
        image: "https://c4.wallpaperflare.com/wallpaper/501/768/988/fire-food-chilli-peppers-wallpaper-preview.jpg",
    },
];

/* 
Name: Bavly Ashraf
ID: 220190354
*/
const Home = () => {

    useEffect(() => {
        document.title = "Home | Pesto Menu";
    });

    return (
        <section className="home-route">
            <BackToTop />
            <Header routeClass="home-header" />
            <HomeSlider className="home-slider" slides={slides} />

            <div className="home-special">
                <img src={PizzaImage} alt="Pizza" className="home-pizza-image" />
                <img src={PastaImage} alt="Pasta" className="home-pasta-image" />

                <div className="special-text">
                    <h1 className="special-title title">
                        Why we are special ..?
                    </h1>

                    <p className="special-description paragraph">
                        Our resturant presents for you all pizza types all your
                        needs, but we are special because we are the first
                        resturant that can serve for you the best pizza and
                        pasta with your adorable sauce PESTO sauce. Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla
                        facilisis at vero eros et accumsan et iusto odio
                        dignissim qui blandit praesent luptatum zzril delenit
                        augue duis
                    </p>
                </div>
            </div>

            <div className="home-pesto">
                <div className="pesto-image">
                    <div className="pesto-sauce">
                        <h1 className="pesto-title title">What is</h1>
                        <h1 className="pesto title">Pesto Sauce</h1>
                    </div>
                    <img
                        src={
                            "https://www.simplyrecipes.com/thmb/A0W7431YIrdX2dTAEhaya5wOxus=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__08__Fresh-Basil-Pesto-LEAD-2-d990e7900183450dbddb69628bd8a160.jpg"
                        }
                        alt="Pesto-Sauce"
                        className="pesto-sauce-img"
                    />
                </div>

                <div className="pesto-desc">
                    <div className="desc paragraph">
                        <p className="desc-1">
                            Originally from Genoa, Italy, pesto traces its name
                            to the Italian word "pestare," which means "to crush
                            or pound." For hundreds of years, pesto was made by
                            pounding the ingredients in a mortar and pestle. It
                            dates back from Roman times when Genoans would crush
                            walnuts with herbs and garlic. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Ut laboriosam
                            doloribus dolorum quod expedita in commodi, itaque
                            quas odit aperiam possimus non nam eius quasi
                            laudantium voluptas iure vel! Distinctio! Lorem,
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Itaque obcaecati similique eos consectetur neque,
                            repudiandae nobis aperiam rerum et consequatur vitae
                            corrupti voluptatum nam delectus! Laboriosam
                            assumenda necessitatibus magnam perspiciatis!
                        </p>
                        <p className="desc-2">
                            The most popular variety of pesto now is made by
                            "crushing" basil, garlic, pine nuts, olive oil and
                            some hard cheese in a food processor or blender.
                            It's fun to use a mortar and pestle, but the modern
                            way is much easier. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Corrupti deserunt
                            consequuntur tempora, dolores beatae sunt
                            praesentium reiciendis sed quaerat eaque blanditiis
                            omnis ducimus dolorum nulla. Eaque aspernatur
                            reprehenderit quia porro!
                        </p>
                    </div>
                    <div className="make-pesto">
                        <h1 className="how-to">How to make</h1>
                        <h1 className="pesto">Pesto Sauce</h1>
                        <iframe
                            className="pesto-video"
                            src="https://www.youtube.com/embed/kNgtVLlNmDg?start=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="offers-section">
                <h1 className="offers-section-title title">New offers</h1>
                <div className="offers">
                    <div className="pizza-offer offer">
                        <img
                            src={PizzaImage}
                            alt="pizza-img"
                            className="pizza-offer-img offer-img"
                        />
                        <div className="offer-text">
                            <h1 className="pizza-title offer-title title">
                                <span className="number-two">2</span> Pizza
                            </h1>
                            <h1 className="old-price">40$</h1>
                            <h1 className="new-price">30$</h1>
                        </div>
                    </div>
                    <div className="pasta-offer offer">
                        <img
                            src={PastaImage}
                            alt="pasta-img"
                            className="pasta-offer-img offer-img"
                        />
                        <div className="offer-text">
                            <h1 className="pasta-title offer-title title">
                                <span className="number-two">2</span> Pasta
                            </h1>
                            <h1 className="old-price">50$</h1>
                            <h1 className="new-price">40$</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-subscription">
                <div className="subscription-wrapper">
                    <div className="subscription-section">
                        <h1 className="subscription-title title">
                            Subscribe Now
                        </h1>
                        <p className="subscription-text">
                            To know all our daily offers
                        </p>
                        <form className="subscription-form">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="subscription-input"
                            />
                            <button className="subscription-button btn btn-2">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <img
                        src="https://images.deliveryhero.io/image/talabat/Menuitems/Mix_Chicken_Pizza_637654106929826677.jpg"
                        alt="subscription-background"
                        className="subscription-background"
                    />
                </div>
            </div>

            <div className="home-services">
                <div className="services-wrapper">
                    <h1 className="services-title title">Our Services</h1>

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
            <Footer />
        </section>
    );
};

export default Home;
