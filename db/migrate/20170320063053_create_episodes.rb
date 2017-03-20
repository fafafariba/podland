class CreateEpisodes < ActiveRecord::Migration[5.0]
  def change
    create_table :episodes do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :podcast_id, null: false
      t.string :audio_url, null: false
      t.date :date, null: false
      t.integer :no
      t.string :duration, null: false
      t.string :image_url
      t.timestamps
    end
    add_index :episodes, :podcast_id
  end
end
