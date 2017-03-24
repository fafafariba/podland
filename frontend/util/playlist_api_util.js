
export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: "api/playlists"
  })
);

export const addPlaylist = name => (
  $.ajax({
    method: 'POST',
    data: { playlist: { name } },
    url: `api/playlists/`
  })
);

export const deletePlaylist = (playlistId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}`
  })
);

export const addTrack = (playlistId, episodeId) => (
  $.ajax({
    method: 'POST',
    data: { track: {playlist_id: playlistId, episode_id: episodeId} },
    url: 'api/tracks'
  })
);

export const deleteTrack = (playlistId, episodeId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/1?playlist_id=${playlistId}&episode_id=${episodeId}`
  })
);
