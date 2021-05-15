import React from "react";
import Header from "./Header";
import Card from "./Card";
import {FillBtn, RaiseBtn} from "./Buttons";
import BecomeMaster from "./BecomeMaster";

const App = () => {
  return (
    <>
      <section className="section__cards">
        <Header />
        <div id="app" className="container">
          <Card character="CORPUS_MAN" />
          <Card character="ARCHWING_UNITS" />
          <Card character="INFESTED" />
          <Card character="CORPUS_MOA" />
          <Card character="CORPUS_WALKER" />
          {/* <Card character="CORPUS_OSPREY" />
          <Card character="MASKED_GRINNER" /> */}
        </div>
        <div className="btns">
          {/* <SignUpBtn />
      <MoveToMasterSectionBtn /> */}
          <FillBtn />
          <RaiseBtn />
        </div>
      </section>
      <section className="section__become-master">
        <BecomeMaster />
      </section>
      <section className="section__faq">
      </section>
    </>
  );
}

export default App;
