import React from "react";
import "./about.css";
import { useTranslation } from "react-i18next";
import Ima from "../../images/assyzdyk.jpg";
import ImaPic from "../../images/istockphoto-1300845620-170667a.jpg";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container about">
      <div className="myself">
        <div className="slotE">
          <img src={Ima} alt="PhotoImg" id="PhotoImg"/>
          <p>Sandra baloc</p>
          <p>125</p>
          <p>Get next line</p>
          <img src={ImaPic} alt="PhotoImg" id="PhotoImg"/>
        </div>
        <div className="slotE">
          <img src={Ima} alt="PhotoImg" id="PhotoImg"/>
          <p>Sandra baloc</p>
          <p>100</p>
          <p>Printf</p>
          <img src={ImaPic} alt="PhotoImg" id="PhotoImg"/>
        </div>
        <div className="slotE">
          <img src={Ima} alt="PhotoImg" id="PhotoImg"/>
          <p>Sandra baloc</p>
          <p>110</p>
          <p>Born2beroot</p>
          <img src={ImaPic} alt="PhotoImg" id="PhotoImg"/>
        </div>
        <div className="slotE">
          <img src={Ima} alt="PhotoImg" id="PhotoImg"/>
          <p>Sandra baloc</p>
          <p>100</p>
          <p>Libft</p>
          <img src={ImaPic} alt="PhotoImg" id="PhotoImg"/>
        </div>
        <div className="slotE">
          <img src={Ima} alt="PhotoImg" id="PhotoImg"/>
          <p>Sandra baloc</p>
          <p>125</p>
          <p>Get next line</p>
          <img src={ImaPic} alt="PhotoImg" id="PhotoImg"/>
        </div>
      </div>
    </div>
  );
};

export default About;
