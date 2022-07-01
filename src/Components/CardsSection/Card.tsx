import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import characters from "./characters";
import './Card.scss';

interface ICard {
  character: string
}

const Card = (props: ICard) => {
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
    const rX = mousePX() * 30;
    const rY = mousePY() * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
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

  let mouseEnterHandler = () => {};

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

  let mouseLeaveHandler = () => {};

  const {transform: charStyle} = characterStyle();
  const {transform: bgStyle} = backgroundStyle();

  return (
      <div
          className="card-wrapper"
          ref={ref}
          onMouseEnter={mouseEnterHandler}
          onMouseMove={mouseMoveHandler}
          onMouseLeave={mouseLeaveHandler}
      >
        <div
            className="card"
            style={cardStyle()}
        >
          <div className="card-content">
            <div
                className="parallax-bg"
                style={{
                  transform: bgStyle,
                  backgroundImage: `url(${character && character.bgUrl})`
                }}
            />
            <div
                className="character-bg parallax-bg"
                style={{
                  transform: charStyle,
                  backgroundImage: `url(${character && character.url})`
                }}
            />

            <div className="card-detail">
              <h4>{character && character.name}</h4>
              <p>{character && character.description}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default memo(Card);
