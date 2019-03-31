import { combineReducers } from 'redux';
import users from './users_reducer';
import books from './books_reducer';

export default combineReducers({
  users,
  books,
});