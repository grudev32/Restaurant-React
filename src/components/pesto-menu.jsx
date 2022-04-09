import React from "react";
import carbonara from "../resources/products/carbonara.png";
import arrabbiata from "../resources/products/arrabbiata.png";
import diavola_pizza from "../resources/products/diavola.png";
import marinara_pizza from "../resources/products/marinara-pizza.png";
import margherita_pizza from "../resources/products/margherita-pizza.png";
import spaghetti_bolognese from "../resources/products/spaghetti-bolognese.png";
import quattro_fromaggi_pizza from "../resources/products/quattro-fromaggi-pizza.png";
import fettuccine_alfredo_pasta from "../resources/products/fettuccine-alfredo-pasta.png";
const PestoMenu = () => {
  return (
    <section className="menu-route">
      <div className="menu-title">
        <p className="heading">Menu</p>

        <p className="p">Don't miss that delicious food</p>
        <div className="pizza-image-background">
          <img
            className="pizza-image"
            src="https://images.deliveryhero.io/image/talabat/Menuitems/Mix_Chicken_Pizza_637654106929826677.jpg"
            alt="pizza pic"
          />
        </div>
      </div>
      <div className="container">
        <div className="menu">
          <h2 className="menu-group-pizza">Pizza</h2>
          <div className="pizza">
            <div className="pizza-menu-item">
              <img className="margherita" src={margherita_pizza} alt="" />
              <h3 className="menu-item-name">Pizza Margherita</h3>
              <p className="pizza-discreption">
                The classic Napolitan-style pizza with fresh tomato
                sauce,buffalo mozzarella and a hint of basil.
              </p>
              <p className="price">50 EGP</p>
            </div>

            <div className="pizza-menu-item">
              <img className="marinara" src={marinara_pizza} alt="" />
              <h3 className="menu-item-name">Pizza Marinara</h3>
              <p className="pizza-discreption">
                A vegan opption of Napolitan-style pizza topped with sun-dried
                tomato sauce with garlic,fresh oregano and extra-virgin olive
                oil.
              </p>
              <p className="price">40 EGP</p>
            </div>
            <div className="pizza-menu-item">
              <img className="diavola" src={diavola_pizza} alt="" />
              <h3 className="menu-item-name">Pizza Diavola</h3>
              <p className="pizza-discreption">
                Napolitan-style pizza with fresh tomato sauce,spicy
                peperoncino,Salami(Italian cured sausage),mozzarella,fresh basil
                and parmigiano-reggiano.
              </p>
              <p className="price">65 EGP</p>
            </div>
            <div className="pizza-menu-item">
              <img className="quattro" src={quattro_fromaggi_pizza} alt="" />
              <h3 className="menu-item-name">Pizza Quattro-formaggi</h3>
              <p className="pizza-discreption">
                Napolitan-style pizza with fresh tomato sauce,topped with a mix
                of four kinds of cheese(mozzarella,fontina,gorgonzola and
                parmigiano-reggiano).
              </p>
              <p className="price">85 EGP</p>
            </div>
          </div>
          <img
            className="pasta-image"
            src="https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123"
            alt=""
          />
          <h2 className="menu-group-pasta">Pasta</h2>
          <div className="pasta">
            <div className="pasta-menu-item">
              <img className="carbonara" src={carbonara} alt="" />
              <h3 className="menu-item-name">Pasta Carbonara</h3>
              <p className="pasta-discreption">
                Linguine pasta with carbonara sauce and chuncks of crispy beef
                bacon.
              </p>
              <p className="price">55 EGP</p>
            </div>
            <div className="pasta-menu-item">
              <img className="alfredo" src={fettuccine_alfredo_pasta} alt="" />
              <h3 className="menu-item-name">Fettuccine Alfredo</h3>
              <p className="pasta-discreption">
                Fettuccine pasta with Alfredo sauce(heavy cream and much of
                parmigiano-reggiano and pecorino cheese),served with grilled
                chicken breast.
              </p>
              <p className="price">60 EGP</p>
            </div>
            <div className="pasta-menu-item">
              <img className="bolognese" src={spaghetti_bolognese} alt="" />
              <h3 className="menu-item-name">Spaghetti Bolognese</h3>
              <p className="pasta-discreption">
                Spaghetti with Bolognese sauce(mix of ground beef and lamp
                meat,tomato sauce and cream).
              </p>
              <p className="price">50 EGP</p>
            </div>
            <div className="pasta-menu-item">
              <img className="arrabbiata" src={arrabbiata} alt="" />
              <h3 className="menu-item-name">Penne Arrabbiata</h3>
              <p className="pasta-discreption">
                Penne pasta with spicy sauce of sun-dried tomato,garlic and
                peperoncino.
              </p>
              <p className="price">35 EGP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PestoMenu;
