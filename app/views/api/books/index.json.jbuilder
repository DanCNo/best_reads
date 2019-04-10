@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :title, :description, :author, :pages, :year_published, :isbn_13, :shelving_ids, :bookshelf_ids
  end
end