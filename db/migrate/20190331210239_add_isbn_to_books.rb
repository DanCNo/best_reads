class AddIsbnToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :isbn_13, :integer
    add_index :books, :isbn_13
  end
end
