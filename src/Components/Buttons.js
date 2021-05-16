import React from "react";
import "./Buttons.scss";

// export const MoveToMasterSectionBtn = () => (
//     <button className="custom-btn btn-11">
//         Become a Master
//         <div className="dot">
//         </div>
//     </button>)

// const SignUpBtn = () => (<button className="custom-btn btn-1">Sign up</button>)

export const FillBtn = () => (<button className="fill">Sign up</button>);
export const RaiseBtn = () => (<button className="raise">Become a Master</button>);

const Buttons = () => (<div className="btns">
          <FillBtn />
          <RaiseBtn />
        </div>)

export default Buttons;