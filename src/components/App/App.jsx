// src/App.jsx
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Top from "../Top/Top";
import Benefits from "../Benefits/Benefits";
import FeedBack from "../FeedBack/FeedBack";
import Rent from "../Rent/Rent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "../Theme-btn/ThemeContext";
import "./App.css";
import "../../utils/Reset.css";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-${theme}`}>
      <Router>
        <Header />
        <Top />
        <Routes>
          <Route path="/rent" element={<Rent />} />
        </Routes>
        <Routes>
          <Route path="/contacts" element={<FeedBack />} />
        </Routes>
        <Routes>
          <Route path="/benefits" element={<Benefits />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
