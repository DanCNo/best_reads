import { combineReducers } from 'redux';
import users from './users_reducer';
import books from './books_reducer';
import bookshelves from './bookshelves_reducer';
import reviews from './reviews_reducer';

export default combineReducers({
  users,
  books,
  bookshelves,
  reviews,
});