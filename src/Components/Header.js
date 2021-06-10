import React from "react";
import logo from "../images/Back-logo-5-4-6.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo__container">
        <a href="./">
          <img src={logo} alt="logo" className="header__logo" />
        </a>
      </div>

      <div className="header__title__container">
        <h1 className="header__title">Divination Market</h1>
      </div>

      <div className="header__logo__container">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
    </header>
  );
};

export default Header;
