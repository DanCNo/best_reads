import { RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';
import { RECEIVE_SHELVING, REMOVE_SHELVING, REMOVE_BOOKSHELF } from '../actions/bookshelf_actions';
import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';


const booksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  

  switch(action.type){
    case RECEIVE_BOOKS:
      return action.books;

    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book});

    case REMOVE_BOOKSHELF:
      newState = merge({}, state);
      const deletedBookshelf = action.bookshelf;

      const books = Object.values(newState);

      const bookshelfBooks = books.filter((book)=> book.bookshelf_ids.includes(deletedBookshelf.id));

      bookshelfBooks.forEach((book) => {
        book.bookshelf_ids = book.bookshelf_ids.filter(id => id !== deletedBookshelf.id);
        let count = book.reader_ids.filter((id) => id === deletedBookshelf.user_id).length;
        book.reader_ids = book.reader_ids.filter((id) => id !== deletedBookshelf.user_id);
        count -= 1;
        while(count > 0){
          book.reader_ids.push(deletedBookshelf.user_id);
          count --;
        }
      });
      return newState;

    case RECEIVE_SHELVING:
      newState = merge({}, state);
      const addToBookshelf = newState[action.shelving.book_id];
      addToBookshelf.bookshelf_ids.push(action.shelving.bookshelf_id);
      addToBookshelf.shelving_ids.push(action.shelving.id);
      return newState;

    case REMOVE_SHELVING:
      newState = merge({}, state);
      const removeFromBookshelf = newState[action.shelving.book_id];
      removeFromBookshelf.bookshelf_ids = removeFromBookshelf.bookshelf_ids.filter(id => id !== action.shelving.bookshelf_id);
      removeFromBookshelf.shelving_ids = removeFromBookshelf.shelving_ids.filter(id => id !== action.shelving.id);
      return newState; 

    case RECEIVE_REVIEW:
      newState = merge({}, state);
      const reviewedBook = newState[action.review.book_id];
      if(!reviewedBook.review_ids.includes(action.review.id)) reviewedBook.review_ids.push(action.review.id);
      if(!reviewedBook.reviewer_ids.includes(action.review.author_id)) reviewedBook.reviewer_ids.push(action.review.author_id);
      return newState;

    case REMOVE_REVIEW:
      newState = merge({}, state);
      const unreviewedBook = newState[action.review.book_id];
      unreviewedBook.review_ids = unreviewedBook.review_ids.filter(id => id !== action.review.id);
      unreviewedBook.reviewer_ids = unreviewedBook.reviewer_ids.filter(id => id !== action.review.author_id);
      return newState;

    default:
      return state;
  }
};

export default booksReducer;
