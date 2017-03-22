json.extract! @playlist, :id, :name
json.partial! 'api/episodes/episode', episode: playlist.episode
