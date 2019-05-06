import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from '../actions/session_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_SHELVING, REMOVE_SHELVING, RECEIVE_BOOKSHELF, REMOVE_BOOKSHELF } from '../actions/bookshelf_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    
    case RECEIVE_USERS:
      return action.users;

    case RECEIVE_BOOKSHELF:
      newState = ({}, state);
      const addBookshelf = newState[action.bookshelf.user_id];
      addBookshelf.bookshelf_ids.push(action.bookshelf.id);
      return newState;

    case REMOVE_BOOKSHELF:
      newState = ({}, state);
      const removeBookshelf = newState[action.bookshelf.user_id];
      removeBookshelf.bookshelf_ids = removeBookshelf.bookshelf_ids.filter(id => id !== action.bookshelf.id);
      return newState;

    // case RECEIVE_SHELVING:
    //   newState = ({}, state);
    //   const addShelvingBook = newState[action.shelving.creator.id];
    //   addShelvingBook.book_ids.push(action.shelving.book_id);
    //   return newState;

    // case REMOVE_SHELVING:
    //   newState = ({}, state);
    //   const removeShelvingBook = newState[action.shelving.creator.id];

    //   removeShelvingBook.book_ids = removeShelvingBook.book_ids.filter(id => id !== action.shelving.book_id);
    //   return newState;

    case RECEIVE_REVIEW:
      newState = ({}, state);
      const addAuthor = newState[action.review.author_id];
      debugger
      if(!addAuthor.review_ids.includes(action.review.id)) addAuthor.review_ids.push(action.review.id);
      if(!addAuthor.reviewed_book_ids.includes(action.review.book_id)) addAuthor.reviewed_book_ids.push(action.review.book_id);
      return newState;

    case REMOVE_REVIEW:
      newState = ({}, state);
      const removeAuthor = newState[action.review.author_id];
      removeAuthor.review_ids = removeAuthor.review_ids.filter(id => id !== action.review.id);
      removeAuthor.reviewed_book_ids = removeAuthor.reviewed_book_ids.filter(id => id !== action.review.book_id);
      return newState;

    default:
      return state;
  }
};

export default usersReducer;

