import React, { useState } from "react";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Resume from "../src/components/Resume";
import Contact from "../src/components/Contact";

import Andy from "../src/images/andy.png";
import AndyAndYoshi from "../src/images/andy-and-yoshi.png";

import "./App.css";
import "./Skills.css";
import "./Profile.css";
import "./Projects.css";
import "./Resume.css";
import "./Contact.css";
import "./Mobile.css";
import "./Laptops.css";

export default function App() {
  const [flicker, setFlicker] = useState(true);
  const [appear, setAppear] = useState(true);
  const [shine, setShine] = useState(true);
  const [spread, setSpread] = useState(true);
  const [stretch, setStretch] = useState(true);

  const flick = flicker ? "title-left flicker" : "title-left";
  const lineSlide = appear ? "line appear" : "line";
  const shineClass = shine ? "resume-title shine" : "resume-title";
  const lettersClass = spread ? "contact-letters spread" : "contact-letters";
  const letterClass = stretch ? "letter extend" : "letter";

  function flickOn() {
    let offButton = document.querySelector(".flick-off");
    let onButton = document.querySelector(".flick-on");
    setFlicker(true);
    setAppear(true);
    setShine(true);
    setSpread(true);
    setStretch(true);

    onButton.style.display = "none";
    offButton.style.display = "block";
  }
  function flickOff() {
    let offButton = document.querySelector(".flick-off");
    let onButton = document.querySelector(".flick-on");
    setFlicker(false);
    setAppear(false);
    setShine(false);
    setSpread(false);
    setStretch(false);

    offButton.style.display = "none";
    onButton.style.display = "block";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var parent = document.querySelector(".splitview"),
      topPanel = parent.querySelector(".top"),
      handle = parent.querySelector(".handle"),
      skewHack = 0,
      delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf("skewed") !== -1) {
      skewHack = 1000;
    }

    parent.addEventListener("mousemove", function (event) {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      handle.style.left = event.clientX + delta + "px";

      // Adjust the top panel width.
      topPanel.style.width = event.clientX + skewHack + delta + "px";
    });
  });
  return (
    <div id="about" className="App mobile-croll">
      <Navbar flickOn={flickOn} flickOff={flickOff} />

      <div class="splitview skewed">
        <div class="panel bottom">
          <div class="content">
            <div class="description">
              <h1 className="title-right">Software Engineer</h1>
              <p className="desc-right">
                As a front-end software engineer, I am deeply dedicated to this field, driving my commitment to delivering exceptional work and providing effective leadership
              </p>
            </div>

            <img className="img-right" src={Andy} alt="Original" />
          </div>
        </div>

        <div class="panel top">
          <div class="content">
            <div class="description">
              <h1 className={flick}>Andy Checo</h1>
              <div className="desc-left center-column">
                <p>Passion in diverse projects, from web dev to DIY</p>
                <p>x2 girl dad</p> 
                <p>Video game enthusiast</p>
                <p>Outdoors/Active lifestyle</p>
                <p>Bears, beets, battlestar galactica</p>
              </div>
            </div>

            <img className="img-left" src={AndyAndYoshi} alt="Duotone" />
          </div>
        </div>

        <div class="handle"></div>
      </div>

      <Skills />
      <Projects lineSlide={lineSlide} />
      <Resume shineClass={shineClass} />
      <Contact lettersClass={lettersClass} letterClass={letterClass} />
      <Footer />
    </div>
  );
}
