import React from 'react';
import BookshelvesIndexItem from './bookshelves_index_item';

class BookshelvesIndex extends React.Component {

  componentDidMount() {

    this.props.fetchBookshelves();

  }

  render() {

    let bookshelves = this.props.bookshelves.map((bookshelf, idx) => {

      return <BookshelvesIndexItem key={idx} bookshelf={bookshelf} />
    });

    return (
      <>
        {bookshelves}
      </>
    );
  }
}

export default BookshelvesIndex;