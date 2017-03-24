class Track < ApplicationRecord
  validates :episode, :playlist, presence: true
  validates_uniqueness_of :episode, scope: :playlist

  belongs_to :episode

  belongs_to :playlist

  def self.find_by_ids(playlist_id, episode_id)
    Track.(["playlist_id = ? and episode_id = ?", playlist_id, episode_id])
  end

end
