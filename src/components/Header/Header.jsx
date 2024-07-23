import "./Header.css";
import "../../global/global.css";
import photo from "../../assets/header/Group.svg";
import React from "react";
import ThemeBtn from "../Theme-btn/ThemeBtn";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="conteiner">
          <div className="header-inher">
            <NavLink to="/">
              <a href="#" className="logo">
                <img src={photo} alt="logo of company" className="logolink" />
              </a>
            </NavLink>
            <nav className="menu">
              <button className="menu-btn"></button>
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
                <ThemeBtn />
              </ul>
            </nav>
            <a href="tel:+38099999090" className="phone">
              +38 (099)999 90 90
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
