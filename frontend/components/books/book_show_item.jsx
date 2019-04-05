import React from 'react';
import { Link } from 'react-router-dom';
const fetch = require('node-fetch');
import NavbarContainer from '../navbar/navbar_container';

class BookShowItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      coverUrl: ""
    };

  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId).then(() => this.getBookCover());
  }

  getBookCover() {
    if (this.props.book) {
      fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.book.isbn_13}&jscmd=data&format=json`).then(
        response => response.json()
      ).then(data => Object.values(data)[0].cover.medium).then(coverUrl => this.setState({ coverUrl }));
    }
  }

  render() {
    if(!this.props.book){
      return null;
    }
    return (
      <div className="book-show-main-container">
        <div className="top-bar-container">
          <NavbarContainer />
        </div>
        <Link className="mybooks-link-container" to={`/bookshelves`}>
          <span className="mybooks-link">My Books</span>
        </Link>
        <div className="book-show-head-container">
          <div className="book-show-cover-container">
            <img className="book-show-cover" src={this.state.coverUrl} alt=""/>
          </div>
          <div className="book-show-info-container">
            <div className="book-show-title-container">
              <h2 className="book-show-title">{this.props.book.title}</h2>
            </div>
            <div className="book-show-author-container">
              <div className="book-show-author">By: {this.props.book.author}</div>
            </div>
            <div className="book-show-description-container">
              <p className="book-show-description">Description: {this.props.book.description}</p>
            </div>
            <div className="book-show-header-divider-line">
            </div>
            <div className="book-show-details-container">
              <div className="book-show-pages-container">
                <div className="book-show-pages-name">
                  Pages:
                </div>
                <div className="book-show-pages-val">
                  {this.props.book.pages}
                </div>
              </div>
              <div className="book-show-year-container">
                <div className="book-show-year-name">
                  Year Published:
                </div>
                <div className="book-show-year-val">
                  {this.props.book.year_published}
                </div>
              </div>
              <div className="book-show-isbn-container">
                <div className="book-show-isbn-name">
                  ISBN 13:
                </div>
                <div className="book-show-isbn-val">
                  {this.props.book.isbn_13}
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
        <div className="book-show-main-divider-line">
</div>
        <div className="book-show-reviews-container">
          <div>
            placeholder for reviews section
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default BookShowItem;