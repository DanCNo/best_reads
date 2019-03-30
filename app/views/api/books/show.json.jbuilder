json.book do
  json.extract! @book, :id, :title, :description, :author, :pages, :year_published
end