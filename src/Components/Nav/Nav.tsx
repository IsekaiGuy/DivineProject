import React from "react";
import image from '../../images/Logo.png';
// @ts-ignore
import bemClassName from 'bem-classnames-maker';

import './Nav.scss';

const Nav = () => {
    const bem = bemClassName('Nav')
    return (<nav className={bem()}>
        <img src={image} alt="logo"/>
        <p>Sign In</p>
    </nav>)
}

export default Nav;
