import React from "react";
import "./about.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container about">
      <div className="myself">
        <p>
          {t("About.obj1p")}
          <b>{t("About.Jonco")}</b>
          {t("About.obj2p")}
        </p>
        <p>{t("About.obj3p")}</p>
        <p>{t("About.obj4p")}</p>
        <p>{t("About.obj5p")}</p>
        <p>{t("About.obj6p")}</p>
        <p>
          {t("About.obj7p")}
          <b>{t("About.obj8p")}</b>
        </p>
        <p>{t("About.obj9p")}</p>
        <div id="b">
          
            <button className="btn btn-outline-light ml-2">
              {t("About.b2")}
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
