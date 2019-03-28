import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignUpContainer from '../session_form/signup_form_container';

const StartPage = () => {
  
  return(
    <>
      <header className="start-page-bar">
        <div className="start-page-bar text">
          <span className="start-page-bar-text-best">best</span>
          <span className="start-page-bar-text-reads">reads</span>
        </div>
        < LoginFormContainer />
      </header>
      <div className="sign-up-header">
        < SignUpContainer />
      </div>
    </>
  )
}
export default StartPage;