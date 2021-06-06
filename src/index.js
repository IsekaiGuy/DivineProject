import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import ParallaxBG from "./Components/ParallaxBG";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ParallaxBG />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

///VideoBackground
//  <div class="video-background">
//       <div class="video-foreground">
//         <iframe title="video" allow="autoplay" muted={true} autoPlay={true} src="http://www.youtube.com/embed/G2CHyuF74R0?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
//       </div>
//     </div>

//   import video from "./New.mp4";
//   <video className='VideoTag' autoPlay loop muted style={{zIndex: 0, position: "fixed", width: "1080p"}}>
//   <source src={video} type='video/mp4'/>
// </video>
