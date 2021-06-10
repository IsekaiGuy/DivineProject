import React from "react";

export const FillBtn = (props) => (
  <button className="fill">{props.value1}</button>
);
export const RaiseBtn = (props) => (
  <button className="raise">{props.value2}</button>
);

const Buttons = (props) => (
  <div className="btns">
    <FillBtn value1={props.value1} />
    <RaiseBtn value2={props.value2} />
  </div>
);

export default Buttons;
