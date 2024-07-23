import "./FeedBack.css";
import "../../global/global.css";
import photo from "../../assets/car-img/feddback-car.png";
import React from "react";
const FeedBack = () => {
  return (
    <div className="feetback">
      <div className="conteiner">
        <div className="feetback-inher">
          <img src={photo} alt="img" className="feedback-img" />
          <form action="" className="feedback-form">
            <h3 className="feedback-title">Остались вопросы?</h3>
            <p className="feedback-text">
              Мы перезвоним Вам и проконсультируем по любому вопросу
            </p>
            <div>
              <input
                type="text"
                className="feedback-input"
                placeholder="Имя"
              ></input>
            </div>
            <div>
              <input
                type="tel"
                className="feedback-input"
                placeholder="Телефон"
              />
            </div>
            <button className="feedback-btn" type="submit">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
