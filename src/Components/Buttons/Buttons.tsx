import React from "react";
import './Buttons.scss';

export const FillBtn = (props: any) => (
  <button className="fill">{props.value1}</button>
);
export const RaiseBtn = (props: any) => (
  <button className="raise">{props.value2}</button>
);

const Buttons = (props: any) => (
  <div className="btns">
    <FillBtn value1={props.value1} />
    <RaiseBtn value2={props.value2} />
  </div>
);

export default Buttons;
