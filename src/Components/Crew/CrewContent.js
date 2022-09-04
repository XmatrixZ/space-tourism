/* eslint-disable no-unused-vars */
import CommanderImgComp from "../../assets/crew/image-douglas-hurley.webp";
import CommanderImg from "../../assets/crew/image-douglas-hurley.png";

import EngineerImgComp from "../../assets/crew/image-anousheh-ansari.webp";
import EngineerImg from "../../assets/crew/image-anousheh-ansari.png";

import PilotImgComp from "../../assets/crew/image-victor-glover.webp";
import PilotImg from "../../assets/crew/image-victor-glover.png";

import SpecialistImgComp from "../../assets/crew/image-mark-shuttleworth.webp";
import SpecialistImg from "../../assets/crew/image-mark-shuttleworth.png";

export const CrewContent = {
  Commander: {
    Name: "Douglas Hurley",
    Content:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    AltImage: CommanderImg,
    Image: CommanderImgComp,
  },
  Engineer: {
    Name: "Anousheh Ansari",
    Content:
      " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    AltImage: EngineerImg,
    Image: EngineerImgComp,
  },
  Pilot: {
    Name: "Victor Glover",
    Content:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    AltImage: PilotImg,
    Image: PilotImgComp,
  },
  Specialist: {
    Name: "Mark Shuttleworth",
    Content:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    AltImage: SpecialistImg,
    Image: SpecialistImgComp,
  },
};