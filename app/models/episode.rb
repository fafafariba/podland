class Episode < ApplicationRecord
  validates :name, :description, :podcast_id, :audio_url, :date, :no,
    :duration, :image_url

  belongs_to :podcast
end
