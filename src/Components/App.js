import React from "react";
import Header from "./Header";
import Card from "./Card";
import Buttons from "./Buttons";
import BecomeMaster from "./BecomeMaster";
import Faq from "./Faq";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <section className="section__cards">
        <Header />
        <div id="app" className="container">
          <Card character="ASTROLOGY" />
          <Card character="DIVINE" />
          <Card character="LOVE" />
          <Card character="CURSE" />
          <Card character="VOODOO" />
        </div>
        <Buttons />
      </section>

      <section className="section__become-master">
        <BecomeMaster />
      </section>
      
      <section className="section__faq">
        <Faq />
      </section>
      <Footer />
    </>
  );
}

export default App;
