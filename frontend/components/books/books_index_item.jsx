import React from 'react';
import { Link } from 'react-router-dom';

const BookIndexItem = ({ book }) => (
  <li>
    <Link to={`/books/${book.id}`}>{book.title}</Link>
  </li>
);

export default BookIndexItem;