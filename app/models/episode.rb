class Episode < ApplicationRecord
  validates :name, :description, :podcast_id, :audio_url, :date, :no,
    :duration, presence: true

  belongs_to :podcast

  has_many :tracks, dependent: :destroy

  has_many :playlists,
  through: :tracks,
  source: :playlist

  has_many :users,
  through: :playlists,
  source: :user
  
end
