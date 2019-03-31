import * as APIUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";

export const receiveBooks = books => {
  return({
    type: RECEIVE_BOOKS,
    books,
  });
};

export const receiveBook = book => {
  return({
    type: RECEIVE_BOOK,
    book,
  });
};

export const fetchBooks = () => dispatch => (
  APIUtil.fetchBooks().then(books => (
    dispatch(receiveBooks(books))
  ))
);

export const fetchBook = (id) => dispatch => (
  APIUtil.fetchBook(id).then(book => (
    dispatch(receiveBook(book))
  ))
);