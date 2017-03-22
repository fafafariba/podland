class Playlist < ApplicationRecord
  validates :name, :user, presence: true

  has_many :tracks, dependent: :destroy

  belongs_to :user

  has_many :episodes,
  through: :tracks,
  source: :episode

end
