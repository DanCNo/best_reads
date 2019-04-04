class Shelving < ApplicationRecord
  validates :book_id, :bookshelf_id, presence: true
  validates :book_id, uniqueness: {scope: :bookshelf_id}

  belongs_to :book,
  class_name: :Book,
  foreign_key: :book_id

  belongs_to :bookshelf,
  class_name: :Bookshelf,
  foreign_key: :bookshelf_id

  has_one :creator,
  through: :bookshelf,
  source: :user
  
end
