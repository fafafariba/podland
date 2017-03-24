class Track < ApplicationRecord
  validates :episode, :playlist, presence: true
  validates_uniqueness_of :episode, scope: :playlist

  belongs_to :episode

  belongs_to :playlist

end
