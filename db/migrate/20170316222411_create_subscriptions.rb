class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :podcast_id, null: false
      t.timestamps
    end
    add_index :subscriptions, :user_id
    add_index :subscriptions, :podcast_id
    add_index :subscriptions, [:user_id, :podcast_id], unique: true
  end
end
