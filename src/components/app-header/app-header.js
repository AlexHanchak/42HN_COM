import React from "react";
import { Link } from "react-router-dom";
import "./app-header.css";
// import { useTranslation } from "react-i18next";
// import i18n from "../../i18n";

const AppHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="header-nav-bar"
    >
      <Link className="navbar-brand" id="brand-nav-bar" to={"/"}>
        Share42Care
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarColor03"
      >
        <ul className="navbar-nav" id="buttons-nav-top">
          <li className="nav-item m-2">
            <Link className="link secondary" to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="link secondary" to={"/about"}>
              Fine some
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="link secondary" to={"/contacts"}>
              Create slot
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="link secondary" to={"/score"}>
              ScoreBord
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default AppHeader;
