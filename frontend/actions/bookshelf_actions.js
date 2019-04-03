import * as ApiUtil from '../util/bookshelf_api_util';

export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES";
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

const receiveBookshelf = (bookshelf) => {
  return({
    type: RECEIVE_BOOKSHELF,
    bookshelf: bookshelf
  });
};

const receiveBookshelves = (bookshelves) => {
  return({
    type: RECEIVE_BOOKSHELVES,
    bookshelves: bookshelves
  });
};

const removeBookshelf = (id) => {
  return({
    type: REMOVE_BOOKSHELF,
    bookshelfId: id
  });
};

export const fetchBookshelves = () => dispatch => (
  ApiUtil.fetchBookshelves().then(bookshelves => dispatch(receiveBookshelves(bookshelves)))
);

export const fetchBookshelf = (id) => dispatch => (
  ApiUtil.fetchBookshelf(id).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
);

export const createBookshelf = (bookshelf) => dispatch => (
  ApiUtil.createBookshelf(bookshelf).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
);

export const updateBookshelf = (bookshelf) => dispatch => (
  ApiUtil.updateBookshelf(bookshelf).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
);

export const deleteBookshelf = (id) => dispatch => (
  ApiUtil.deleteBookshelf(id).then(bookshelf => dispatch(removeBookshelf(bookshelf.id)))
);