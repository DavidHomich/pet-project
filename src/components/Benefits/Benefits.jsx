import "./Benefits.css";
import "../../global/global.css";
import photo from "../../assets/car-img/benefits-car.png";
import React, { useState } from "react";
import ModuleWindow from "../ModuleWindow/Module";

const Benefits = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="benefits">
      <div className="conteiner">
        <h3 className="benefits-title">Преимущества</h3>
        <div className="benefits-items">
          <ul className="benefits-list">
            <li className="benefits-list-item">мойка авто каждую неделю</li>
            <li className="benefits-list-item">премиум автомобили</li>
            <li className="benefits-list-item">мощный двигатель</li>
            <li className="benefits-list-item">поддержка24/7</li>
            <li className="benefits-list-item">бензин за наш счет</li>
            <li className="benefits-list-item">парковка по всему городу</li>
            <li className="benefits-list-item">каждый месяц ТО автомобиля</li>
          </ul>
          <img className="benefits-img" src={photo} alt="images of car" />
          <div className="benefits-content">
            <p className="benefits-text">
              Вы можете выбрать один из 300 наших автомобилей, насладиться
              сервисом, повысить уровень жизни, не покупая дорогой автомобиль,
              успевать везде и каждый день ездить на новом премиум автомобиле.
            </p>
            <p className="benefits-text">
              Посмотрите видео презентацию нашего сервиса и выберите автомобиль
              уже сейчас!
            </p>
            <button
              data-fancybox
              href="#"
              className="video-popup"
              onClick={() => {
                setModalActive(true);
              }}
            >
              ПOСМОТРЕТЬ ПРЕЗЕНТАЦИЮ
            </button>
            <ModuleWindow
              active={modalActive}
              setActive={setModalActive}
              videoSrc="https://youtube.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
