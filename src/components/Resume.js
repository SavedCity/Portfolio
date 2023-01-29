import React from 'react'
// import Andy2 from "../images/andy2.png";
import AndyResume from '../images/Andy_Checo_Resume.pdf'
import AndyResumePic from '../images/Resume-pic.png'
import { BiLinkExternal } from 'react-icons/bi'

export default function Resume(props) {
  function openModal() {
    let openModal = document.getElementById('resume-modal')
    openModal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
  function closeModal() {
    let openModal = document.getElementById('resume-modal')
    openModal.style.display = 'none'
    document.body.style.overflow = 'auto'
  }

  window.onclick = function (event) {
    let openModal = document.getElementById('resume-modal')
    if (event.target === openModal) {
      openModal.style.display = 'none'
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <div id='resume' className='mobile-croll'>
      <div className='resume-container center-column'>
        <h1 className={props.shineClass}>RESUME</h1>
      </div>
      <div className='resume-div center'>
        <div className='why-hire-me center-column'>
          <h3 className='resume-desc-title'>So... Why hire me?</h3>
          <p className='resume-desc'>
            I am confident that I possess the skills required for me to successfully execute the
            work that is given to me. Software engineering is what I am most passionate about and
            what consumes most of my day just because of the ambition of continuous learning. <br />{' '}
            <br /> If you need someone who works great on a team, communicates really well, shows
            ambition in his work, would fall in love in his role, and would really love to chat with
            you then scroll down to the next section and let's make it happen.
          </p>
        </div>
        <div style={{ width: '50%' }} className='center-column'>
          <img className='resume-photo' src={AndyResumePic} alt='andy2' />
          <div className='resume-buttons'>
            <button onClick={openModal} className='view-button'>
              VIEW / DOWNLOAD
            </button>
          </div>
        </div>

        <div id='resume-modal' className='resume-modal-class'>
          <div className='resume-modal-content'>
            <div class='modal-header'>
              <span onClick={closeModal} className='close-resume-modal'>
                X
              </span>
              <h2>Andy Checo | Resume</h2>
            </div>
            <div className='center-column'>
              <div className='open-external-div'>
                <span>Unable to view?</span>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.canva.com/design/DAE1LiGI8nY/4FUaAFOKMCSm_ZB57WRfWg/view?utm_content=DAE1LiGI8nY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                >
                  Open <BiLinkExternal />
                </a>
                <span>or</span>
                <a href={AndyResume} download>
                  Download
                </a>
              </div>
              <embed className='resume-modal-photo' src={AndyResume} alt='andy2' />
            </div>
          </div>
        </div>

        {/*<img className="resume-photo" src={Andy2} alt="andy2" />
        <h3>Another photo before I hand over my resume</h3>*/}
      </div>
    </div>
  )
}
