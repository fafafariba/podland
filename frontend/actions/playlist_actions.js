import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const ADD_TRACK = 'ADD_TRACK';
export const DELETE_TRACK = 'DELETE_TRACK';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


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

const delTrack = track => ({
  type: DELETE_TRACK,
  track
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_ERRORS,
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
  .fail(errors => dispatch(receiveErrors(errors)))
);

export const deleteTrack = trackId => dispatch => (
  PlaylistAPIUtil.deleteTrack(trackId)
  .then(track => dispatch(delTrack(track)))
);

export const addTrack = episodeId => dispatch => (
  PlaylistAPIUtil.addTrack(episodeId)
  .then(track => dispatch(newTrack(track)))
  .fail(errors => dispatch(receiveErrors(errors)))

);

export const fetchTracks = tracks => dispatch => (
  () => dispatch(receiveTracks(tracks))
);
