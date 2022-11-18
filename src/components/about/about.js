import React from "react";
import "./about.css";
import Ima from "../../images/assyzdyk.jpg";
import ImaPic from "../../images/istockphoto-1300845620-170667a.jpg";

const About = () => {
  return (
    <div className="container about">
      <div className="myself">
        <div className="slotE">
          <div className="evalBox">
            <p class="level">lv.3</p>
            <img src={Ima} alt="PhotoImg" id="evalPic"/>
            <p>Bob</p>
          </div>
          <div className="evalBox">
            <p class="level">lv.1</p>
            <img src={ImaPic} alt="PhotoImg" id="evaluatedPic"/>
            <p>Pipi</p>
          </div>
          <p class="score">125</p>
          <p>Get next line</p>
          <div class="subBtn">
            <button>Subscribe</button>
            <p>3 / 9</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
