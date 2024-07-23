import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemeBtn.css";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="switch-container">
      <input type="checkbox" id="switch" onChange={toggleTheme} />
      <label htmlFor="switch">
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeBtn;
