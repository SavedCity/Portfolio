import React from "react";
import AndySunglasses from "../images/andy-sunglasses.jpg";

export default function Contact(props) {
  return (
    <div id="contact">
      <div className="contact-main">
        <span className={props.lettersClass}>C</span>
        <span className={props.letterClass}></span>
        <span className={props.lettersClass}>N</span>
        <span className={props.lettersClass}>T</span>
        <span className={props.lettersClass}>A</span>
        <span className={props.lettersClass}>C</span>
        <span className={props.lettersClass}>T</span>
        <span id="contact-m-letter" className={props.lettersClass}>
          M
        </span>
        <span className={props.lettersClass}>E</span>
      </div>
      <div className="contact-container">
        <img className="sunglasses-img" src={AndySunglasses} />
        <h1 className="contact-card-name">Andy Checo</h1>
        <div className="contact-contacts center-column">
          <h2 className="center">
            <i className="fas fa-phone"></i>
            <a className="tel-link" style={{ borderBottom: "none" }}>
              (917) 736-0925
            </a>
            <a className="tel-mobile" href="tel:9177360925">
              (917) 736-0925
            </a>
          </h2>
          <h2 className="center">
            <i className="fab fa-linkedin"></i>
            <a className="linkedin-link">
              LinkedIn
              <a
                target="blank"
                href="https://www.linkedin.com/in/andy-checo/"
                className="linkedin-tooltip"
              >
                Visit my LinkedIn
              </a>
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/andy-checo/"
              className="linkedin-mobile"
            >
              LinkedIn
            </a>
          </h2>
          <h2 className="center">
            <i className="fas fa-envelope"></i>
            <a className="email-link">
              andycheco25@hotmail.com
              <a
                href="mailto:andycheco25@hotmail.com"
                className="email-tooltip"
              >
                Email Me
              </a>
            </a>
            <a href="mailto:andycheco25@hotmail.com" className="email-mobile">
              Email
            </a>
          </h2>
          <h2 className="center">
            <i className="fab fa-github-square"></i>
            <a className="github-link">
              Github
              <a
                target="blank"
                href="https://github.com/SavedCity"
                className="github-tooltip"
              >
                Visit my Github
              </a>
            </a>
            <a
              target="blank"
              href="https://github.com/SavedCity"
              className="github-mobile"
            >
              Github
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
