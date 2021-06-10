import React from "react";
import Header from "../Header";
import Cards from "../CardsSection/Cards";
import Buttons from "../Buttons";

const SectionCards = () => {
  return (
    <section className="section__cards">
      <Header />
      <Cards />
      <Buttons value1="Sign up" value2="Become a Master" />
    </section>
  );
};

export default SectionCards;
