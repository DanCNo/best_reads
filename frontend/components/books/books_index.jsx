import React from 'react';
import BookIndexItem from './books_index_item';

class BookIndex extends React.Component {

  componentDidMount() {
    
    if(!this.props.bookshelf_books){
      this.props.fetchBooks();
    }
    
  }

  render() {
    let displayBooks;
    const bookshelves = this.props.bookshelves;
    if(this.props.bookshelf_books){

      displayBooks = Object.values(this.props.bookshelf_books).map((book, idx) => {
        
        return <BookIndexItem key={idx} book={book} bookshelves={bookshelves}/>
      });

    } else if(this.props.books.length > 0 && this.props.history && this.props.history.location.pathname ==='/bookshelves'){
        
        displayBooks = this.props.books.filter(book => this.props.currentUser.book_ids.includes(book.id)).map((book, idx) => {
          
          return <BookIndexItem key={idx} book={book} bookshelves={bookshelves}/>
        });
    } else {
      displayBooks = this.props.books.map((book, idx) => {
        
        return <BookIndexItem key={idx} book={book} bookshelves={bookshelves}/>
      });

    }
  
    return (
      <>
        <table className="book-index-table">
          <thead>
            <tr className="book-index-col-namesrow-container">
              <th className="book-index-col-hcover-container">
                cover
              </th>
              <th className="book-index-col-htitle-container">
                title
              </th>
              <th className="book-index-col-hauthor-container">
                author
              </th>
              <th className="book-index-col-hrating-container">
                rating
              </th>
              <th className="book-index-col-hshelves-container">
                shelves
              </th>
            </tr>
          </thead>
          <tbody>
            {displayBooks}
          </tbody>
        </table>
        <div>

        </div>
      </>
    );
  }
}

export default BookIndex;