import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import BookIndexContainer from '../books/books_index_container';

const HomePage = () => {
  return (
    <>
      <header>
      </header>
        <main className="home-page-container">
          <div className="top-bar-container">
            <NavbarContainer />
          </div>
          <div className="home-page-content-container">
            <BookIndexContainer />
          </div>
        </main>
      <footer>

      </footer>
    </>
  )
}
export default HomePage;