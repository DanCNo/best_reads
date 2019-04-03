class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.string :title, null: false
      t.boolean :default, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :bookshelves, :user_id
    add_index :bookshelves, [:title, :user_id], unique: true
  end
end
