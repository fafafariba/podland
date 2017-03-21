class Episode < ApplicationRecord
  validates :name, :description, :podcast_id, :audio_url, :date, :no,
    :duration, presence: true

  belongs_to :podcast
end
