class Book < ApplicationRecord
  validates :title, :description, :author, :pages, :year_published, :isbn_13, :cover_url, presence: true
  
  has_many :shelvings,
  class_name: :Shelving,
  foreign_key: :book_id

  has_many :bookshelves,
  through: :shelvings,
  source: :bookshelf

  has_many :reviews,
  class_name: :Review,
  foreign_key: :book_id
end
