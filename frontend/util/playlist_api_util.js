
export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: "api/playlists"
  })
);

export const addPlaylist = name => (
  $.ajax({
    method: 'POST',
    data: { name },
    url: `api/playlists/`
  })
);

export const deletePlaylist = (playlistId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}`
  })
);

export const addTrack = episodeId => (
  $.ajax({
    method: 'POST',
    data: { episode_id: episodeId },
    url: 'api/tracks'
  })
);

export const deleteTrack = trackId => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}`
  })
);
