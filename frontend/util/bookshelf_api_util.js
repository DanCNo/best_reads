export const fetchBookshelves = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookshelves'
  })
);

export const fetchBookshelf = id => (
  $.ajax({
    method: 'GET',
    url: `api/bookshelves/${id}`
  })
);

export const createBookshelf = () => (
  $.ajax({
    method: 'POST',
    url: 'api/bookshelves'
  })
);

export const updateBookshelf = (bookshelf) => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookshelves/${bookshelf.id}`,
    data: {bookshelf}
  })
);

export const deleteBookshelf = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/bookshelves/${id}`
  })
);