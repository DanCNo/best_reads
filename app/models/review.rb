class Review < ApplicationRecord
  validates :rating, presence: true
  validates :book_id, uniqueness: {scope: :author_id}
  
  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :book,
  class_name: :Book,
  foreign_key: :book_id
end