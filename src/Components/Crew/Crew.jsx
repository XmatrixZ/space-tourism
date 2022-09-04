/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState, useEffect } from "react";
import { Navbar } from "../../Container";
import DouglasHurleyComp from "../../assets/crew/image-douglas-hurley.webp";
import DouglasHurley from "../../assets/crew/image-douglas-hurley.png";
import {CrewContent} from "./CrewContent"
import "./Crew.scss";

const Crew = () => {
  const [position, setPosition] = useState("Commander");

  useEffect(() => {
    console.log(CrewContent[position]);
  }, [position]);

  return (
    <div id="crew">
      <Navbar section="crew" />
      <div className="grid-container grid-container-crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span>Meet your crew
        </h1>
        <div className="dot-indicators app__flex">
          <button
            aria-selected={position === "Commander" ? "true" : "false"}
            onClick={() => setPosition("Commander")}
          >
            <span className="app__sr-only ">The commander</span>
          </button>
          <button
            aria-selected={position === "Specialist" ? "true" : "false"}
            onClick={() => setPosition("Specialist")}
          >
            <span className="app__sr-only ">The mission specialist</span>
          </button>
          <button
            aria-selected={position === "Pilot" ? "true" : "false"}
            onClick={() => setPosition("Pilot")}
          >
            <span className="app__sr-only ">The pilot</span>
          </button>
          <button
            aria-selected={position === "Engineer" ? "true" : "false"}
            onClick={() => setPosition("Engineer")}
          >
            <span className="app__sr-only ">The crew engineer</span>
          </button>
        </div>
        <article className="crew-details flow">
          <header class="flow flow-space-small">
            <h2 class="fs-600 ff-serif uppercase">{position}</h2>
            <p class="fs-700 uppercase ff-serif">
              {CrewContent[position].Name}
            </p>
          </header>
          <p>{CrewContent[position].Content}</p>
        </article>
        <picture>
          <source srcset={CrewContent[position].Image} type="image/webp" />
          <img src={CrewContent[position].AltImage} alt="Douglas Hurley"/>
        </picture>
      </div>
    </div>
  );
};

export default Crew;
