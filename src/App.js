import React from "react";
import SectionCards from "./components/CardsSection/SectionCards";
import BecomeMaster from "./components/BecomeMaster";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
//Style
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <SectionCards />
      {/* <TopMasters /> */}
      <BecomeMaster />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
