class Playlist < ApplicationRecord
  validates :name, :user, presence: true
  validates_uniqueness_of :name, scope: :user


  has_many :tracks, dependent: :destroy

  belongs_to :user

  has_many :episodes,
  through: :tracks,
  source: :episode

end
