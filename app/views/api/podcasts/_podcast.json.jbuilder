json.extract! podcast, :id, :name, :description, :category, :image_url,
:thumb_url, :link
json.episodes podcast.episodes_desc do |episode|
  json.partial! 'api/episodes/episode', episode: episode
end
