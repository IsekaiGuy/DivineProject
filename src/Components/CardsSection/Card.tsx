import React, {memo, useEffect, useRef, useState} from "react";
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

  let mousePX = () => {
    const { mouseX, width } = state;
    return mouseX / width;
  }

  let mousePY = () => {
    const { mouseY, height } = state;
    return mouseY / height;
  }

  const cardStyle = () => {
    const rX = mousePX() * 30;
    const rY = mousePY() * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
    };
  }

  if(!character) {
    return <div/>;
  }

  const characterStyle = () => {
    const tX = mousePX() * -60;
    const tY = mousePY() * -60;
    return {
      backgroundImage: `url(${character.url})`,
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    };
  }

  const backgroundStyle = () => {
    const tX = mousePX() * -30;
    const tY = mousePY() * -30;
    return {
      backgroundImage: `url(${character.bgUrl})`,
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    };
  }

  let mouseEnterHandler = () => {};

  let mouseMoveHandler = (e: any) => {
    const { width, height } = state;
    const mouseX = e.pageX - ref.current.offsetLeft - width / 2;
    const mouseY = e.pageY - ref.current.offsetTop - height / 2;

    setState({
      ...state,
      mouseX,
      mouseY,
    });
  };

  let mouseLeaveHandler = () => {};

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
            <div className="pattern-bg" />
            <div
                className="parallax-bg"
                style={backgroundStyle()}
            />
            <div
                className="character-bg parallax-bg"
                style={characterStyle()}
            />

            <div className="card-detail">
              <h3>{character.name}</h3>
              <p>{character.description}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default memo(Card);
