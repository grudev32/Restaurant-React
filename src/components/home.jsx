import React from "react";

import Header from "./global/header";
import PizzaImage from "../resources/images/kindpng_5396179.png";
import PastaImage from "../resources/images/PngItem_1147129.png";

const Home = () => {
  return (
    <section className="home-route container">
      <Header />
      {/* <h1>Home Page</h1> */}



      <div className="home-special">
        <img src={PizzaImage} alt="Pizza-Image" className="pizza-image" />
        <img src={PastaImage} alt="Pasta-Image" className="pasta-image" />

        <div className="special-text">
          <h1 className="special-title">Why we are special ..?</h1>

          <p className="special-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            distinctio nesciunt consequatur inventore vitae, cum, veniam totam
            maxime nobis quaerat reiciendis quam quibusdam eaque fugiat enim
            optio ipsum illum quo?
          </p>
        </div>
      </div>

      <div className="pesto-sauce">
        <div className="pesto-title">
          <h1 className="pesto-title">
            What is<span className="pesto">Pesto Sauce</span>
          </h1>
          <img
            src={"https://www.simplyrecipes.com/thmb/A0W7431YIrdX2dTAEhaya5wOxus=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__08__Fresh-Basil-Pesto-LEAD-2-d990e7900183450dbddb69628bd8a160.jpg"}
            alt="Pesto-Sauce"
            className="pesto-sauce"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
