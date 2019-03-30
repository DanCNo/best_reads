import React from 'react';
import { Link } from 'react-router-dom';
import LoginPageContainer from '../session_form/login_page_container';


const LoginPage = () => {
  return (
    <>
      <div className="login-page">
        <Link to="/">Start Page</Link>
        <div className="login-page-text-container">
          <span className="start-page-text-best">best</span>
          <span className="start-page-text-reads">reads</span>
        </div>
        <div className="login-page-content-box">
          <div>
            < LoginPageContainer />  
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginPage;

            