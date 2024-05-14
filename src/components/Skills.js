import React, { useState } from 'react'

export default function Skills() {
  const [showName, setShowName] = useState(false)
  const slide = showName ? 'icon-name slide' : 'icon-name'
  const line = showName ? 'icon-line' : 'icon'

  return (
    <div id='skills' className='skills-container mobile-croll'>
      <h1 className='skills-title'>SKILLS</h1>

      <p className='skills-desc'>
        By applying my skills{' '}
        <span style={{ color: '#69a95c', fontWeight: '700', filter: 'contrast(1.75)' }}>
          proficiently
        </span>{' '}
        in diverse projects and daily coding challenges, I continuously enhance my abilities and discover new knowledge with each experience. {' '}
      </p>
      <div
        onMouseEnter={() => {
          setShowName(true)
        }}
        onMouseLeave={() => {
          setShowName(false)
        }}
        className='icons-container'
      >
        <div className='icons-div'>
          <div>
            <i className={`${line} devicon-javascript-plain colored`}></i>
            <h3 className={slide}>JAVASCRIPT</h3>
          </div>

          <div>
            <i className={`${line} devicon-html5-plain colored`}></i>
            <h3 className={slide}>HTML</h3>
          </div>

          <div>
            <i className={`${line} devicon-css3-plain colored`}></i>
            <h3 className={slide}>CSS</h3>
          </div>

          {/* <div>
            <i className={`${line} devicon-tailwindcss-plain colored`}></i>
            <h3 className={slide}>TAILWINDCSS</h3>
          </div> */}

          <div>
            <i className={`${line} devicon-jquery-plain colored`}></i>
            <h3 className={slide}>JQUERY</h3>
          </div>

          <div>
            <i className={`${line} devicon-react-original colored`}></i>
            <h3 className={slide}>REACT.JS</h3>
          </div>

          <div>
            <i className={`${line} devicon-typescript-original colored`}></i>
            <h3 className={slide}>TYPESCRIPT</h3>
          </div>

          <div>
            <i className={`${line} devicon-nextjs-line colored`}></i>
            <h3 className={slide}>NEXT.JS</h3>
          </div>

          <div>
            <i className={`${line} devicon-redux-original colored`}></i>
            <h3 className={slide}>REDUX</h3>
          </div>

          <div>
            <i className={`${line} devicon-sass-original colored`}></i>
            <h3 className={slide}>SASS</h3>
          </div>

          <div>
            <i className={`${line} devicon-bootstrap-plain colored`}></i>
            <h3 className={slide}>BOOTSTRAP</h3>
          </div>

          <div>
            <i className={`${line} devicon-python-plain colored`}></i>
            <h3 className={slide}>PYTHON</h3>
          </div>

          {/* <div>
            <i className={`${line} devicon-django-plain colored`}></i>
            <h3 className={slide}>DJANGO</h3>
          </div> */}

          <div>
            <i className={`${line} devicon-nodejs-plain colored`}></i>
            <h3 className={slide}>NODE.JS</h3>
          </div>

          <div>
            <i className={`${line} devicon-express-original colored`}></i>
            <h3 className={slide}>EXPRESS.JS</h3>
          </div>

          <div>
            <i className={`${line} devicon-firebase-plain colored`}></i>
            <h3 className={slide}>FIREBASE</h3>
          </div>

          <div>
            <i className={`${line} devicon-mongodb-plain colored`}></i>
            <h3 className={slide}>MONGODB</h3>
          </div>

          <div>
            <i className={`${line} devicon-postgresql-plain colored`}></i>
            <h3 className={slide}>PSQL</h3>
          </div>

          <div>
            <i className={`${line} devicon-bash-plain colored`}></i>
            <h3 className={slide}>BASH</h3>
          </div>

          <div>
            <i className={`${line} devicon-git-plain colored`}></i>
            <h3 className={slide}>GIT</h3>
          </div>

          <div>
            <i className={`${line} devicon-github-original colored`}></i>
            <h3 className={slide}>GITHUB</h3>
          </div>

          <div>
            <i className={`devicon-${line} npm-original-wordmark colored`}></i>
            <h3 className={slide}>NPM</h3>
          </div>

          {/* <div>
            <i className={`${line} devicon-heroku-original colored`}></i>
            <h3 className={slide}>HEROKU</h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}
