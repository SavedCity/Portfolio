import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import spamazon from "../images/spamazon.png";
import myhome from "../images/myhome.png";
import reviewt from "../images/reviewt.png";
import average from "../images/average.png";
import enoughhunger from "../images/enoughhunger.png";
import portfolio from "../images/andy-portfolio.png";

SwiperCore.use([Navigation, Pagination]);

export default function Projects(props) {
  const [linksClass, setLinksClass] = useState(false);
  const lowerLinks = linksClass
    ? "project-links-div links-down"
    : "project-links-div";

  return (
    <div id="projects" className="mobile-scroll">
      <div className="project-top-div">
        <h1 className="projects-title">PROJECTS</h1>
        <div className={props.lineSlide}></div>
        <p className="projects-desc">
          The projects I've built are a representaion of the dedication I put in
          them.{" "}
          <span style={{ color: "#32967a", fontWeight: "700" }}>Note</span> that
          these were built in just a week or less of time so there are still
          lots of other features I am wanting to implement in them.
        </p>
      </div>
      <React.Fragment>
        <Swiper
          tag="section"
          id="main"
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={50}
          navigation
        >
          {/* ==================== SPAMAZON ====================*/}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true);
            }}
            onMouseLeave={() => {
              setLinksClass(false);
            }}
            className="center-column"
            tag="ul"
            key={"slide"}
          >
            <img className="slider-img" src={spamazon} />

            <h2 className="spamazon">Spamazon</h2>
            <p className="project-desc">
              Spamazon is an e-commerce application with a lot of unique
              features in it including, but not limited to, full CRUD, add to
              cart functionality, mock purchase, full authentication, and more!
              And if that didn't catch your eye we have an unlimited stock on
              all products!
            </p>
            <div className={lowerLinks}>
              <a
                style={{ borderRight: "2px solid #fff8" }}
                target="blank"
                href="https://spamazon-ga.herokuapp.com/"
              >
                Live Site
              </a>
              <a
                target="blank"
                href="https://github.com/SavedCity/spamazon-frontend"
              >
                Github
              </a>
            </div>
            <h3 className="languages-used">
              React{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-react-original colored"
              >
                {" "}
              </i>
              Javascript{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-javascript-plain colored"
              ></i>{" "}
              PSQL{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-postgresql-plain colored"
              ></i>{" "}
              Python{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-python-plain colored"
              ></i>{" "}
              Django{" "}
              <i
                style={{ fontSize: "29px" }}
                className="devicon-django-plain colored"
              ></i>{" "}
              HTML{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-html5-plain colored"
              ></i>{" "}
              CSS{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-css3-plain colored"
              ></i>{" "}
              Firebase{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-firebase-plain colored"
              ></i>
              Heroku{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-heroku-original colored"
              ></i>
            </h3>
          </SwiperSlide>

          {/* ==================== MYHOME ==================== */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true);
            }}
            onMouseLeave={() => {
              setLinksClass(false);
            }}
            className="center-column"
            tag="ul"
            key={"slide"}
          >
            <img className="slider-img" src={myhome} />
            <h2 className="myhome">myHome</h2>

            <p className="project-desc">
              This idea came from my wife and I searching for homes. In 'myHome'
              you can search for southern state homes, (eg. Texas, Florida,
              South Carolina, etc.) with a minimilist style. Looking for homes
              down where the weather's a little nice? Start here!
            </p>
            <div className={lowerLinks}>
              <a
                style={{ borderRight: "2px solid #fff8" }}
                target="blank"
                href="https://home-decor-frontend.herokuapp.com/"
              >
                Live Site
              </a>
              <a target="blank" href="https://github.com/SavedCity/myHome">
                Github
              </a>
            </div>
            <h3 className="languages-used">
              React{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-react-original colored"
              >
                {" "}
              </i>
              Javascript{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-javascript-plain colored"
              ></i>{" "}
              MongoDB{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-mongodb-plain colored"
              ></i>{" "}
              Express{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-express-original colored"
              ></i>{" "}
              HTML{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-html5-plain colored"
              ></i>{" "}
              CSS{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-css3-plain colored"
              ></i>{" "}
              JWT - Bcrypt - Heroku{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-heroku-original colored"
              ></i>
            </h3>
          </SwiperSlide>

          {/* ==================== PORTFOLIO ==================== */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true);
            }}
            onMouseLeave={() => {
              setLinksClass(false);
            }}
            className="center-column"
            tag="ul"
            key={"slide"}
          >
            <img className="slider-img" src={portfolio} />
            <h2 className="portfolio">Portfolio</h2>

            <p className="project-desc">
              Not only did I want another project in the books but CSS being one
              of my favorite things about coding I had to enjoy myself. Lots of
              fun building this portfolio. (ps. turning off animation won't hurt
              my feelings, just don't wanna hurt your eyes.)
            </p>
            <div className={lowerLinks}>
              <a target="blank" href="https://github.com/SavedCity/Portfolio">
                Github
              </a>
            </div>
            <h3 className="languages-used">
              React{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-react-original colored"
              >
                {" "}
              </i>
              Javascript{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-javascript-plain colored"
              ></i>{" "}
              HTML{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-html5-plain colored"
              ></i>{" "}
              Swiper - CSS{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-css3-plain colored"
              ></i>{" "}
              Heroku{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-heroku-original colored"
              ></i>
            </h3>
          </SwiperSlide>

          {/* ==================== REVIEWT ==================== */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true);
            }}
            onMouseLeave={() => {
              setLinksClass(false);
            }}
            className="center-column"
            tag="ul"
            key={"slide"}
          >
            <img className="slider-img" src={reviewt} />
            <h2 className="reviewt">Reviewt</h2>

            <p className="project-desc">
              My main goal in this app was for users to really get something out
              of it. Reviewt is an app where you can go in and post a product
              you own and leave a review on it. Good or bad. Just let it all out
              by sharing your thoughts with others.
            </p>
            <div className={lowerLinks}>
              <a
                style={{ borderRight: "2px solid #fff8" }}
                target="blank"
                href="https://savedcity.herokuapp.com/sessions/signin"
              >
                Live Site
              </a>
              <a target="blank" href="https://github.com/SavedCity/Reviewt">
                Github
              </a>
            </div>
            <h3 className="languages-used">
              Javascript{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-javascript-plain colored"
              ></i>{" "}
              Jquery{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-jquery-plain colored"
              ></i>{" "}
              MongoDB{" "}
              <i
                style={{ fontSize: "29px" }}
                className="devicon-mongodb-plain colored"
              ></i>{" "}
              Express{" "}
              <i
                style={{ fontSize: "29px" }}
                className="devicon-express-original colored"
              ></i>{" "}
              HTML{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-html5-plain colored"
              ></i>{" "}
              CSS{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-css3-plain colored"
              ></i>{" "}
              Heroku{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-heroku-original colored"
              ></i>
            </h3>
          </SwiperSlide>

          {/*  ============ ENOUGH WITH CRAVINGS  ============ */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true);
            }}
            onMouseLeave={() => {
              setLinksClass(false);
            }}
            className="center-column"
            tag="ul"
            key={"slide"}
          >
            <img className="slider-img" src={enoughhunger} />
            <h2 className="enough">Enough with cravings</h2>

            <p className="project-desc">
              Another passion of mine is food, but whose isn't? Get searching
              for something delicious and satisfy your cravings!
            </p>
            <div className={lowerLinks}>
              <a
                style={{ borderRight: "2px solid #fff8" }}
                target="blank"
                href="https://enough-with-cravings.netlify.app/"
              >
                Live Site
              </a>
              <a
                target="blank"
                href="https://github.com/SavedCity/Enough-With-Cravings"
              >
                Github
              </a>
            </div>
            <h3 className="languages-used">
              Javascript{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-javascript-plain colored"
              ></i>{" "}
              Jquery{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-jquery-plain colored"
              ></i>{" "}
              HTML{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-html5-plain colored"
              ></i>{" "}
              CSS{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-css3-plain colored"
              ></i>{" "}
              - Netlify
            </h3>
          </SwiperSlide>

          {/* ==================== AVERAGE ==================== */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true);
            }}
            onMouseLeave={() => {
              setLinksClass(false);
            }}
            className="center-column"
            tag="ul"
            key={"slide"}
          >
            <img className="slider-img" src={average} />
            <h2 className="average">Average</h2>

            <p className="project-desc">
              Inspired from Medium.com this app is meant to post articles on
              whatever you may have in mind. A lot of frustruation came when
              building it. It may not be as cool as Medium.com but at least
              it's... 'Average'{" "}
            </p>
            <div className={lowerLinks}>
              <a
                style={{ borderRight: "2px solid #fff8" }}
                target="blank"
                href="https://glacial-plateau-97663.herokuapp.com/"
              >
                Live Site
              </a>
              <a target="blank" href="https://github.com/SavedCity/average">
                Github
              </a>
            </div>
            <h3 className="languages-used">
              React{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-react-original colored"
              >
                {" "}
              </i>
              Javascript{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-javascript-plain colored"
              ></i>{" "}
              MongoDB{" "}
              <i
                style={{ fontSize: "29px" }}
                className="devicon-mongodb-plain colored"
              ></i>{" "}
              Express{" "}
              <i
                style={{ fontSize: "29px" }}
                className="devicon-express-original colored"
              ></i>{" "}
              HTML{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-html5-plain colored"
              ></i>{" "}
              CSS{" "}
              <i
                style={{ fontSize: "25px" }}
                className="devicon-css3-plain colored"
              ></i>{" "}
              - Bcrypt - Heroku{" "}
              <i
                style={{ fontSize: "25px" }}
                class="devicon-heroku-original colored"
              ></i>
            </h3>
          </SwiperSlide>
        </Swiper>
      </React.Fragment>
    </div>
  );
}
