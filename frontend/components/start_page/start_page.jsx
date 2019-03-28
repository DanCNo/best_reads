import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignUpContainer from '../session_form/signup_form_container';

const StartPage = () => {
  
  return(
    <>
      <div className="start-page-container">
        <div className="start-page-bar">
          <div>
            <div className="start-page-text">
              <span className="start-page-text-best">best</span>
              <span className="start-page-text-reads">reads</span>
            </div>
          </div>
          < LoginFormContainer />
        </div>
        
        <div className="sign-up-header">
          <img className ="slogan-img" src={window.bestreadssloganURL} />
          < SignUpContainer />
        </div>
      </div>
    </>
  )
}
export default StartPage;