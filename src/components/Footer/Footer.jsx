import "./Footer.css";
import "../../global/global.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="conteiner">
          <div className="footer-top">
            <a href="#" className="application-btn">
              {" "}
              Скачать приложение
            </a>
            <nav className="menu">
              <ul className="menu-list">
                <li className="menu-item">
                  <NavLink to="/benefits" className="menu-list-link">
                    переваги
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/rent" className="menu-list-link">
                    умови
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/contacts" className="menu-list-link">
                    контакти
                  </NavLink>
                </li>
              </ul>
            </nav>
            <a href="tel:+38099999090" className="phone">
              +38 (099)999 90 90
            </a>
          </div>
          <ul className="foote-social">
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <img src="./img/facebook.svg" alt="" />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <img src="./img/Vector.svg" alt="" />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <img src="./img/youtube.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
