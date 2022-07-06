import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import characters from "./characters";
// @ts-ignore
import bemClassName from 'bem-classnames-maker';

import './Card.scss';

interface ICard {
  character: string
}

const Card = (props: ICard) => {
  const bem = bemClassName('Card')
  const [state, setState] = useState({
    width: 0,
    height: 0,
    mouseY: 0,
    mouseX: 0,
  })
  const character = characters.find((char) => char.id === props.character);
  const ref = useRef(document.createElement("div"));

  useEffect(() => {
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;
    setState({ ...state, height, width })
  }, []);

  let mousePX = useCallback(() => {
    const { mouseX, width } = state;
    return mouseX / width;
  }, [state]);

  let mousePY = useCallback(() => {
    const { mouseY, height } = state;
    return mouseY / height;
  }, [state]);

  const cardStyle = useCallback(() => {
    console.log(mousePX())
    const rX = mousePX() * 30;
    const rY = mousePY() * -30;
    let timer = rX !== 0 ? 0 : 3;

    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      transition: `all ${timer}s`
    };
  }, [mousePX, mousePY]);

  const characterStyle = useCallback(() => {
    const tX = mousePX() * -60;
    const tY = mousePY() * -60;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    };
  }, [character, mousePX, mousePY]);

  const backgroundStyle = useCallback(() => {
    const tX = mousePX() * -30;
    const tY = mousePY() * -30;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    };
  }, [character, mousePX, mousePY])

  let mouseMoveHandler = useCallback((e: any) => {
    const { width, height } = state;
    const mouseX = e.pageX - ref.current.offsetLeft - width / 2;
    const mouseY = e.pageY - ref.current.offsetTop - height / 2;

    setState({
      ...state,
      mouseX,
      mouseY,
    });
  }, [state])

  const handleMouseOut = useCallback(() => {
    setState({
      ...state,
      mouseX: 0,
      mouseY: 0
    })
  }, [state]);

  const {transform: charStyle} = characterStyle();
  const {transform: bgStyle} = backgroundStyle();

  return (
        <div
            className={bem()}
            ref={ref}
            onMouseMove={(e) => mouseMoveHandler(e)}
            onMouseOut={handleMouseOut}
        >
          <div
              className={bem("card")}
              style={cardStyle()}
          >
            <div className={bem('content')}>
              <div
                  className={bem("parallax-bg")}
                  style={{
                    transform: bgStyle,
                    backgroundImage: `url(${character && character.bgUrl})`
                  }}
              />
              <div
                  className={bem("parallax-bg", ['inner-image'])}
                  style={{
                    transform: charStyle,
                    backgroundImage: `url(${character && character.url})`
                  }}
              />

              <div className={bem("details")}>
                <h4>{character && character.name}</h4>
                <p>{character && character.description}</p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default memo(Card);
