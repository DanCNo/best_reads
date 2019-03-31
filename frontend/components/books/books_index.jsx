import React from 'react';
import BookIndexItem from './books_index_item';

class BookIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    let books = this.props.books.map((book, idx) => {
      return <BookIndexItem key={idx} book={book} />
    });

    return (
      <div>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
}

export default BookIndex;