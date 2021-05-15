import React, {Component} from "react";
import characters from "./characters";
import "./Card.scss";

export default class Card extends Component {
    constructor(props) {
      super(props);
      this.character = characters.find((c) => c.id === props.character);
    }
  
    state = {
      width: 0,
      height: 0,
      mouseY: 0,
      mouseX: 0
    };
  
    cardEl = null;
  
    componentDidMount() {
      const height = this.cardEl.clientHeight;
      const width = this.cardEl.clientWidth;
      this.setState({ height, width });
    }
  
    get mousePX() {
      const { mouseX, width } = this.state;
      return mouseX / width;
    }
  
    get mousePY() {
      const { mouseY, height } = this.state;
      return mouseY / height;
    }
  
    get cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    }
  
    get characterStyle() {
      const tX = this.mousePX * -60;
      const tY = this.mousePY * -60;
      return {
        backgroundImage: `url(${this.character.url})`,
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };
    }
  
    get backgroundStyle() {
      const tX = this.mousePX * -30;
      const tY = this.mousePY * -30;
      return {
        backgroundImage: `url(${this.character.bgUrl})`,
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };
    }
  
    mouseEnterHandler = () => {};
  
    mouseMoveHandler = (e) => {
      const { width, height } = this.state;
      const mouseX = e.pageX - this.cardEl.offsetLeft - width / 2;
      const mouseY = e.pageY - this.cardEl.offsetTop - height / 2;
  
      this.setState({
        mouseX,
        mouseY
      });
    };
  
    mouseLeaveHandler = () => {};
  
    render() {
      const character = this.character;

      return (
        <div
          className="card-wrapper"
          ref={(cardEl) => (this.cardEl = cardEl)}
          onMouseEnter={this.mouseEnterHandler}
          onMouseMove={this.mouseMoveHandler}
          onMouseLeave={this.mouseLeaveHandler}
        >
          <div className="card" style={this.cardStyle}>
            <div className="card-content">
              <div className="pattern-bg" />
              <div className="parallax-bg" style={this.backgroundStyle} />
              <div
                className="character-bg parallax-bg"
                style={this.characterStyle}
              />
  
              <div className="card-detail">
                <h3>{character.name}</h3>
                <p>{character.description}</p>
                <p>{character.type}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }