class Podcast < ApplicationRecord
  validates :name, :description, :category, :link, :image_url, presence: true
  validates :name, :link, :image_url, :thumb_url, uniqueness: true

  
end
