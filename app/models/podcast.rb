class Podcast < ApplicationRecord
  validates :name, :description, :category, :link, :image_url, presence: true
  validates :name, :link, :image_url, :thumb_url, uniqueness: true

  has_many :subscriptions

  has_many :episodes

  has_many :subscribers,
  through: :subscriptions,
  source: :user

  def self.popular
    self.select("podcasts.id, podcasts.name, podcasts.category,
    podcasts.description, podcasts.image_url, podcasts.link,
    podcasts.thumb_url, COUNT(subscriptions.podcast_id) AS sub_count")
    .joins(:subscriptions)
    .group("podcasts.id")
    .order("sub_count DESC")
    .limit(10)
  end

  def self.episodes
    self.includes(:episodes).order(date: :desc)
  end

  def self.featured
    self.order("RANDOM()").limit(8)
  end

  def popularity
    self.subscribers.count
  end


end
