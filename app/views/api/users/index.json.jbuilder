@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :bookshelf_ids, :book_ids, :review_ids, :reviewed_book_ids
  end
end