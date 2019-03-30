import React from 'react';
import { Link } from 'react-router-dom';
import SignupPageContainer from '../session_form/signup_page_container';


const SignupPage = () => {
  return (
    <>
      <div className="signup-page">
        <Link to="/">Start Page</Link>
        <div className="signup-page-text-container">
          <span className="start-page-text-best">best</span>
          <span className="start-page-text-reads">reads</span>
        </div>
        <div className="signup-page-content-box">
          <div>
            < SignupPageContainer />
          </div>
        </div>
      </div>
    </>
  )
}
export default SignupPage;