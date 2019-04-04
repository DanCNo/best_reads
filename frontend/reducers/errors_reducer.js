import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import bookshelf from './bookshelf_errors_reducer';

export default combineReducers({
  session,
  bookshelf,
});