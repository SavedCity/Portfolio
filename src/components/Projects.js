import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import Nytimes from '../images/Nytimes.png'
import Gridlife from '../images/gridlife.png'
import cardo from '../images/cardo.png'
import spamazon from '../images/spamazon.png'
import myhome from '../images/myhome.png'
import reviewt from '../images/reviewt.png'
// import average from '../images/average.png'
import enoughhunger from '../images/enoughhunger.png'
import portfolio from '../images/andy-portfolio.png'
import { AiFillWarning } from 'react-icons/ai'

SwiperCore.use([Navigation, Pagination])

export default function Projects(props) {
  const [linksClass, setLinksClass] = useState(false)
  const lowerLinks = linksClass ? 'project-links-div links-down' : 'project-links-div'

  return (
    <div id='projects' className='mobile-scroll'>
      <div className='project-top-div'>
        <h1 className='projects-title'>PROJECTS</h1>
        <div className={props.lineSlide}></div>
        <p className='projects-desc'>
          The projects I've developed stand as a testament to my unwavering{' '}
          <span style={{ color: '#32967a', fontWeight: '700' }}>dedication</span> to my craft. Despite encountering numerous challenges and
          debugging processes, each obstacle presented an invaluable opportunity for learning and deepening my understanding.
        </p>
      </div>
      <React.Fragment>
        <Swiper
          tag='section'
          id='main'
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={50}
          navigation
        >
          {/* ==================== Gridlife ====================*/}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true)
            }}
            onMouseLeave={() => {
              setLinksClass(false)
            }}
            tag='ul'
            key={'slide'}
          >
            <li className='center-column'>
              <img className='slider-img' src={Gridlife} alt='slider-img' />
              <h2 className='gridlife'>Gridlife Club</h2>
              <p className='project-desc'>
                As a big part of the development and launching process for{' '}
                <a target='blank' href='https://gridlife.club'>
                  Gridlife.club
                </a>{' '}
                (a new platform part of{' '}
                <a target='blank' href='https://www.grid.life/'>
                  Grid.life
                </a>
                ) with only 2 of us as developers we were able to deliver our product quickly and
                ready for drivers. This platform is meant for Gridlife's drivers to have an
                application where they can quickly sign up for races beforehand to save time when
                getting to the track. From here, drivers can also sign important forms, create a
                profile, add vehicles, see upcoming races, and more!
              </p>
              <div className={lowerLinks}>
                <a target='blank' href='https://gridlife.club'>
                  Live Site
                </a>
              </div>
              <h3 className='languages-used'>
                React
                <i style={{ fontSize: '25px' }} className='devicon-react-original colored'></i>
                Next
                <i style={{ fontSize: '25px' }} className='devicon-nextjs-line colored'></i>
                Javascript
                <i style={{ fontSize: '25px' }} className='devicon-javascript-plain colored'></i>
                HTML
                <i style={{ fontSize: '25px' }} className='devicon-html5-plain colored'></i>
                SASS
                <i style={{ fontSize: '25px' }} className='devicon-sass-plain colored'></i>
                Firebase
                <i style={{ fontSize: '25px' }} class='devicon-firebase-plain colored'></i>
              </h3>
            </li>
          </SwiperSlide>

          {/* ==================== NYTimes ====================*/}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true)
            }}
            onMouseLeave={() => {
              setLinksClass(false)
            }}
            tag='ul'
            key={'slide'}
          >
            <li className='center-column'>
              <img className='slider-img' src={Nytimes} alt='slider-img' />
              <h2 className='nytimes'>NYTimes</h2>
              <p className='project-desc'>
                The idea behind this project was to get my hands on an API that would allow me to
                manipulate a lot of data. With all the data coming from the NYTimes API, I was able
                to implement several sections on the site (e.g. News, Books, Movies, etc). I also
                got my hands dirty with Redux a bit and got a good idea on how to use it, which is
                great considering how powerful it is. Finally, Styled-Components allowed me to do my
                styling on the React file itself which came in handy.
              </p>
              <div className={lowerLinks}>
                <a
                  style={{ borderRight: '2px solid #fff8' }}
                  target='blank'
                  href='https://nytimes-bestseller.netlify.app/'
                >
                  Live Site
                </a>
                <a target='blank' href='https://github.com/SavedCity/NYTimesBestSeller'>
                  Github
                </a>
              </div>
              <h3 className='languages-used'>
                React
                <i style={{ fontSize: '25px' }} class='devicon-react-original colored'></i>
                Redux
                <i style={{ fontSize: '25px' }} className='devicon-redux-original'></i>
                Javascript
                <i style={{ fontSize: '25px' }} className='devicon-javascript-plain colored'></i>
                HTML
                <i style={{ fontSize: '25px' }} className='devicon-html5-plain colored'></i>
                CSS
                <i style={{ fontSize: '25px' }} className='devicon-css3-plain colored'></i>
                Styled-Components
              </h3>
            </li>
          </SwiperSlide>

          {/* ==================== Cardo ====================*/}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true)
            }}
            onMouseLeave={() => {
              setLinksClass(false)
            }}
            tag='ul'
            key={'slide'}
          >
            <li className='center-column'>
              <img className='slider-img' src={cardo} alt='slider-img' />

              <h2 className='cardo'>Cardo</h2>
              <br />
              <p className='project-desc'>
                A highly responsive and beautiful page done with React. This app features responsive
                css, highly customized elements, hamburger menu and more.
              </p>
              <div className={lowerLinks}>
                <a target='blank' href='https://baal-cardo.netlify.app/'>
                  Live Site
                </a>
              </div>
              <h3 className='languages-used'>
                React
                <i style={{ fontSize: '25px' }} class='devicon-react-original colored'></i>
                Javascript
                <i style={{ fontSize: '25px' }} className='devicon-javascript-plain colored'></i>
                HTML
                <i style={{ fontSize: '25px' }} className='devicon-html5-plain colored'></i>
                CSS
                <i style={{ fontSize: '25px' }} className='devicon-css3-plain colored'></i>
              </h3>
            </li>
          </SwiperSlide>

          {/* ==================== SPAMAZON ====================*/}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true)
            }}
            onMouseLeave={() => {
              setLinksClass(false)
            }}
            tag='ul'
            key={'slide'}
          >
            <li className='center-column'>
              <h1 className='broken-warning'>
                <AiFillWarning />
                Broken API due to Heroku's data removal on free service apps
              </h1>
              <img className='slider-img' src={spamazon} alt='slider-img' />

              <h2 className='spamazon'>Spamazon</h2>
              <p className='project-desc'>
                Spamazon is an e-commerce application using ReactJS. Using authentication with
                Firebase for the first time was surprisingly a very simple task. I was also happy
                about using another database like Postgres to store my data after using MongoDB in
                the past. Lastly, using a high programming language like Python fit very well with
                the backend of this project. Definitely would be using it in the future because it
                is a time saver.
              </p>
              <div className={lowerLinks}>
                <a
                  style={{ borderRight: '2px solid #fff8' }}
                  target='blank'
                  href='https://spamazon.netlify.app/'
                >
                  Live Site
                </a>
                <a target='blank' href='https://github.com/SavedCity/spamazon-frontend'>
                  Github
                </a>
              </div>
              <h3 className='languages-used'>
                React
                <i style={{ fontSize: '25px' }} class='devicon-react-original colored'></i>
                Javascript
                <i style={{ fontSize: '25px' }} className='devicon-javascript-plain colored'></i>
                PSQL
                <i style={{ fontSize: '25px' }} className='devicon-postgresql-plain colored'></i>
                Python
                <i style={{ fontSize: '25px' }} className='devicon-python-plain colored'></i>
                Django
                <i style={{ fontSize: '29px' }} className='devicon-django-plain colored'></i>
                HTML
                <i style={{ fontSize: '25px' }} className='devicon-html5-plain colored'></i>
                CSS
                <i style={{ fontSize: '25px' }} className='devicon-css3-plain colored'></i>
                Firebase
                <i style={{ fontSize: '25px' }} class='devicon-firebase-plain colored'></i>
                Heroku
                <i style={{ fontSize: '25px' }} class='devicon-heroku-original colored'></i>
              </h3>
            </li>
          </SwiperSlide>

          {/* ==================== MYHOME ==================== */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true)
            }}
            onMouseLeave={() => {
              setLinksClass(false)
            }}
            tag='ul'
            key={'slide'}
          >
            <li className='center-column'>
              <h1 className='broken-warning'>
                <AiFillWarning />
                Broken API due to Heroku's data removal on free service apps
              </h1>
              <img className='slider-img' src={myhome} alt='slider-img' />
              <h2 className='myhome'>myHome</h2>

              <p className='project-desc'>
                In 'myHome' you can search for southern state houses and browse through their
                details. Wanting to learn more of React, I built this project using React functional
                components, React router, hooks, and context. First time using React router and I
                absolutely loved the feel of navigating with speed. Using a lot of different hooks
                surprised me because of the amount of things you can achieve with them. What
                challenged me the most was using context to pass data around. It is wonderfully
                useful but it for sure takes some learning and getting used to which I enjoy.
              </p>
              <div className={lowerLinks}>
                <a
                  style={{ borderRight: '2px solid #fff8' }}
                  target='blank'
                  href='https://home-decor-frontend.herokuapp.com/'
                >
                  Live Site
                </a>
                <a target='blank' href='https://github.com/SavedCity/myHome'>
                  Github
                </a>
              </div>
              <h3 className='languages-used'>
                React
                <i style={{ fontSize: '25px' }} class='devicon-react-original colored'></i>
                Javascript
                <i style={{ fontSize: '25px' }} className='devicon-javascript-plain colored'></i>
                MongoDB
                <i style={{ fontSize: '25px' }} className='devicon-mongodb-plain colored'></i>
                Express
                <i style={{ fontSize: '25px' }} className='devicon-express-original colored'></i>
                HTML
                <i style={{ fontSize: '25px' }} className='devicon-html5-plain colored'></i>
                CSS
                <i style={{ fontSize: '25px' }} className='devicon-css3-plain colored'></i>
                JWT - Bcrypt - Heroku
                <i style={{ fontSize: '25px' }} class='devicon-heroku-original colored'></i>
              </h3>
            </li>
          </SwiperSlide>

          {/* ==================== PORTFOLIO ==================== */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true)
            }}
            onMouseLeave={() => {
              setLinksClass(false)
            }}
            tag='ul'
            key={'slide'}
          >
            <li className='center-column'>
              <img className='slider-img' src={portfolio} alt='slider-img' />
              <h2 className='portfolio'>Portfolio</h2>

              <p className='project-desc'>
                Wanting a one page portfolio did not have me debating what I was going to build it
                with. Using React components helps me have everything very organized and clear
                minded. Also, CSS being one of my favorite languages and having a background in
                digital art, I wanted to really play around with some of the things CSS can get done
                and dive a little deeper into animations. All that and keeping it simple at the same
                time.
              </p>
              <div className={lowerLinks}>
                <a target='blank' href='https://github.com/SavedCity/Portfolio'>
                  Github
                </a>
              </div>
              <h3 className='languages-used'>
                React
                <i style={{ fontSize: '25px' }} class='devicon-react-original colored'></i>
                Javascript
                <i style={{ fontSize: '25px' }} className='devicon-javascript-plain colored'></i>
                HTML
                <i style={{ fontSize: '25px' }} className='devicon-html5-plain colored'></i>
                Swiper - CSS
                <i style={{ fontSize: '25px' }} className='devicon-css3-plain colored'></i>
                Heroku
                <i style={{ fontSize: '25px' }} class='devicon-heroku-original colored'></i>
              </h3>
            </li>
          </SwiperSlide>

          {/* ==================== REVIEWT ==================== */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true)
            }}
            onMouseLeave={() => {
              setLinksClass(false)
            }}
            tag='ul'
            key={'slide'}
          >
            <li className='center-column'>
              <h1 className='broken-warning'>
                <AiFillWarning />
                Broken API due to Heroku's data removal on free service apps
              </h1>
              <img className='slider-img' src={reviewt} alt='slider-img' />
              <h2 className='reviewt'>Reviewt</h2>

              <p className='project-desc'>
                My main goal in this app was for users to really get something out of it. Reviewt is
                an app where you can go in and post a product you own and leave a review on it.
                Using ejs files can get very messy for me sometimes so keeping all of those intact
                and clean was a bit challenging at first. I can really say I got what I wanted out
                of this project and what I was wanting to implement.
              </p>
              <div className={lowerLinks}>
                <a
                  style={{ borderRight: '2px solid #fff8' }}
                  target='blank'
                  href='https://reviewt-app.herokuapp.com/sessions/signin'
                >
                  Live Site
                </a>
                <a target='blank' href='https://github.com/SavedCity/Reviewt'>
                  Github
                </a>
              </div>
              <h3 className='languages-used'>
                Javascript
                <i style={{ fontSize: '25px' }} className='devicon-javascript-plain colored'></i>
                jQuery
                <i style={{ fontSize: '25px' }} className='devicon-jquery-plain colored'></i>
                MongoDB
                <i style={{ fontSize: '29px' }} className='devicon-mongodb-plain colored'></i>
                Express
                <i style={{ fontSize: '29px' }} className='devicon-express-original colored'></i>
                HTML
                <i style={{ fontSize: '25px' }} className='devicon-html5-plain colored'></i>
                CSS
                <i style={{ fontSize: '25px' }} className='devicon-css3-plain colored'></i>
                Heroku
                <i style={{ fontSize: '25px' }} class='devicon-heroku-original colored'></i>
              </h3>
            </li>
          </SwiperSlide>

          {/*  ============ ENOUGH WITH CRAVINGS  ============ */}

          <SwiperSlide
            onMouseEnter={() => {
              setLinksClass(true)
            }}
            onMouseLeave={() => {
              setLinksClass(false)
            }}
            tag='ul'
            key={'slide'}
          >
            <li className='center-column'>
              <img className='slider-img' src={enoughhunger} alt='slider-img' />
              <h2 className='enough'>Enough with cravings</h2>

              <p className='project-desc'>
                Another passion of mine is food, but whose isn't? Making API calls was something new
                for me when building this but the amount of data that you can get from APIs are
                incredibly useful and awesome to go through. I also really admire jQuery, if there
                is way to shorten your code and get some simplicity from it then I'm all for it!
              </p>
              <div className={lowerLinks}>
                <a
                  style={{ borderRight: '2px solid #fff8' }}
                  target='blank'
                  href='https://enough-with-cravings.netlify.app/'
                >
                  Live Site
                </a>
                <a target='blank' href='https://github.com/SavedCity/Enough-With-Cravings'>
                  Github
                </a>
              </div>
              <h3 className='languages-used'>
                Javascript
                <i style={{ fontSize: '25px' }} className='devicon-javascript-plain colored'></i>
                jQuery
                <i style={{ fontSize: '25px' }} className='devicon-jquery-plain colored'></i>
                HTML
                <i style={{ fontSize: '25px' }} className='devicon-html5-plain colored'></i>
                CSS
                <i style={{ fontSize: '25px' }} className='devicon-css3-plain colored'></i>- Netlify
              </h3>
            </li>
          </SwiperSlide>

          {/* ==================== AVERAGE ==================== */}

          {/* <SwiperSlide
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
            <img className="slider-img" src={average} alt="slider-img" />
            <h2 className="average">Average</h2>

            <p className="project-desc">
              Inspired from Medium.com this app is meant to post articles on
              whatever you may have in mind. A lot of frustruation came when
              building this project because it was my first time using React and
              still had a lot to take in. Even though it was a challenge to get
              everything done and still have some things wanting to implement,
              it was a definite learning curve which, again, I love. It may not
              be as cool as Medium.com but at least it's... 'Average'
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
              React
              <i
                style={{ fontSize: "25px" }}
                class="devicon-react-original colored"
              ></i>
              Javascript
              <i
                style={{ fontSize: "25px" }}
                className="devicon-javascript-plain colored"
              ></i>
              MongoDB
              <i
                style={{ fontSize: "29px" }}
                className="devicon-mongodb-plain colored"
              ></i>
              Express
              <i
                style={{ fontSize: "29px" }}
                className="devicon-express-original colored"
              ></i>
              HTML
              <i
                style={{ fontSize: "25px" }}
                className="devicon-html5-plain colored"
              ></i>
              CSS
              <i
                style={{ fontSize: "25px" }}
                className="devicon-css3-plain colored"
              ></i>
              - Bcrypt - Heroku
              <i
                style={{ fontSize: "25px" }}
                class="devicon-heroku-original colored"
              ></i>
            </h3>
          </SwiperSlide> */}
        </Swiper>
      </React.Fragment>
    </div>
  )
}
