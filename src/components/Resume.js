import React from "react";
import Andy2 from "../images/andy2.png";
import AndyResume from "../images/AndyChecoResume.pdf";
import AndyResumePic from "../images/Resume-pic.png";

export default function Resume(props) {
  function openModal() {
    let openModal = document.getElementById("resume-modal");
    openModal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    let openModal = document.getElementById("resume-modal");
    openModal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  window.onclick = function (event) {
    let openModal = document.getElementById("resume-modal");
    if (event.target == openModal) {
      openModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };

  function allowScroll() {}

  return (
    <div id="resume" className="mobile-croll">
      <div className="resume-container center-column">
        <h1 className={props.shineClass}>RESUME</h1>
      </div>
      <div className="resume-div center">
        <div className="why-hire-me center-column">
          <h3 className="resume-desc-title">So... Why hire me?</h3>
          <p className="resume-desc">
            I know I possess the skills that is required for the role that I am
            searching for. I believe that loving this field of work is a major
            requirement and I can say that I meet that requirement by a long
            run. Software engineering is what I am most passionate about and
            what consumes most of my day just because of the ambition of
            continuous learning. <br /> <br /> If you need someone that is a
            team player, has great work ethic, is an ambitious worker, would
            fall in love with his role, and would really love to chat with you
            then scroll down to the next section and let's make it happen.
          </p>
        </div>
        <div className="center-column">
          <img className="resume-photo" src={AndyResumePic} alt="andy2" />
          <div className="resume-buttons">
            <button onClick={openModal} className="view-button">
              VIEW / DOWNLOAD
            </button>
          </div>
        </div>

        <div id="resume-modal" className="resume-modal-class">
          <div className="resume-modal-content">
            <div class="modal-header">
              <span onClick={closeModal} className="close-resume-modal">
                X
              </span>
              <h2>Andy Checo | Resume</h2>
            </div>
            <div className="center-column">
              <embed
                className="resume-modal-photo"
                src={AndyResume}
                alt="andy2"
              />
            </div>
          </div>
        </div>

        {/*<img className="resume-photo" src={Andy2} alt="andy2" />
        <h3>Another photo before I hand over my resume</h3>*/}
      </div>
    </div>
  );
}
