import React from 'react';

const Navbar = ({ currentUser, logout }) => {

  return (
    <>
      <div className="navbar-container">
        <div className="home-page-text">
          <span className="home-page-bar-text-best">best</span>
          <span className="home-page-bar-text-reads">reads</span>
        </div>
        <div className="navbar-user-container">
          <div className="">
            <span className="header-name">Welcome, {currentUser.username}  </span>
          </div>
          <div className="navbar-logout-button-container">
            <button className="navbar-logout-button" onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;