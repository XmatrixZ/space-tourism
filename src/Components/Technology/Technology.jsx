/* eslint-disable jsx-a11y/role-supports-aria-props */
import React,{ useState, useEffect} from "react";
import { Navbar } from "../../Container";
import {TechnologyContent} from "./TechnologyContent"
import "./Technology.scss";

const Technology = () => {
    const [tabs, setTabs] = useState(1);

    useEffect(() => {
      console.log(tabs);
      console.log(TechnologyContent[tabs]);
    }, [tabs]);

  return (
    <div id="technology">
      <Navbar section="technology" />
      <div class="grid-container grid-container-technology flow">
        <article
          class="technology-info flow"
          id="launch-tab"
          role="tabpanel"
          tabindex="0"
        >
          <header class="flow flow-space-small">
            <h2 class="fs-600 ff-serif uppercase">The terminology...</h2>
            <p class="fs-700 uppercase ff-serif">
              {TechnologyContent[tabs].title}
            </p>
          </header>
          <p>{TechnologyContent[tabs].content}</p>
        </article>
        <h1 class="numbered-title">
          <span aria-hidden="true">01</span> Pick your technology
        </h1>
        <div class="tab-list number-indicators app__flex">
          <button
            aria-selected={tabs === 1 ? "true" : "false"}
            class="uppercase ff-sans-cond text-accent letter-spacing-2"
            onClick={() => setTabs(1)}
          >
            1
          </button>
          <button
            aria-selected={tabs === 2 ? "true" : "false"}
            class="uppercase ff-sans-cond text-accent letter-spacing-2"
            onClick={() => setTabs(2)}
          >
            2
          </button>
          <button
            aria-selected={tabs === 3 ? "true" : "false"}
            class="uppercase ff-sans-cond text-accent letter-spacing-2"
            onClick={() => setTabs(3)}
          >
            3
          </button>
        </div>
        <picture>
          <source
            srcset={TechnologyContent[tabs].portrait}
            media="(min-width: 45em)"
          />
          <img src={TechnologyContent[tabs].landscape} />
        </picture>
      </div>
    </div>
  );
};

export default Technology;
