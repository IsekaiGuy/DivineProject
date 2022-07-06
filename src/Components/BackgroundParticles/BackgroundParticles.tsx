import React from "react";
// @ts-ignore
import bemClassName from 'bem-classnames-maker';

import './BackgroundParticles.scss';

const BackgroundParticles = () => {
    const array = Array.from(Array(100).keys());
    const bem = bemClassName('BackgroundParticles');

    return (<>
        {array.map((item, index) => {
            return (<div
                className={bem()}
                key={index}
            >
                <div className={bem('circle')} />
            </div>)
        })}
    </>)
}

export default BackgroundParticles;
