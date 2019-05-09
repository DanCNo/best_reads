@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.extract! bookshelf, :id, :title, :default, :user_id, :book_ids, :shelving_ids
  end
end
