@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :title, :description, :author, :pages, :year_published, :isbn_13, :cover_url, :shelving_ids, :bookshelf_ids, :review_ids, :reviewer_ids, :reader_ids
  end
end