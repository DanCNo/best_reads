import React from 'react';
import { Link } from 'react-router-dom';
import BookIndexCover from './book-index-cover';



const BookIndexItem = ({ book, bookshelves }) => {
  if(!book){
    return null;
  }
  const displayBookshelves = bookshelves;
  let shelfList;
  if(displayBookshelves && displayBookshelves.length > 0){
    shelfList = book.bookshelf_ids.map((id) => {
      return displayBookshelves[id].title;
    }).join(", ");
  } else {
    shelfList = [];
  }

  return(
    <tr className="book-index-col-valsrow-container">
      <td className="book-index-col-cover-container">
        <Link to={`/books/${book.id}`}>
          <BookIndexCover isbn={book.isbn_13}/>
        </Link>
      </td >
      <td className="book-index-col-title-container">
        <Link className="book-index-link" to={`/books/${book.id}`}>
          {book.title}
        </Link>
        
      </td>
      <td className="book-index-col-author-container">
        {book.author}
      </td>
      <td className="book-index-col-rating-container">
        1-5 rating
      </td>
      <td className="book-index-col-shelves-container">
        {shelfList}
      </td>
    </tr>
  );
};

export default BookIndexItem;