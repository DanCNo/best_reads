import React from 'react';
import { Link } from 'react-router-dom';
import SignupPageContainer from '../session_form/signup_page_container';


const SignupPage = () => {
  return (
    <>
      <div className="signup-page">
        <div className="best-reads-text-container">
          <Link to="/" className="session-page-start-link">
            <div className="session-page-text-container">
              <span className="session-page-text-best">best</span>
              <span className="session-page-text-reads">reads</span>
            </div>
          </Link>
        </div>
        <div className="session-page-content-container">
          <div className="signup-page-content-box">
            <h2 className="session-page-title">Signup for Bestreads</h2>
            <div className="signup-page-greeting">Sign up to see what your friends are reading, get book recommendations,
and join the world’s largest community of readers.</div>
            <div>
              <span className="session-page-input-header">Signup with Email</span>
            </div>
            < SignupPageContainer />
          </div>
        </div>
      </div>
    </>
  )
}
export default SignupPage;