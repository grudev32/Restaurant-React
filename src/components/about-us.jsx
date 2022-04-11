import React, { useEffect } from "react";

import Header from "./global/header";
import Footer from "./global/footer";
import BackToTop from "./global/back-to-top";

/* 
Name: Walid Salah
ID: 220190661
*/
const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us | Pesto Menu";
    });

    return (
        <section className="about-route">
            <Header />
            <BackToTop />
            <div className="about-us-container">
                <div className="aboutSection">
                    <div className="about">
                        <p>About Us</p>
                    </div>
                    <img
                        src="https://archello.s3.eu-central-1.amazonaws.com/images/2021/02/17/eleftherios-ambatzis---039-benini--039-s--039--italian-restaurant-in-rhodes-restaurants-archello.1613530601.251.jpg"
                        alt="photo1"
                    />
                </div>
                <div className="whyUsSection">
                    <p className="WhyUs">Why Us ..?</p>
                    <p className="FirstParagraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui dolor beatae aliquam laboriosam in eos? Enim iste,
                        reprehenderit consectetur veniam expedita placeat eum
                        sed quidem. Molestiae dolorum eius iusto quae! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Eos
                        officiis molestias asperiores delectus eaque inventore
                        ipsum, odio optio voluptas nihil blanditiis, ullam ea
                        aperiam eius quibusdam maxime, harum ad nostrum.
                    </p>
                    <p className="SecondParagraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam mollitia fuga officiis magnam. Ab mollitia
                        sequi praesentium quis dolore beatae! Minima quasi
                        excepturi voluptas eos nobis mollitia molestias numquam
                        minus? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Asperiores, nemo, natus veritatis
                        fugit cupiditate ex fuga ea autem minima officia
                        inventore. Nisi quam architecto, minus eligendi tenetur
                        dolores numquam officiis. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Hic illum ad dicta nemo,
                        eveniet laudantium, consequuntur quam dignissimos
                        exercitationem iusto quis, vel distinctio neque
                        quibusdam. Non rerum optio praesentium ullam!
                    </p>
                </div>
                <div className="ourTeamSection">
                    <img
                        className="FirstImage"
                        src="https://lalocanda.co.uk/wp-content/uploads/2021/11/La-Locanda-Chef-Patron-Maurizio-Bocchi.jpg"
                        alt="photo2"
                    />
                    <p>Our Team</p>
                </div>
                <div className="cardsSection">
                    <div className="cards">
                        <div className="card One">
                            <img
                                src="https://www.thesun.co.uk/wp-content/uploads/2021/10/NINTCHDBPICT000651541831.jpg"
                                alt="photo4"
                            />
                            <div className="name"> Nusret Gökçe </div>
                            <div className="country"> Turkey </div>
                        </div>
                        <div className="card Two">
                            <img
                                src="https://mediaaws.almasryalyoum.com/news/large/2021/02/24/1470959_0.jpg"
                                alt=""
                            />
                            <div className="name"> Czn Burak </div>
                            <div className="country"> Turkey </div>
                        </div>
                        <div className="card Three">
                            <img
                                src="https://3.bp.blogspot.com/-v3v47hBnEJE/XKRp9765ZKI/AAAAAAAAACY/qaA3N6vBecIXFons9qcGNw_l3_xmPIaAgCLcBGAs/s1600/paella.jpeg"
                                alt=""
                            />
                            <div className="name"> Fabio Trabocchi </div>
                            <div className="country"> Italy </div>
                        </div>
                    </div>
                </div>
                <div className="lastSection">
                    <img
                        src="https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123"
                        alt="photo3"
                    />
                </div>
            </div>
            <Footer />
        </section>
    );
};
export default AboutUs;
