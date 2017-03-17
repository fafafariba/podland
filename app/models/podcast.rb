class Podcast < ApplicationRecord
  validates :name, :description, :category, :link, :image_url, presence: true
  validates :name, :link, :image_url, :thumb_url, uniqueness: true

  has_many :subscriptions

  has_many :subscribers,
  through: :subscriptions,
  source: :user

  def popularity
    self.subscribers.count
  end
end
