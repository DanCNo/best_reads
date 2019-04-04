import { RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';
import { RECEIVE_BOOKSHELF} from '../actions/bookshelf_actions';
import merge from 'lodash/merge';

const booksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_BOOKS:
      return action.books;

    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book});

    case RECEIVE_BOOKSHELF:
      let books = action.response.book || {};
      return books;

    default:
      return state;
  }
};

export default booksReducer;
