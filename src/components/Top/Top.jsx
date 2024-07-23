import "./Top.css";
import "../../global/global.css";
import SliderCars from "../Slider/SliderCars";
import React from "react";
const Top = () => {
  return (
    <div className="top">
      <div className="conteiner">
        <div className="top-heading">
          <div className="top-content">
            <h1 className="top-title">Каршеринг в Киеве LUX автомобили</h1>
            <p className="top-text">
              Закажи эксклюзивный автомобиль через мобильное приложение в любой
              точке город
            </p>
            <a href="#" className="application-btn">
              {" "}
              Скачать приложение{" "}
            </a>
          </div>
          <SliderCars />
        </div>
        <div className="top-buttom">
          <div className="top-items">
            <div className="top-item">
              <img src="./img/surface1.svg" alt="" className="top-item-img" />
              <p className="top-item-text">
                Более 300 автомобилей в вашем распоряжении
              </p>
            </div>
            <div className="top-item">
              <img src="./img/card.svg" alt="" className="top-item-img" />
              <p className="top-item-text">
                Дешевле такси и собственного автомобиля
              </p>
            </div>
            <div className="top-item">
              <img src="./img/map.svg" alt="" className="top-item-img" />
              <p className="top-item-text">
                Лучшие автомобили в любой точке города
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
