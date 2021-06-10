import React from "react";
import SectionCards from "./components/CardsSection/SectionCards";
import BecomeMaster from "./components/BecomeMaster";
import FaqsContainer from "./components/Faq";
import Footer from "./components/Footer";
//Style
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <SectionCards />
      {/* <TopMasters /> */}
      <BecomeMaster />
      <FaqsContainer />
      <Footer />
    </>
  );
};

export default App;
