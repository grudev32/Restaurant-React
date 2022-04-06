import React from "react";

// import Header from "./global/header";
import Footer from "./global/footer";

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

const Home = () => {
    return (
        <section className="home-route">
            {/* - [PROBLEM] Slider conflict header */}
            {/* - [SOLUTION] make it display none and display after scroll 500px down */}
            {/* <Header /> */}
            <HomeSlider className="home-slider" slides={slides} />

            <div className="home-special container">
                <img src={PizzaImage} alt="Pizza" className="pizza-image" />
                <img src={PastaImage} alt="Pasta" className="pasta-image" />

                <div className="special-text">
                    <h1 className="special-title">Why we are special ..?</h1>

                    <p className="special-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Minima distinctio nesciunt consequatur inventore
                        vitae, cum, veniam totam maxime nobis quaerat reiciendis
                        quam quibusdam eaque fugiat enim optio ipsum illum quo?
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Minima distinctio nesciunt consequatur inventore
                        vitae, cum, veniam totam maxime nobis quaerat reiciendis
                        quam quibusdam eaque fugiat enim optio ipsum illum quo?
                    </p>
                </div>
            </div>

            {/* - [PROBLEM] Slider conflict pesto sauce title */}
            <div className="home-pesto">
                <div className="pesto-image">
                    <div className="pesto-sauce">
                        <h1 className="pesto-title">What is</h1>
                        <h1 className="pesto">Pesto Sauce</h1>
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
                    <div className="desc container">
                        <p className="desc-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis molestiae quia fugiat perferendis autem,
                            expedita quas ullam necessitatibus dignissimos iusto
                            sunt reprehenderit, at repellat natus exercitationem
                            laboriosam ipsam praesentium saepe. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Commodi
                            debitis placeat earum error soluta, accusantium
                            atque, voluptate ipsum quos ut consequatur itaque,
                            vitae voluptates quam vero. Omnis cumque unde
                            voluptatum. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Nobis molestiae quia fugiat
                            perferendis autem, expedita quas ullam
                            necessitatibus dignissimos iusto sunt reprehenderit,
                            at repellat natus exercitationem laboriosam ipsam
                            praesentium saepe. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Commodi debitis
                            placeat earum error soluta, accusantium atque,
                            voluptate ipsum quos ut consequatur itaque, vitae
                            voluptates quam vero. Omnis cumque unde voluptatum.
                        </p>
                        <p className="desc-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Hic totam harum dicta et nulla vitae deleniti
                            commodi nobis vel tempore consectetur doloribus rem,
                            consequatur quos alias obcaecati at rerum velit.
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Hic totam harum dicta et nulla vitae deleniti
                            commodi nobis vel tempore consectetur doloribus rem,
                            consequatur quos alias obcaecati at rerum velit.
                        </p>
                    </div>
                    <div className="make-pesto">
                        <h1 className="how-to">How to make</h1>
                        <h1 className="pesto">Pesto Sauce</h1>
                        <iframe
                            className="pesto-video"
                            src="https://www.youtube.com/embed/kNgtVLlNmDg?start=1"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="offers-section">
                <h1 className="offers-section-title">New offers</h1>
                <div className="offers">
                    <div className="pizza-offer offer">
                        <img
                            src={PizzaImage}
                            alt="pizza-img"
                            className="pizza-offer-img offer-img"
                        />
                        <div className="offer-text">
                            <h1 className="pizza-title offer-title">
                                <span className="two">2</span> Pizza
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
                            <h1 className="pasta-title offer-title">
                                <span className="two">2</span> Pasta
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
                        <h1 className="subscription-title">Subscribe Now</h1>
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
            <Footer />
        </section>
    );
};

export default Home;
