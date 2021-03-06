import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import NavbarContainer from '../navbar/navbar_container';
import BookIndexContainer from '../books/books_index_container';
import BookshelvesIndexContainer from '../bookshelves/bookshelves_index_container';
import BookshelfShowContainer from './bookshelf_show_container';


class BookshelfPage extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = this.props.currentUser;

  }

  componentDidMount() {
    this.props.fetchBooks();

  }

  render() {
    
  
    if(!this.props.currentUser){
      return null;
    }
    return (
      <>
        <header>
        </header>
        <main className="bookshelf-page-container">
          <div className="top-bar-container">
            <NavbarContainer />
          </div>
          <div className="mybooks-link-container">
            <Link className="mybooks-link" to={`/bookshelves`}>
              <div className="mybooks-link-text">My Books</div>     
            </Link>
          </div>
          <div className="bookshelf-main-divider-line"></div>
          <div className="bookshelf-page-content-container">
            <div className="bookshelf-page-bookshelf-index-container">
              <BookshelvesIndexContainer />
            </div>
            <div className="bookshelf-page-bookshelf-show-container">
              < Switch >
                <ProtectedRoute exact path='/bookshelves' component={BookIndexContainer} />
                <ProtectedRoute exact path='/bookshelves/:bookshelfId' component={BookshelfShowContainer} />
              </Switch>
            </div>
          </div>
        </main>
        <footer>

        </footer>
      </>
    );
  }
}

export default BookshelfPage;