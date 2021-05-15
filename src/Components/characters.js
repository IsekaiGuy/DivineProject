import bg from "./cardsBG";
import curse from "../images/Curse2.png";
import astrology from "../images/Astrology2.png";
import love from "../images/Love2.png";
import divine from "../images/Divine2.png";
import voodoo from "../images/Smoke.gif";
// import voodoo from "../images/Voodoo.png";

const characters = [
    {
      url: astrology,
      bgUrl: bg.red,
      name: "Astrology",
      description: "Corpus Man",
      id: "CORPUS_MAN"
    },
    {
      url: curse,
      bgUrl: bg.blue,
      name: "Curse",
      description: "Corpus Man",
      id: "CORPUS_MOA"
    },
    {
      url: love,
      bgUrl: bg.green,
      name: "Love",
      description: "Corpus Man",
      id: "INFESTED"
    },
    {
      url: divine,
      bgUrl: bg.brown,
      name: "Divine",
      description: "Corpus Man",
      rarity: "RARE",
      id: "ARCHWING_UNITS"
    },
    {
      url: voodoo,
      bgUrl: bg.black,
      name: "Voodoo",
      description: "Corpus Man",
      id: "CORPUS_WALKER"
    },
    {
      // url: "https://i.ibb.co/92v820W/Corpus-Osprey.png",
      bgUrl: bg.bluw,
      name: "Corpus Osprey",
      description: "Corpus Man",
      id: "CORPUS_OSPREY"
    },
    {
      // url: "https://i.ibb.co/ZVnnhcz/Masked-Grineer.png",
      bgUrl: bg.green,
      name: "Masked Grineer",
      description: "Corpus Man",
      id: "MASKED_GRINNER"
    },
    {
      url: "https://i.ibb.co/MfpHGHH/White-Grineer.png",
      bgUrl: bg.red,
      name: "White Grineer",
      description: "Corpus Man",
      id: "WHITE_GRINEER"
    },
    {
      url: "https://i.ibb.co/SdHzrkY/Armored-Grineer.png",
      bgUrl: bg.brown,
      name: "Armored Grineer",
      description: "Corpus Man",
      id: "ARMORED_GRINEER"
    }
  ];

  export default characters;