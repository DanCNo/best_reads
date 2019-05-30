import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignUpContainer from '../session_form/signup_form_container';

const StartPage = () => {
  
  return(
    <>
      <div className="start-page-container">
        <div className="start-page-bar-container">
          <div className="start-page-bar">
            <div>
              <div className="start-page-text">
                <span className="start-page-text-best">best</span>
                <span className="start-page-text-reads">reads</span>
              </div>
            </div>
            < LoginFormContainer />
          </div>
        </div>
        
        <div className="sign-up-header">
          <div className="slogan-img-container">
            <img className ="slogan-img" src={window.bestreadssloganURL} />
          </div>
          < SignUpContainer />
        </div>
      </div>

      <div className="selling-point-box">
        <div className="selling-point">
          <div className="selling-headline">Deciding What to Read Next?</div>
          Browse through our selection and read reviews. Keep track of what you have read and have not read.
        </div>
        <div className="selling-point">
          <div className="selling-headline">What are other people reading?</div>
          What are other people reading and what do they think about your favorite and least favorite books?
        </div>
      </div>

      <div className="footer">
        <div className="per-nav-links-container">
          <div className="per-nav-link">
            <a href="https://dancno.github.io/"><i className="fas fa-laptop-code"></i></a>
          </div>
          <div className="per-nav-link">
            <a href="https://angel.co/dancno"><i className="fab fa-angellist"></i></a>
          </div>
          <div className="per-nav-link">
            <a href="https://github.com/DanCNo"><i className="fab fa-github"></i></a>
          </div>
          <div className="per-nav-link">
            <a href="https://www.linkedin.com/in/dan-n-480b2856/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}
export default StartPage;