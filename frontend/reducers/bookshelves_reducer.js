import {
  RECEIVE_BOOKSHELF,
  RECEIVE_BOOKSHELVES,
  REMOVE_BOOKSHELF,
  RECEIVE_SHELVING,
  REMOVE_SHELVING
} from '../actions/bookshelf_actions';
import merge from 'lodash/merge';

const bookshelvesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){

    case RECEIVE_BOOKSHELVES:
      return action.bookshelves;

    case RECEIVE_BOOKSHELF:
      
      return merge({}, state, {[action.bookshelf.id]: action.bookshelf});

    case REMOVE_BOOKSHELF:
      newState = merge({}, state);
      delete newState[action.bookshelfId];
      return newState;

    case RECEIVE_SHELVING:
      newState = merge({}, state);
      const addToBookshelf = newState[action.shelving.bookshelf_id];
      addToBookshelf.book_ids.push(action.shelving.book_id);
      addToBookshelf.shelving_ids.push(action.shelving.id);
      return newState;

    case REMOVE_SHELVING:
      newState = merge({}, state);
      const removeFromBookshelf = newState[action.shelving.bookshelf_id];
      removeFromBookshelf.book_ids = removeFromBookshelf.book_ids.filter(id => id !== action.shelving.book_id);
      removeFromBookshelf.shelving_ids = removeFromBookshelf.shelving_ids.filter(id => id !== action.shelving.id);
      return newState;
      
    default:
      return state;
  }
};

export default bookshelvesReducer;