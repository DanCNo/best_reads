class Bookshelf < ApplicationRecord
  validates :title, :default, presence: true
  validates :title, uniqueness: {scope: :user_id}
  # validates :max_default_three

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id

  # def max_default_three
  #   if Bookshelf.all.count { |bookshelf| bookshelf.default } > 3;
  #     errors.add(:default, "Only 3 default bookcases allowed")
  #   end
  # end
end
