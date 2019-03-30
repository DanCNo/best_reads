class Book < ApplicationRecord
  validates :title, :description, :author, :pages, :year_published, presence: true
  
end
