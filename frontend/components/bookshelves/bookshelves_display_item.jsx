import React from 'react';
import { Link } from 'react-router-dom';

const BookshelvesDisplayItem = ({ bookshelf }) => {

  return (
    <span className="bookshelf-display-item-container">
      <Link to={`/bookshelves/${bookshelf.id}`} className="bookshelf-display-item">
        {`${bookshelf.title}`}
      </Link>
    </span>
  );
};

export default BookshelvesDisplayItem;