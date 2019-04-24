import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });

    case RECEIVE_REVIEW:
      newState = ({}, state);
      const addAuthor = newState[action.review.author_id];
      addAuthor.review_ids.push(action.review.id);
      addAuthor.reviewed_book_ids.push(action.review.id);
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

