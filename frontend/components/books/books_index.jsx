import React from 'react';
import BookIndexItem from './books_index_item';

// needs to be able to take in props? instead of all books, can do user.books
// or bookshelf.books

class BookIndex extends React.Component {

  componentDidMount() {

    this.props.fetchBooks();
    
  }

  render() {

    let books = this.props.books.map((book, idx) => {
      
      return <BookIndexItem key={idx} book={book} />
    });

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
            {books}
          </tbody>
        </table>
        <div>

        </div>
      </>
    );
  }
}

export default BookIndex;