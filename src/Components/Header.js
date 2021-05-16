import React from "react";
import logo from "../images/Background.png";
import "./Header.scss";

const Header = () => {
    return (
    <header className="header">
        <div className="header__logo-container">
            <a href="./">
                <img src={logo} alt="logo" className="header__logo" />
            </a>
        </div>

        <div className="heading1__container">
            <h1 className="heading1">Divination Market</h1>
        </div>

        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
        </div>
    </header>)
}

export default Header;