class AddUrLtoBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :cover_url, :string
    add_index :books, :cover_url
  end
end
