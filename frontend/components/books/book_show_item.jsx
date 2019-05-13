import React from 'react';
import { Link } from 'react-router-dom';
const fetch = require('node-fetch');
import NavbarContainer from '../navbar/navbar_container';
import ShelvingItem from '../bookshelves/shelving_item';
import ReviewContainer from '../reviews/review_container';
import ReviewIndexContainer from '../reviews/review_index_container';

class BookShowItem extends React.Component {

  constructor(props){
    super(props);

    
    this.createShelving = this.props.createShelving.bind(this);
    this.deleteShelving = this.props.deleteShelving.bind(this);
    this.handleDeleteShelving = this.handleDeleteShelving.bind(this);
    this.handleCreateShelving = this.handleCreateShelving.bind(this);
    this.renderReadStatus = this.renderReadStatus.bind(this);
    this.renderMenuList = this.renderMenuList.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookshelves();
    this.props.fetchBook(this.props.match.params.bookId);
    this.props.fetchReviews();
  }

  handleDeleteShelving(id){ 
    this.props.deleteShelving(id);    
  }

  handleCreateShelving(shelving){
    if(this.props.defaultBookshelf.length > 0 && this.props.defaultBookshelvesIds.includes(shelving.bookshelf_id)){
      const shelvingId = this.props.book.shelving_ids.filter((id) => this.props.defaultBookshelf[0].shelving_ids.includes(id));
      this.props.deleteShelving(shelvingId);
      this.props.createShelving(shelving);
    } else {
      this.props.createShelving(shelving);
    }
    
      
  }

  
  renderReadStatus(){
    if(!this.props.book || this.props.bookshelves.length < 1) {
      return null;
    }
    
    const book = this.props.book;
    const statusBookshelves = this.props.bookshelves.slice(0,3);
    const readStatus = statusBookshelves.find((bookshelf) => {
      
      return bookshelf.book_ids.includes(book.id);
      
    });
    
    if(readStatus){
      
      return (
        <div className="shelving-container">
          <span className="read-status">
            {` √ ${readStatus.title}`}
          </span>
        </div>
      )
    } else {
      return (
        <div className="shelving-container">
          <span className="read-status-none">
            {`${this.props.bookshelves[2].title}`}
          </span>
        </div>
      )
    }
    
  }
  
  renderMenuList(){
    if (!this.props.book || this.props.bookshelves.length < 1) {
      
      return null;
    }
    
    const book = this.props.book;
    const shelvings = this.props.bookshelves.map((bookshelf, idx) => {
      if (bookshelf.book_ids.includes(book.id)) {
        
        const shelvingId = book.shelving_ids.filter((id) => bookshelf.shelving_ids.includes(id));
        
        return (
          <button className="shelving-button-container" key={idx + 1000} onClick={() => this.handleDeleteShelving(shelvingId[0])}>
            < ShelvingItem key={idx} bookshelf={bookshelf}
              onBookshelf={true} />
          </button>
        )
      } else {
        
        return (
          <button className="shelving-button-container" key={idx + 1000} onClick={() => this.handleCreateShelving({ bookshelf_id: bookshelf.id, book_id: book.id })}>
            < ShelvingItem key={idx} bookshelf={bookshelf}
              onBookshelf={false} />
          </button>
        )
      }
    });
    return shelvings;
  }
  
  toggleMenu(){
    if(document.getElementById('menu')){
      document.getElementById('menu').classList.toggle('show');
    }
  }

  showMenu(){

  }

  hideMenu(){

  }

  render() {
    if(!this.props.book || this.props.bookshelves.length < 1){
      
      return null;
    }
    

    return (
      <div className="book-show-main-container">
        <div className="top-bar-container">
          <NavbarContainer />
        </div>
        <div className="mybooks-link-container">
          <Link className="mybooks-link" to={`/bookshelves`}>
            <span className="mybooks-link-text">My Books</span>
          </Link>
        </div>
        <div className="book-show-head-container">
          <div className="book-show-cover-container">
            <img className="book-show-cover" src={this.props.book.cover_url} alt=""/>
            <div className="book-show-read-status">
              <div>
                {this.renderReadStatus()}
              </div>
              <button onClick={this.toggleMenu}>
                toggle
              </button>
            </div>
            <div className="menu" id="menu">
              {this.renderMenuList()}
            </div>
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
        <div className="book-show-main-divider-line"></div>
        
        <div className="book-show-reviews-box">
          <div className="book-show-review-form-container">
            <ReviewContainer book={this.props.book}/>
          </div>
          <div className="book-show-reviews-container">
            <ReviewIndexContainer book={this.props.book}/>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default BookShowItem;