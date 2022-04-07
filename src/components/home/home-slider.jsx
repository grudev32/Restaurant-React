import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import classNames from "classnames";

import LogoImage from "../../resources/Logo/Logo-07.png";

const IMAGE_PARTS = 4;
let changeSliderTo = null;
const SLIDER_CHANGE_TIME = 4000;

const HomeSlider = (props) => {
    const [prevSlide, setPrevSlide] = useState(-1);
    const [activeSlide, setActiveSlide] = useState(-1);
    const [sliderReady, setSliderReady] = useState(false);

    useEffect(() => {
        if (props) {
            autoChangeSliderTO();
            setTimeout(() => {
                setActiveSlide(0);
                setSliderReady(true);
            }, 0);
        }
        return () => {
            window.clearTimeout(changeSliderTo);
        };
        // eslint-disable-next-line
    }, [props]);

    const autoChangeSliderTO = () => {
        changeSliderTo = setTimeout(() => {
            changeSlides(1);
            autoChangeSliderTO();
        }, SLIDER_CHANGE_TIME);
    };

    const changeSlides = (change) => {
        window.clearTimeout(changeSliderTo);
        const { length } = props.slides;

        const prevSlide = activeSlide;
        let activeSlideNew = prevSlide + change;
        if (activeSlideNew < 0) activeSlideNew = length - 1;
        if (activeSlideNew >= length) activeSlideNew = 0;
        setActiveSlide(activeSlideNew);
        setPrevSlide(prevSlide);
    };

    return (
        <section className={classNames("slider", { "s--ready": sliderReady })}>
            <img src={LogoImage} className="slider-logo" alt="pesto-logo" />
            <div className="slider-slides">
                {props.slides.map((slide, index) => (
                    <div
                        className={classNames("slider-slide", {
                            "s--active": activeSlide === index,
                            "s--prev": prevSlide === index,
                        })}
                        key={index + slide.subTitle}
                    >
                        <div className="slider-slide-content">
                            <h3 className="slider-slide-subheading">
                                {slide.title || slide.subTitle}
                            </h3>
                            <h2 className="slider-slide-heading">
                                {slide.subTitle.split("").map((l, i) => (
                                    <span key={i}>{l}</span>
                                ))}
                            </h2>
                            <NavLink
                                to="/pesto-menu"
                                className="slider-slide-menu"
                            >
                                Checkout Menu
                            </NavLink>
                        </div>
                        <div className="slider-slide-parts">
                            {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                                <div className="slider-slide-part" key={i}>
                                    <div
                                        className="slider-slide-part-inner"
                                        style={{
                                            backgroundImage: `url(${slide.image})`,
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider-control" onClick={() => changeSlides(-1)} />
            <div
                className="slider-control slider-control-right"
                onClick={() => changeSlides(1)}
            />
        </section>
    );
};

export default HomeSlider;
