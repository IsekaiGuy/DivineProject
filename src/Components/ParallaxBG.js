import React, {Component} from 'react';
import Parallax from "parallax-js";
import "./ParallaxBG.scss";

export default class ParallaxComponent extends Component {
    componentDidMount() {
      this.parallax = new Parallax(this.scene);
    }
    componentWillUnmount() {
      this.parallax.disable();
    }
    render() {
      return (
        <ul ref={(el) => (this.scene = el)}>
          <li className="layer" id="specks" data-depth="0.1"></li>
          <li className="layer" id="layer-1" data-depth="0.15">
            <div className="img" id="img-1"></div>
          </li>
          <li className="layer" id="layer-2" data-depth="0.25">
            <div className="img" id="img-2"></div>
          </li>
          <li className="layer" id="layer-3" data-depth="0.45">
            <div className="img" id="img-3"></div>
          </li>
        </ul>
      );
    }
  }

// const ParallaxComponent = () => {
// const speed = 400;
// // const parallax = new Parallax("#scene");

// for (let i = 1; i < 6; i++) {
//   twinkleLoop(i);
// };

// const Specs = (id) => {
//   const element =
//   return ()
// }

// function twinkle(id, duration) {
//   let top = (Math.floor(Math.random() * 85) + 0) + '%';
//   let left = (Math.floor(Math.random() * 85) + 0) + '%';
//   document.querySelector('#speck' + id).remove();
//   document.querySelector('#specks').insertAdjacentHTML("beforeend","<div class='speck' id='speck" + id + "'></div>")
//   document.querySelector('#speck' + id).style.cssText ({
//     'top': top,
//     'left': left,
//     'animation-duration': duration + 's',
//     'animation-timing-function': 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
//     'animation-name': 'twinkle',
//   })
// }


//   function twinkleLoop(i) {
//     let duration = ((Math.random() * 5) + 3);

//     duration = duration - ((495 - speed) / 100);
//     twinkle(i, duration);

//     setTimeout(function () {
//       twinkleLoop(i)
//     }, duration * 1000);
//   }

//   return (<ul id="scene" data-friction-x="0.03"
//     data-friction-y="0.05">
//     <li class="layer" id="specks" data-depth="0.1"></li>
//     <li class="layer" id="layer-1" data-depth="0.15">
//       <div class="img" id="img-1"></div>
//     </li>
//     <li class="layer" id="layer-2" data-depth="0.25">
//       <div class="img" id="img-2"></div>
//     </li>
//     <li class="layer" id="layer-3" data-depth="0.45">
//       <div class="img" id="img-3"></div>
//     </li>
//   </ul>)
// }

// export default ParallaxComponent;