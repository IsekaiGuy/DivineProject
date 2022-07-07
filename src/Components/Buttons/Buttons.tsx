import React from "react";

import './Buttons.scss';

export interface IButton {
    value: string
}

export const FillBtn = ({value}: IButton) => (
  <button className="fill">
      {value}
  </button>
);

export const RaiseBtn = ({value}: IButton) => (
  <button className="raise">
      {value}
  </button>
);

interface IButtons {
    className?: string,
    fillBtnText: string,
    raiseBtnText: string
}

const Buttons = (props: IButtons) => (
    <div className={`buttons ${props.className}`}>
        <FillBtn value={props.fillBtnText}/>
        <RaiseBtn value={props.raiseBtnText}/>
    </div>
)
export default Buttons;
