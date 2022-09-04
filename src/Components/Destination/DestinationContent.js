
import MoonImgComp from "../../assets/destination/image-moon.webp";
import MoonImg from "../../assets/destination/image-moon.png";
import MarsImgComp from "../../assets/destination/image-mars.webp";
import MarsImg from "../../assets/destination/image-mars.png";
import EuropaImgComp from "../../assets/destination/image-europa.webp";
import EuropaImg from "../../assets/destination/image-europa.png";
import TitanImgComp from "../../assets/destination/image-titan.webp";
import TitanImg from "../../assets/destination/image-titan.png";

export const DestinationContent = {
  Moon: {
    Content:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    Distance: "384,400 km",
    Time: "3 days",
    Image: MoonImgComp,
    AltImage: MoonImg,
  },
  Mars: {
    Content:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    Distance: "225 mil. km",
    Time: "9 months",
    Image: MarsImgComp,
    AltImage: MarsImg,
  },
  Europa: {
    Content:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    Distance: "628 mil. km",
    Time: "3 years",
    Image: EuropaImgComp,
    AltImage: EuropaImg,
  },
  Titan: {
    Content:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    Distance: "1.6 bil. km",
    Time: "7 years",
    Image: TitanImgComp,
    AltImage: TitanImg,
  },
};
