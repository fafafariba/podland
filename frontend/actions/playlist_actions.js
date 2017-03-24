import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const ADD_TRACK = 'ADD_TRACK';
export const DELETE_TRACK = 'DELETE_TRACK';
export const RECEIVE_PLAYLISTS_MESSAGES = 'RECEIVE_PLAYLISTS_MESSAGES';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';


const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

const newPlaylist = playlist => ({
  type: ADD_PLAYLIST,
  playlist
});

const delPlaylist = playlist => ({
  type: DELETE_PLAYLIST,
  playlist
});

const newTrack = track => ({
  type: ADD_TRACK,
  track
});

const delTrack = track => {
  return {
  type: DELETE_TRACK,
  track
};
};

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

const receivePlaylistsMessages = msg => ({
  type: RECEIVE_PLAYLISTS_MESSAGES,
  msg
});

export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});


export const fetchPlaylists = () => dispatch => (
  PlaylistAPIUtil.fetchPlaylists()
  .then(playlists => dispatch(receivePlaylists(playlists)))
);

export const deletePlaylist = playlistId => dispatch => (
  PlaylistAPIUtil.deletePlaylist(playlistId)
  .then(playlist => dispatch(delPlaylist(playlist)))
);

export const addPlaylist = name => dispatch => (
  PlaylistAPIUtil.addPlaylist(name)
  .then(playlist => dispatch(newPlaylist(playlist)))
  .fail(errors => dispatch(receivePlaylistsMessages(errors)))
);

export const deleteTrack = (playlistId, episodeId) => dispatch => (
  PlaylistAPIUtil.deleteTrack(playlistId, episodeId)
  .then(track => dispatch(delTrack(track)))
);

export const addTrack = (playlistId, episodeId) => dispatch => (
  PlaylistAPIUtil.addTrack(playlistId, episodeId)
  .then(track => dispatch(newTrack(track)))
  .then(() => dispatch(receivePlaylistsMessages(["Successfully added."])))
  .fail(errors => dispatch(receivePlaylistsMessages(errors.responseJSON)))
);
