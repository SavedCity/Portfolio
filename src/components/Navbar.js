import React, { useState } from "react";

export default function Navbar(props) {
  window.onscroll = () => {
    let nav = document.querySelector(".navbar2");

    // NAV BAR ON SCROLL CHANGES CSS
    if (window.scrollY < 500) {
      nav.style.top = "-90px";
    } else {
      nav.style.top = "0px";
    }

    let about2 = document.querySelector(".about-link2");
    let about = document.querySelector(".about-link");
    let skills = document.querySelector(".skills-link");
    let projects = document.querySelector(".projects-link");
    let resume = document.querySelector(".resume-link");
    let contact = document.querySelector(".contact-link");

    if (window.scrollY < 680) {
      about2.style.color = "#fff";
      skills.style.color = "#fff9";
    } else if (window.scrollY > 680 && window.scrollY < 930) {
      about2.style.color = "#fff9";
      skills.style.color = "#fff";
      projects.style.color = "#fff9";
    } else if (window.scrollY > 930 && window.scrollY < 1530) {
      skills.style.color = "#fff9";
      projects.style.color = "#fff";
    }
  };

  function skillScroll() {
    window.scrollY = 680;
  }

  return (
    <>
      <div className="navbar1">
        <div className="nav-links">
          <button className="flick-on" onClick={props.flickOn}>
            ANIMATION <span style={{ color: "#3f3f3f" }}>OFF</span>
          </button>
          <button className="flick-off" onClick={props.flickOff}>
            ANIMATION <span style={{ color: "#f9c74f" }}>ON</span>
          </button>

          <a className="about-link" href="">
            ABOUT ME
          </a>

          <a href="">SKILLS</a>

          <a href="">PROJECTS</a>

          <a href="">RESUME</a>

          <a href="">CONTACT</a>
        </div>
      </div>
      <div className="navbar2">
        <div className="nav-links">
          <a className="about-link2" href="">
            ABOUT ME
          </a>

          <a className="skills-link" href="">
            SKILLS
          </a>

          <a className="projects-link" href="">
            PROJECTS
          </a>

          <a className="resume-link" href="">
            RESUME
          </a>

          <a className="contact-link" href="">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}
