import React from "react";
import Buttons from "./Buttons";
import "./BecomeMaster.scss";

const Heading2 = () => {
    return (<div className="heading2__container">
        <h2 className="heading2">Become a Soul Master</h2>
    </div>)
};

const textArray = ["Example1", "Example3", "Example3", "Example4"];

const BecomeMaster = () => {
    return (<>
            <div className="master__section">
                <Heading2 />
                {textArray.map((text, index) => (<p className={`master__section__text master__section__text-block${index}`} key={index}>{text}</p>))}
                <Buttons />
            </div>
            </>)
}

export default BecomeMaster;
