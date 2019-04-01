import React from 'react';
import { Link } from 'react-router-dom';

const BookIndexItem = ({ book }) => (
  <div>
    <li>
      <Link to={`/books/${book.id}`}>{book.title}</Link>
    </li>
  </div>
);

export default BookIndexItem;