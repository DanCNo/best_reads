class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, allow_blank: true
      t.integer :rating, null: false
      t.integer :author_id, null: false
      t.integer :book_id, null: false
      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :book_id
    add_index :reviews, [:author_id, :book_id], unique: true
  end
end
