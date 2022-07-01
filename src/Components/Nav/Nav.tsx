import React from "react";
import image from '../../images/Logo.png';

import './Nav.scss';

const Nav = () => {
    return (<nav className='navbar'>
        <img src={image} alt="logo"/>
        <p>Sign In</p>
    </nav>)
}

export default Nav;
