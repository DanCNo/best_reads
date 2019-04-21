import React from 'react';
import { Link } from 'react-router-dom';
import BookIndexCover from './book-index-cover';



const BookIndexItem = ({ book, bookshelves }) => {
  if(!book){
    return null;
  }
  const displayBookshelves = bookshelves;
  const displayBookshelf_ids = book.bookshelf_ids;
  let shelfList;
  if(displayBookshelf_ids && Object.values(displayBookshelf_ids).length > 0 && 
    displayBookshelves && Object.values(displayBookshelves).length > 0){
    shelfList = displayBookshelf_ids.map((id) => {
      if(displayBookshelves[id]){
        return displayBookshelves[id].title;
      }
    }).join(", ");
  } else {
    shelfList = [];
  }

  return(
    <tr className="book-index-col-valsrow-container">
      <td className="book-index-col-cover-container">
        <Link to={`/books/${book.id}`}>
          <BookIndexCover book={book}/>
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