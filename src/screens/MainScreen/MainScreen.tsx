import React from "react";
import Nav from '../../components/Nav/Nav';
import Card from "../../components/CardsSection/Card";
import Buttons from "../../components/Buttons/Buttons";
// @ts-ignore
import bemClassName from 'bem-classnames-maker';

import './MainScreen.scss';

const MainScreen = () => {
    const bem = bemClassName('MainScreen')
    return (
        <section>
            <Nav />
            <div className={bem('card-list')}>
                <Card character="ASTROLOGY" />
                <Card character="DIVINE" />
                <Card character="LOVE" />
                <Card character="CURSE" />
                <Card character="VOODOO" />
            </div>
            <Buttons value1="Sign up" value2="Become a Master" />
        </section>
    )
}

export default MainScreen;
