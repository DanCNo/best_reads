class Book < ApplicationRecord
  validates :title, :description, :author, :pages, :year_published, :isbn_13, presence: true
  
end
