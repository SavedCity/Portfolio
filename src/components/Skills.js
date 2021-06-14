import React, { useState } from "react";

export default function Skills() {
  const [showName, setShowName] = useState(false);
  const slide = showName ? "icon-name slide" : "icon-name";
  const line = showName ? "icon-line" : "icon";

  return (
    <div
      onMouseEnter={() => {
        setShowName(true);
      }}
      onMouseLeave={() => {
        setShowName(false);
      }}
      className="skills-container"
    >
      <h1 className="skills-title">SKILLS</h1>

      <div className="icons-container">
        <div>
          <i id={line} className="devicon-javascript-plain"></i>
          <h3 className={slide}>JAVASCRIPT</h3>
        </div>

        <div>
          <i id={line} className="devicon-html5-plain"></i>
          <h3 className={slide}>HTML</h3>
        </div>

        <div>
          <i id={line} className="devicon-css3-plain"></i>
          <h3 className={slide}>CSS</h3>
        </div>

        <div>
          <i id={line} className="devicon-jquery-plain"></i>
          <h3 className={slide}>JQUERY</h3>
        </div>

        <div>
          <i id={line} className="devicon-react-original"></i>
          <h3 className={slide}>REACT.JS</h3>
        </div>

        <div>
          <i id={line} className="devicon-redux-original"></i>
          <h3 className={slide}>REDUX</h3>
        </div>

        <div>
          <i id={line} className="devicon-sass-original"></i>
          <h3 className={slide}>SASS</h3>
        </div>

        <div>
          <i id={line} className="devicon-bootstrap-plain"></i>
          <h3 className={slide}>BOOTSTRAP</h3>
        </div>

        <div>
          <i id={line} className="devicon-python-plain"></i>
          <h3 className={slide}>PYTHON</h3>
        </div>

        <div>
          <i id={line} className="devicon-django-plain"></i>
          <h3 className={slide}>DJANGO</h3>
        </div>

        <div>
          <i id={line} className="devicon-nodejs-plain"></i>
          <h3 className={slide}>NODE.JS</h3>
        </div>

        <div>
          <i id={line} className="devicon-express-original"></i>
          <h3 className={slide}>EXPRESS.JS</h3>
        </div>

        <div>
          <i id={line} className="devicon-firebase-plain"></i>
          <h3 className={slide}>FIREBASE</h3>
        </div>

        <div>
          <i id={line} className="devicon-mongodb-plain"></i>
          <h3 className={slide}>MONGODB</h3>
        </div>

        <div>
          <i id={line} className="devicon-postgresql-plain"></i>
          <h3 className={slide}>PSQL</h3>
        </div>

        <div>
          <i id={line} className="devicon-bash-plain"></i>
          <h3 className={slide}>BASH</h3>
        </div>

        <div>
          <i id={line} className="devicon-git-plain"></i>
          <h3 className={slide}>GIT</h3>
        </div>

        <div>
          <i id={line} className="devicon-github-original"></i>
          <h3 className={slide}>GITHUB</h3>
        </div>

        <div>
          <i id={line} className="devicon-npm-original-wordmark"></i>
          <h3 className={slide}>NPM</h3>
        </div>

        <div>
          <i id={line} className="devicon-heroku-original"></i>
          <h3 className={slide}>HEROKU</h3>
        </div>
      </div>
    </div>
  );
}
