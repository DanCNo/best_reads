class Bookshelf < ApplicationRecord
  validates :title, presence: true
  validates :default, inclusion: {in: [true, false]} 
  validates :title, uniqueness: {scope: :user_id}

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id

  has_many :shelvings,
  class_name: :Shelving,
  foreign_key: :bookshelf_id,
  dependent: :destroy

  has_many :books,
  through: :shelvings,
  source: :book

end
