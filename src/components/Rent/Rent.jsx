import "./Rent.css";
import "../../global/global.css";
import React from "react";

const Rent = () => {
  return (
    <div className="rent">
      <div className="conteiner">
        <div className="rent-inher">
          <div className="rent-content">
            <h3 className="rent-title">Умови орендu авто</h3>
            <p className="rent-text">
              Мы ценим каждого клиента и предоставляем качественный сервис
              каршеринга в Киеве.
            </p>
            <p className="rent-text">
              Именно для того, что бы Вам было приятно и безопасно пользоваться
              нашим сервисом на постоянной основе, мы выделили несколько условий
              для того, чтобы взять машину в аренду
            </p>
            <a href="#" className="application-btn">
              Скачать приложение
            </a>
          </div>
          <div className="rent-item">
            <div className="rent-item-num">01</div>
            <p className="rent-item-title">
              Опыт вождения <br />
              от 2х лет
            </p>
            <p className="rent-item-text">
              Для того, чтобы арендовать автомобиль, Вам необходимо
              зарегестрировать свои прав в нашем мобильном приложении
            </p>
          </div>
          <div className="rent-item">
            <div className="rent-item-num">02</div>
            <p className="rent-item-title">
              Только <br />
              по Киеву
            </p>
            <p className="rent-item-text">
              Наши автомобили работают только в пределах города Киев. За город
              на наших автомобилях, к сожалению, выезжать нельзя.
            </p>
          </div>
          <div className="rent-item">
            <div className="rent-item-num">03</div>
            <p className="rent-item-title">
              Мобильный <br />
              телефон и интернет
            </p>
            <p className="rent-item-text">
              Для использования нашего сервиса Вам необходим мобильный телефон и
              интернет. Бронирование, оплата и вся отчетность происходит онлайн
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
