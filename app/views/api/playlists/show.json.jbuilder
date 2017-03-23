json.extract! @playlist, :id, :name
json.episodes @playlist.episodes do |episode|
  json.partial! 'api/episodes/episode', episode: episode
end
