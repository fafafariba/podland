import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLISTS_ERRORS, ADD_PLAYLIST,
  DELETE_PLAYLIST, CLEAR_ERRORS } from '../actions/playlist_actions';
import merge from 'lodash/merge';

const defaultState = {
  playlists: {},
  errors: []
};

const PlaylistsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      newState.playlists = action.playlists;
      return newState;
    case ADD_PLAYLIST:
      let keyId = action.playlist.id;
      newState.playlists[keyId] = action.playlist;
      return newState;
    case DELETE_PLAYLIST:
      keyId = action.playlist.id;
      delete newState.playlists[keyId];
      return newState;
    case RECEIVE_PLAYLISTS_ERRORS:
      newState.errors = action.errors;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default PlaylistsReducer;
