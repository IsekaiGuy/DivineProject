import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import reportWebVitals from './reportWebVitals';
import ParallaxComponent from "./Components/ParallaxBG";
import "./main.scss";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ParallaxComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

///VideoBackground
{/* <div class="video-background">
      <div class="video-foreground">
        <iframe title="video" allow="autoplay" muted={true} autoPlay={true} src="http://www.youtube.com/embed/G2CHyuF74R0?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
      </div>
    </div> */}