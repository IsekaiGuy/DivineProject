import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="container">
      <Card character="ASTROLOGY" />
      <Card character="DIVINE" />
      <Card character="LOVE" />
      <Card character="CURSE" />
      <Card character="VOODOO" />
    </div>
  );
};

export default CardList;
