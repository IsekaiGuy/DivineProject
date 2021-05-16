import React, { useEffect, useRef } from 'react';
import Parallax from "parallax-js";
import "./ParallaxBG.scss";


  const ParallaxBG = () => {
    const list = useRef(null);

    useEffect(() => {
      const parallax = new Parallax(list.current);
      parallax.enable();
    })

      return (
        <ul ref={list}>
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

export default ParallaxBG;