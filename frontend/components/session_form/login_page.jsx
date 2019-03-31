import React from 'react';
import { Link } from 'react-router-dom';
import LoginPageContainer from '../session_form/login_page_container';


const LoginPage = () => {
  return (
    <>
      <div className="login-page">
        <div className="best-reads-text-container">
          <Link to="/" className="session-page-start-link">
            <div className="session-page-text-container">
              <span className="session-page-text-best">best</span>
              <span className="session-page-text-reads">reads</span>
            </div>
          </Link>
        </div>
        <div className="session-page-content-container">
          <div className="login-page-content-box">
            <h2 className="session-page-title">Login for Bestreads</h2>
            <div>
              <span className="session-page-input-header">Login with Email</span>
            </div>
            < LoginPageContainer />  
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginPage;

            