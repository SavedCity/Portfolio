import React from 'react'
import AndySunglasses from '../images/andy-sunglasses.jpg'

export default function Contact(props) {
  return (
    <div id='contact' className='mobile-croll'>
      <div className='contact-main'>
        <span className={props.lettersClass}>C</span>
        <span className={props.letterClass}></span>
        <span className={props.lettersClass}>N</span>
        <span className={props.lettersClass}>T</span>
        <span className={props.lettersClass}>A</span>
        <span className={props.lettersClass}>C</span>
        <span className={props.lettersClass}>T</span>
        <span id='contact-m-letter' className={props.lettersClass}>
          M
        </span>
        <span className={props.lettersClass}>E</span>
      </div>
      <div className='contact-container'>
        <img className='sunglasses-img' src={AndySunglasses} alt='andy-sunglasses' />
        <h1 className='contact-card-name'>Andy Checo</h1>
        <div className='contact-contacts center-column'>
          <h2 className='center'>
            <i className='fas fa-phone'></i>
            <span className='tel-link' style={{ borderBottom: 'none' }}>
              (917) 736-0925
            </span>
            <a className='tel-mobile' href='tel:9177360925'>
              (917) 736-0925
            </a>
          </h2>
          
          <h2 className='center'>
            <i className='fas fa-envelope'></i>
            <span className='email-link'>
              andycheco25@gmail.com
              <a href='mailto:andycheco25@gmail.com' className='email-tooltip'>
                Email Me
              </a>
            </span>
            <a href='mailto:andycheco25@gmail.com' className='email-mobile'>
              Email
            </a>
          </h2>
          
          <h2 className='center'>
            <i className='fab fa-linkedin'></i>
            <span className='linkedin-link'>
              LinkedIn
              <a
                target='blank'
                href='https://www.linkedin.com/in/andy-checo/'
                className='linkedin-tooltip'
              >
                Visit my LinkedIn
              </a>
            </span>
            <a
              target='blank'
              href='https://www.linkedin.com/in/andy-checo/'
              className='linkedin-mobile'
            >
              LinkedIn
            </a>
          </h2>
          <h2 className='center'>
            <i className='fab fa-github-square'></i>
            <span className='github-link'>
              Github
              <a target='blank' href='https://github.com/SavedCity' className='github-tooltip'>
                Visit my Github
              </a>
            </span>
            <a target='blank' href='https://github.com/SavedCity' className='github-mobile'>
              Github
            </a>
          </h2>
        </div>
        <div className='availability-div'>
          <h2>Contact Availability</h2>
          <h3>
            Week days:
            <span style={{ color: '#fff', marginLeft: '10px' }}>8am-6pm EST</span>
          </h3>
        </div>
      </div>
    </div>
  )
}
