class ChangeColumnIsbn < ActiveRecord::Migration[5.2]
  def change
    change_column :books, :isbn_13, :integer, limit: 8
  end
end
