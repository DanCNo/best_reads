import { RECEIVE_BOOKSHELF_ERRORS } from '../actions/bookshelf_actions';
import { CLEAR_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKSHELF_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}