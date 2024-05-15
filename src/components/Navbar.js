import React from 'react'

export default function Navbar(props) {
  window.onscroll = () => {
    let nav = document.querySelector('.navbar2')

    // NAV BAR ON SCROLL CHANGES CSS
    if (window.scrollY < 500) {
      nav.style.top = '-90px'
    } else {
      nav.style.top = '0px'
    }

    let about2 = document.querySelector('.about-link2')
    // let about = document.querySelector(".about-link");
    let skills = document.querySelector('.skills-link')
    let projects = document.querySelector('.projects-link')
    let resume = document.querySelector('.resume-link')
    let contact = document.querySelector('.contact-link')
    let arrow = document.querySelector('.fa-chevron-up')

    if (window.scrollY < 758) {
      about2.style.color = '#fff'
      skills.style.color = '#fff9'
    } else if (window.scrollY > 758 && window.scrollY < 1664) {
      about2.style.color = '#fff9'
      skills.style.color = '#fff'
      projects.style.color = '#fff9'
      arrow.classList.remove('show-arrow')
    } else if (window.scrollY > 1664 && window.scrollY < 2950) {
      skills.style.color = '#fff9'
      projects.style.color = '#fff'
      resume.style.color = '#fff9'
      arrow.classList.add('show-arrow')
    } else if (window.scrollY > 2950 && window.scrollY < 3880) {
      resume.style.color = '#fff'
      projects.style.color = '#fff9'
      contact.style.color = '#fff9'
    } else if (window.scrollY > 3880) {
      contact.style.color = '#fff'
      resume.style.color = '#fff9'
    }
  }

  return (
    <>
      <div id='navbar' className='navbar1 mobile-croll'>
        <div className='nav-links'>
          <button className='flick-on' onClick={props.flickOn}>
            ANIMATION <span style={{ color: '#3f3f3f' }}>OFF</span>
          </button>
          <button className='flick-off' onClick={props.flickOff}>
            ANIMATION <span style={{ color: '#f9c74f' }}>ON</span>
          </button>

          <a className='about-link' href='#about'>
            ABOUT ME
          </a>

          <a href='#skills'>SKILLS</a>

          <a  href='#projects'>
            PROJECTS
          </a>

          <a className='gold-link1' href='#resume'>RESUME</a>

          <a href='#contact'>CONTACT</a>
        </div>
      </div>
      <div className='navbar2'>
        <div className='nav-links'>
          <a className='about-link2' href='#about'>
            ABOUT ME
          </a>

          <a className='skills-link' href='#skills'>
            SKILLS
          </a>

          <a className='projects-link' href='#projects'>
            PROJECTS
          </a>

          <a className='resume-link' href='#resume'>
            RESUME
          </a>

          <a className='contact-link' href='#contact'>
            CONTACT
          </a>
        </div>
      </div>
      <a aria-label='Back to top' href='#navbar'>
        <i class='fas fa-chevron-up'></i>
      </a>
    </>
  )
}
