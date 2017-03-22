class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :playlists, :user_id
    add_index :playlists, [:name, :user_id], unique: true
  end
end
