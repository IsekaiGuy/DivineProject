import curse from "../../images/Curse2.png";
import astrology from "../../images/Astrology2.png";
import love from "../../images/Love2.png";
import divine from "../../images/Divine2.png";
import voodoo from "../../images/Smoke.gif";

//Backgrounds
import curseBg from "../../images/Curse1.png";
import astrologyBg from "../../images/Astrology1.png";
import loveBg from "../../images/Love1.png";
import divineBg from "../../images/Divine1.png";
import voodooBg from "../../images/Voodoo.png";

const bg = {
  love: loveBg,
  astrology: astrologyBg,
  divine: divineBg,
  curse: curseBg,
  voodoo: voodooBg,
};

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
    description:
      "Masters with the gift which allows them to bind people's hearts with love",
    id: "LOVE",
  },
  {
    url: divine,
    bgUrl: bg.divine,
    name: "Divination",
    description:
      "Masters with the gift which allows them to see into the human's future",
    id: "DIVINE",
  },
  {
    url: voodoo,
    bgUrl: bg.voodoo,
    name: "Voodoo",
    description:
      "Shamans, Voodoo and Masters able to communicate with the spirits of the dead",
    id: "VOODOO",
  },
];

export default characters;
