import React from "react";
import svgLogo from "../images/logo.svg";
import svgIconHambuger from "../images/icon-hamburger.svg";
const Navbar = () => {
  const toggleNavMenu = () => {
    const lists = document.querySelector(".lists");
    lists.classList.toggle("open");
  };

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="logo">
          <img src={svgLogo} alt="logo" />
        </div>
        <ul className="lists">
          <li>
            <a href="#" tabIndex="1">
              About
            </a>
          </li>
          <li>
            <a href="#" tabIndex="2">
              Services
            </a>
          </li>
          <li>
            <a href="#" tabIndex="3">
              Projects
            </a>
          </li>
          <li className="primary">
            <a href="#" tabIndex="4">
              CONTACT
            </a>
          </li>
        </ul>
        <button className="btn" onClick={toggleNavMenu}>
          <img src={svgIconHambuger} alt="hamburger-btn" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
