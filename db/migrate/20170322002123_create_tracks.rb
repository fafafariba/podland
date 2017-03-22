class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.integer :episode_id, null: false
      t.integer :playlist_id, null: false
      t.timestamps
    end
    add_index :tracks, :episode_id
    add_index :tracks, :playlist_id
    add_index :tracks, [:episode_id, :playlist_id], unique: true
  end
end
