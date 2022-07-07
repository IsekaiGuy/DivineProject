import React from "react";
import Nav from '../../components/Nav/Nav';
import Card from "../../components/Card/Card";
import Buttons from "../../components/Buttons/Buttons";
// @ts-ignore
import bemClassName from 'bem-classnames-maker';

import './MainScreen.scss';

const MainScreen = () => {
    const bem = bemClassName('MainScreen')
    return (
        <section className={bem()}>
            <Nav />
            <div className={bem('card-list')}>
                <Card character="ASTROLOGY" />
                <Card character="DIVINE" />
                <Card character="LOVE" />
                <Card character="CURSE" />
                <Card character="VOODOO" />
            </div>
            <Buttons
                className={bem('buttons')}
                fillBtnText="Sign up"
                raiseBtnText="Become a Master"
            />
        </section>
    )
}

export default MainScreen;
