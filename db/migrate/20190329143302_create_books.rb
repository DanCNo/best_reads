class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :author, null: false
      t.integer :pages, null: false
      t.integer :year_published, null: false
      t.timestamps
    end
    add_index :books, :title
  end
end
