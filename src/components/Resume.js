import React from 'react'
// import Andy2 from "../images/andy2.png";
import AndyResume from '../images/Andy_Checo_Resume.pdf'
import AndyResumePic from '../images/Resume-pic.png'
import { BiLinkExternal } from 'react-icons/bi'

export default function Resume(props) {
function toggleModal(isOpen) {
  const resumeModal = document.getElementById('resume-modal');
  resumeModal.style.display = isOpen ? 'block' : 'none';
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
}

function openModal() {
  toggleModal(true);
}

function closeModal() {
  toggleModal(false);
}

window.addEventListener('click', (event) => {
  const resumeModal = document.getElementById('resume-modal');
  if (event.target === resumeModal) {
    closeModal();
  }
});

  return (
    <div id='resume' className='mobile-croll'>
      <div className='resume-container center-column'>
        <h1 className={props.shineClass}>RESUME</h1>
      </div>
      <div className='resume-div center'>
        <div className='why-hire-me center-column'>
          <h3 className='resume-desc-title'>So... Why choose me?</h3>
          <p className='resume-desc'>
            I am confident in my ability to effectively execute tasks within my skills and knowledge, and I am dedicated to expanding those and learn new ones to tackle new challenges as they arise. My proactive approach ensures that I continually grow and adapt to meet the evolving needs of any project. <br />{' '}
            <br /> If you're seeking a team player with strong communication skills, steadfast ambition in their work, a genuine passion for their role, and someone who is eager to connect, then I invite you to scroll down to the next section. Let's make it happen together.
          </p>
        </div>
        <div className='center-column'>
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
