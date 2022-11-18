import React from "react";
import { Link } from "react-router-dom";
import "./app-header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const AppHeader = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="header-nav-bar"
    >
      <Link className="navbar-brand" id="brand-nav-bar" to={"/"}>
        HanchakWeb.firebase.com
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
              {t("nav.Home")}
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="link secondary" to={"/about"}>
              {t("nav.About")}
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="link secondary" to={"/contacts"}>
              {t("nav.Contacts")}
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="link secondary" to={"/summary"}>
              {t("nav.Summary")}
            </Link>
          </li>
          <li className="nav-item m-2 dropdown">
            <button
              className="link secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {t("nav.Language")}
            </button>
            <div className="dropdown-menu">
              <ul className="s">
                <li
                  className="nav-item m-2"
                  onClick={() => changeLanguage("en")}
                >
                  <button className="nav-link secondary">
                    {t("nav.English")}
                  </button>
                </li>
                <li
                  className="nav-item m-2"
                  onClick={() => changeLanguage("ru")}
                >
                  <button className="nav-link secondary">
                    {t("nav.Russian")}
                  </button>
                </li>
                <li
                  className="nav-item m-2"
                  onClick={() => changeLanguage("ua")}
                >
                  <button className="nav-link secondary">
                    {t("nav.Ukrainian")}
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppHeader;
