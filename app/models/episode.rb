class Episode < ApplicationRecord
  validates :name, :description, :podcast_id, :audio_url, :date, :no,
    :duration, :image_url, presence: true

  belongs_to :podcast
end
