import { RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';
import { RECEIVE_SHELVING, REMOVE_SHELVING } from '../actions/bookshelf_actions';
import merge from 'lodash/merge';

const booksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_BOOKS:
      return action.books;

    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book});

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

    default:
      return state;
  }
};

export default booksReducer;
