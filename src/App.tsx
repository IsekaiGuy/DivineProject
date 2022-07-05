import React from 'react';
import BecomeMaster from "./components/BecomeMaster/BecomeMaster";
import FaqsContainer from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import MainScreen from "./screens/MainScreen/MainScreen";

import Image from './images/BackgroundImage.png';

import './App.scss';

function App() {
    const array = Array.from(Array(100).keys());
      return (
          <main className='App'>
              <div className='App__container'>
                  {array.map((item, index) => {
                      return (<div
                          className="App__circle-container"
                          key={index}
                      >
                          <div className="circle" />
                      </div>)
                  })}
                  <div className="App__container-inner">
                      <MainScreen />
                      <BecomeMaster />
                      <FaqsContainer />
                  </div>
                  <Footer />
              </div>
              <img src={Image} alt="" className='bg'/>
          </main>
      );
}

export default App;
