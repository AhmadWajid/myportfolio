import React from "react";
import style from "./About.module.css";
import Title from "../Title/Title";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className={style["about"]}>
      <Title title="About Me" />
      <div className={style["about-data"]}>
        <div className={style["about-info"]}>
          <p className={style["about-para"]}>
          I am a first-year UCLA Computer Science student with over three years of programming and web development experience, 
          specializing in Python, JavaScript, and HTML/CSS. 
          I have gained practical skills through internships 
          in web development and front-end design, 
          where I worked on projects that focused on improving user experience, 
          implementing SEO strategies, and fostering team collaboration. 
          Also, my freelance work and recognition as a second-place winner in the U.S. House of Representatives Congressional App Challenge demonstrate my ability to tackle diverse technical challenges. 
          I am fluent in English, Pashto and Persian. I am passionate about creating impactful solutions while continuously learning to stay at the forefront of technological innovation.
          </p>
          <div className={style["about-contacts"]}>
            <div className={style["contact-item"]}>
              <i className="icon email-icon">
              <MdEmail />
              </i>
              <span>ahmadwajid@ucla.edu</span>
            </div>
            <div className="divider"></div>
            <div className={style["contact-item"]}>
              <i className="icon phone-icon">  
              <FaPhoneAlt />
              </i>
              <span>714-240-1753</span>
            </div>
          </div>
        </div>
        <div className={style["about-image"]}>
          <img
            src="/imgs/me.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
