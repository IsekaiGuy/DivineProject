import React from 'react';
import BecomeMaster from "./components/BecomeMaster/BecomeMaster";
import FaqsContainer from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import MainScreen from "./screens/MainScreen/MainScreen";
import BackgroundParticles from "./components/BackgroundParticles/BackgroundParticles";
// @ts-ignore
import bemClassName from 'bem-classnames-maker';

import Image from './images/BackgroundImage.png';

import './App.scss';

const App = () => {
    const bem = bemClassName('App')

    return (<main className={bem()}>
        <div className={bem('container')}>
            <div className={bem('inner-container')}>
                <MainScreen />
                <BecomeMaster />
                <FaqsContainer />
            </div>
            <Footer />
            <BackgroundParticles/>
        </div>
        <img
            src={Image}
            alt="background"
            className={bem('background-image')}
        />
    </main>)
}

export default App;
