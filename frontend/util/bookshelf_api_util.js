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

export const createBookshelf = bookshelf => (
  $.ajax({
    method: 'POST',
    url: 'api/bookshelves',
    data: {bookshelf}
  })
);

export const updateBookshelf = bookshelf => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookshelves/${bookshelf.id}`,
    data: {bookshelf}
  })
);

export const deleteBookshelf = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookshelves/${id}`
  })
);

export const createShelving = shelving => (
  $.ajax({
    method: 'POST',
    url: 'api/shelvings/',
    data: {shelving}
  })
);

export const deleteShelving = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/shelvings/${id}`
  })
);