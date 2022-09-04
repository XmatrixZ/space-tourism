import React, { useState, useEffect } from "react";

import logo from "../../assets/shared/logo.svg";
import "./Navbar.css";

const Navbar = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const active_Menu = "primary-navigation underline-indicators app__flex";
  const handleClickButton = () => {
    setMenuToggle(!menuToggle);
  };
  useEffect(() => {
    console.log(props.section)
    console.log(menuToggle);
  }, [menuToggle,props.section]);

  return (
    <header className=" primary-header app__flex">
      <div>
        <img src={logo} alt="Space Tourism Logo" className="logo" />
      </div>
      <nav>
        <ul
          className={
            menuToggle ? active_Menu + " nav__mobile-transform" : active_Menu
          }
        >
          <li className={props.section === "home" ? "active" : ""}>
            <a
              className=" ff-sans-cond uppercase text-white letter-spacing-2"
              href="/"
            >
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li className={props.section === "destination" ? "active" : ""}>
            <a
              className=" ff-sans-cond uppercase text-white letter-spacing-2"
              href="/destination"
            >
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li className={props.section === "crew" ? "active" : ""}>
            <a
              className=" ff-sans-cond uppercase text-white letter-spacing-2"
              href="/crew"
            >
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li className={props.section === "technology" ? "active" : ""}>
            <a
              className=" ff-sans-cond uppercase text-white letter-spacing-2"
              href="/technology"
            >
              <span aria-hidden="true">03</span>Technology
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="navbar__mobile-toggle"
        aria-controls="primary-navigation"
        aria-expanded={!menuToggle}
        onClick={handleClickButton}
      >
        <span className="app__sr-only">Menu</span>
      </button>
    </header>
  );
};

export default Navbar;
