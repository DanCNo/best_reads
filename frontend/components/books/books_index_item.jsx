import React from 'react';
import { Link } from 'react-router-dom';

const BookIndexItem = ({ book }) => {
  
  return(
    <tr>
      <td>
        <Link to={`/books/${book.id}`}>
          <img src="" alt=""/>
        </Link>
      </td>
      <td>
        {book.title}
      </td>
      <td>
        {book.author}
      </td>
      <td>
        
      </td>
      <td>
        
      </td>
    {/* <div>
      <li>
        <Link to={`/books/${book.id}`}>{book.title}</Link>
      </li>
    </div> */}
    </tr>
  );
};

export default BookIndexItem;