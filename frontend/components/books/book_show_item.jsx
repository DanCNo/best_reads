import React from 'react';
import { Link } from 'react-router-dom';
const fetch = require('node-fetch');
import NavbarContainer from '../navbar/navbar_container';
import ShelvingItem from '../bookshelves/shelving_item';

class BookShowItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      coverUrl: ""
    };

    this.createShelving = this.props.createShelving.bind(this);
    this.deleteShelving = this.props.deleteShelving.bind(this);
    this.handleDeleteShelving = this.handleDeleteShelving.bind(this);
    this.handleCreateShelving = this.handleCreateShelving.bind(this);
  }

  componentDidMount() {
    // this.props.fetchBookshelves().then(this.props.fetchBook(this.props.match.params.bookId))
    // .then(() => this.getBookCover());
    
    
  }

  getBookCover() {
    // if (this.props.book) {
    //   fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.book.isbn_13}&jscmd=data&format=json`).then(
    //     response => response.json()
    //   ).then(data => Object.values(data)[0].cover.medium).then(coverUrl => this.setState({ coverUrl }));
    // }
  }

  handleDeleteShelving(id){
    
    this.props.deleteShelving(id);
      
  }

  handleCreateShelving(shelving){
    this.props.createShelving(shelving);
      
  }

  render() {
    if(!this.props.book || this.props.bookshelves.length < 1){
      
      return null;
    }
    
    const book = this.props.book;
    const shelvings = this.props.bookshelves.map((bookshelf, idx) => {
      if(bookshelf.book_ids.includes(book.id)){
        
        const shelvingId = book.shelving_ids.filter((id) => bookshelf.shelving_ids.includes(id));
        
        return (
          <button className="shelving-container" key={idx + 1000} onClick={() => this.handleDeleteShelving(shelvingId[0])}>
            < ShelvingItem key={idx} bookshelf={bookshelf}
              onBookshelf={true} />
          </button>
          )
      } else {
        
        return (
          <button className="shelving-container" key={idx+1000} onClick={()=> this.handleCreateShelving({bookshelf_id: bookshelf.id, book_id: book.id})}>
            < ShelvingItem key={idx} bookshelf={bookshelf}
              onBookshelf={false} />
          </button>
        )
      }
    });

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
            <img className="book-show-cover" src={this.props.book.cover_url}
            // {this.state.coverUrl} 
            alt=""/>
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
            <div>
              {shelvings}
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