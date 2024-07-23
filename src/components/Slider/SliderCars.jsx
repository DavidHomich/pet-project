import React from "react";
import data from "../../utils/data.js";
import Slider from "react-slick/lib/slider.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slider/SliderCars.css";

const SliderCars = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="top-slider">
      <Slider {...settings}>
        {data.map((d) => (
          <div className="top-slider-item" key={d.id}>
            <img src={d.img} alt="slides" />
            <div className="top-slider-text-container">
              <p className="top-slider-text">
                <span>{d.price}</span>
                <span>місць: {d.places}</span>
                <span>{d.mileage}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCars;
