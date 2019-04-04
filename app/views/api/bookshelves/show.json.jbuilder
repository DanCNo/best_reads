json.bookshelf do
  json.partial! "api/bookshelves/bookshelf", bookshelf: @bookshelf
end

json.book do
  json.partial! "api/bookshelves/book", books: @books
end

