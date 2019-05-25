import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {

  return (
    <>
      <div className="navbar-container">
        <div className="home-page-text">
          <Link className="navbar-home-link" to={`/home`}>
            <span className="home-page-bar-text-best">best</span>
            <span className="home-page-bar-text-reads">reads</span>
          </Link>
          <div className="navbar-links-container">
            <Link className="navbar-home-home-link" to={`/home`}>
              <span className="home-page-bar-text-home">Home</span>
            </Link>
            <Link className="navbar-home-my-books" to={`/bookshelves`}>
              <span className="home-page-bar-text-my-books">My Books</span>
            </Link>
          </div>
        </div>
        <div className="navbar-user-container">
          <div className="navbar-header-name-container">
            <span className="header-name">{currentUser.username}</span>
          </div>
          <div className="navbar-logout-button-container">
            <button className="navbar-logout-button" onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
      <div className="navbar-links-container-2">
        <Link className="navbar-home-home-link" to={`/home`}>
          <span className="home-page-bar-text-home">Home</span>
        </Link>
        <Link className="navbar-home-my-books" to={`/bookshelves`}>
          <span className="home-page-bar-text-my-books">My Books</span>
        </Link>
      </div>
    </>
  )
}
export default Navbar;