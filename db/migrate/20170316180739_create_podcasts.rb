class CreatePodcasts < ActiveRecord::Migration[5.0]
  def change
    create_table :podcasts do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.string :link, null: false
      t.string :image_url, null: false
      t.string :thumb_url, null: false
      t.timestamps
    end
    add_index :podcasts, :name, unique: true
  end
end
