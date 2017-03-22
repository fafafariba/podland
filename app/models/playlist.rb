class Playlist < ApplicationRecord
  validates :name, :user, presence: true

  has_many :tracks, dependent: :destroy

  belongs_to :user

  has_many :podcasts,
  through: :tracks,
  source: :podcast

end
