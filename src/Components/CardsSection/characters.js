import bg from "../CardsSection/cardsBG";
import curse from "../../images/Curse2.png";
import astrology from "../../images/Astrology2.png";
import love from "../../images/Love2.png";
import divine from "../../images/Divine2.png";
import voodoo from "../../images/Smoke.gif";

const characters = [
  {
    url: astrology,
    bgUrl: bg.astrology,
    name: "Astrology",
    description:
      "Masters who read the fate of people by the position of stars and planets",
    id: "ASTROLOGY",
  },
  {
    url: curse,
    bgUrl: bg.curse,
    name: "Curse",
    description:
      "Masters capable of setting curses and corruption to destroy human's future",
    id: "CURSE",
  },
  {
    url: love,
    bgUrl: bg.love,
    name: "Love",
    description: "Masters with the gift to bind people's hearts with love",
    id: "LOVE",
  },
  {
    url: divine,
    bgUrl: bg.divine,
    name: "Divine",
    description: "Masters with the gift of seeing the human's future",
    id: "DIVINE",
  },
  {
    url: voodoo,
    bgUrl: bg.voodoo,
    name: "Voodoo",
    description:
      "Shamans, voodoo masters, masters able to communicate with the spirits of the dead",
    id: "VOODOO",
  },
  // {
  //   // url: "https://i.ibb.co/92v820W/Corpus-Osprey.png",
  //   bgUrl: bg.bluw,
  //   name: "Corpus Osprey",
  //   description: "Corpus Man",
  //   id: "CORPUS_OSPREY",
  // },
  // {
  //   // url: "https://i.ibb.co/ZVnnhcz/Masked-Grineer.png",
  //   bgUrl: bg.green,
  //   name: "Masked Grineer",
  //   description: "Corpus Man",
  //   id: "MASKED_GRINNER",
  // },
  // {
  //   url: "https://i.ibb.co/MfpHGHH/White-Grineer.png",
  //   bgUrl: bg.red,
  //   name: "White Grineer",
  //   description: "Corpus Man",
  //   id: "WHITE_GRINEER",
  // },
  // {
  //   url: "https://i.ibb.co/SdHzrkY/Armored-Grineer.png",
  //   bgUrl: bg.brown,
  //   name: "Armored Grineer",
  //   description: "Corpus Man",
  //   id: "ARMORED_GRINEER",
  // },
];

export default characters;
