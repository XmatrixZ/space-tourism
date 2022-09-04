import React from "react";
import { Navbar } from "../../Container";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Navbar section="home" />
      <div className="grid-container grid-container-home">
        <div>
          <h1 className="ff-sans-cond fs-500 text-blue uppercase letter-spacing-1">
            So, you want to travel to
            <span className="text-white fs-900 ff-serif app__d-block">
              Space
            </span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a
            href="/destination"
            className="large-button uppercase ff-serif text-dark bg-white"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
