import React from 'react';
import {Link} from 'react-router-dom';

const BookshelvesIndexItem = ({ bookshelf }) => {
  const bookCount = bookshelf.book_ids.length ? bookshelf.book_ids.length : 0;
  
  
  return (
    <span className="bookshelf-index-item-container">
      <Link to={`/bookshelves/${bookshelf.id}`} className="bookshelf-index-item">
        {`${bookshelf.title} (${bookCount})`}
      </Link>
    </span>
  );
};

export default BookshelvesIndexItem;