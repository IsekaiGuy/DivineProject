import bg from "./cardsBG";
import curse from "../images/Curse2.png";
import astrology from "../images/Astrology2.png";
import love from "../images/Love2.png";
import divine from "../images/Divine2.png";
import voodoo from "../images/Smoke.gif";

const characters = [
    {
      url: astrology,
      bgUrl: bg.astrology,
      name: "Astrology",
      description: "Astrology",
      id: "ASTROLOGY"
    },
    {
      url: curse,
      bgUrl: bg.curse,
      name: "Curse",
      description: "Curse",
      id: "CURSE"
    },
    {
      url: love,
      bgUrl: bg.love,
      name: "Love",
      description: "Love",
      id: "LOVE"
    },
    {
      url: divine,
      bgUrl: bg.divine,
      name: "Divine",
      description: "Divine",
      id: "DIVINE"
    },
    {
      url: voodoo,
      bgUrl: bg.voodoo,
      name: "Voodoo",
      description: "Voodoo",
      id: "VOODOO"
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