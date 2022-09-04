/* eslint-disable jsx-a11y/role-supports-aria-props */
import React,{useState, useEffect} from "react";
import { Navbar } from "../../Container";
import { DestinationContent } from "./DestinationContent";
import "./Destination.scss";

const Destination = () => {
  const [tabs,setTabs] = useState("Moon");

  useEffect(() => {
    console.log(tabs);
    console.log(DestinationContent[tabs]);
  }, [tabs])
  
  return (
    <div id="destination">
      <Navbar section="destination" />
      <div className="grid-container grid-container-destination flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick Your Destination
        </h1>
        <picture>
          <source
            srcset={DestinationContent[tabs].AltImage}
            type="image/webp"
          />
          <img src={DestinationContent[tabs].Image} alt={`The ${tabs}`} />
        </picture>
        <div className="tab-list underline-indicators app__flex">
          <button
            aria-selected={tabs === "Moon" ? "true" : "false"}
            className="uppercase ff-sans-cond text-blue letter-spacing-2"
            onClick={() => setTabs("Moon")}
          >
            Moon
          </button>
          <button
            aria-selected={tabs === "Mars" ? "true" : "false"}
            className="uppercase ff-sans-cond text-blue letter-spacing-2"
            onClick={() => setTabs("Mars")}
          >
            Mars
          </button>
          <button
            aria-selected={tabs === "Europa" ? "true" : "false"}
            className="uppercase ff-sans-cond text-blue letter-spacing-2"
            onClick={() => setTabs("Europa")}
          >
            Europa
          </button>
          <button
            aria-selected={tabs === "Titan" ? "true" : "false"}
            className="uppercase ff-sans-cond text-blue letter-spacing-2"
            onClick={() => setTabs("Titan")}
          >
            Titan
          </button>
        </div>
        <article className="destination-info flow">
          <h2 className="fs-800 uppercase ff-serif">{tabs} </h2>
          <p>{DestinationContent[tabs].Content}</p>
          <div class="app__flex destination-meta">
            <div>
              <h3 className="text-blue fs-200 uppercase"> Avg. distance</h3>
              <p class="ff-serif uppercase">
                {DestinationContent[tabs].Distance}
              </p>
            </div>
            <div>
              <h3 class="text-blue fs-200 uppercase">Est. travel time </h3>
              <p class="ff-serif uppercase">{DestinationContent[tabs].Time}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Destination;
