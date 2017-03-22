@playlists.each do |playlist|
  json.set! playlist.id do
    json.id playlist.id
    json.name playlist.name
  end
end
