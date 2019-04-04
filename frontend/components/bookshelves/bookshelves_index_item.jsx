import React from 'react';
import {Link} from 'react-router-dom'
// convert div to link to show bookshelf and num of books inside ()



const BookshelvesIndexItem = ({ bookshelf }) => {
  const bookCount = bookshelf.book_ids.size ? bookshelf.book_ids.size : 0;

  return (
    <div className="bookshelf-index-item-container">
      <div className="bookshelf-index-item">{`${bookshelf.title} (${bookCount})`}</div>
    </div>
  );
};

export default BookshelvesIndexItem;