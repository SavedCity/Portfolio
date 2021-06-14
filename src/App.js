import "./App.css";
import "./Skills.css";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Skills from "../src/components/Skills";

import Andy from "../src/images/andy.png";
import AndyAndYoshi from "../src/images/andy-and-yoshi.png";
import Andy2 from "../src/images/andy2.png";

import React, { useState } from "react";

export default function App() {
  document.addEventListener("DOMContentLoaded", function () {
    var parent = document.querySelector(".splitview"),
      topPanel = parent.querySelector(".top"),
      handle = parent.querySelector(".handle"),
      skewHack = 0,
      delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf("skewed") != -1) {
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
    <div className="App">
      <Navbar />

      <div class="splitview skewed">
        <div class="panel bottom">
          <div class="content">
            <div class="description">
              <h1 className="title-right">Software Developer</h1>
              <p className="desc-right">
                With a true passion in this field I am willing to go beyond
                anyone's expectations to show off my skill and worth.
              </p>
            </div>

            <img src={Andy} alt="Original" />
          </div>
        </div>

        <div class="panel top">
          <div class="content">
            <div class="description">
              <h1 className="title-left">Andy Checo</h1>
              <p className="desc-left">
                My family take up a huge percentage of my happiness. They are
                one of the reasons why I am so dedicated on going forward.
              </p>
            </div>

            <img src={AndyAndYoshi} alt="Duotone" />
          </div>
        </div>

        <div class="handle"></div>
      </div>

      <Skills />

      <Footer />
    </div>
  );
}
