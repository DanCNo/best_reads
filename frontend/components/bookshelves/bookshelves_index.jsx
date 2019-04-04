import React from 'react';
import BookshelvesIndexItem from './bookshelves_index_item';

// the default bookshelves first displayed and separated from rest.
// is attached to user_id. user.bookshelves
// doesn't care which bookshelves it is displaying? will always display the
// first 3 as default ? 
// need to change the fetch in CDM. 
// will passdown bookshelf to bookshelfindexitem.

class BookshelvesIndex extends React.Component {

  componentDidMount() {

    this.props.fetchBookshelves();

  }

  render() {

    let bookshelves = this.props.bookshelves.map((bookshelf, idx) => {

      return <BookshelvesIndexItem key={idx} bookshelf={bookshelf} />
    });

    return (
      <div className="bookshelf-index-container">
        <div className="mybooks_text_container">
          <span className= "mybooks_text">My Bookshelves</span>
        </div>
        <div className="default-bookshelf-container">
          {bookshelves.slice(0,3)}
        </div>
        <div>
          {bookshelves.slice(3)}
        </div>
      </div>
      
    );
  }
}

export default BookshelvesIndex;