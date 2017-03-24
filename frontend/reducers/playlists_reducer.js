import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLISTS_MESSAGES, ADD_PLAYLIST,
  DELETE_PLAYLIST, CLEAR_MESSAGES, ADD_TRACK, DELETE_TRACK }
  from '../actions/playlist_actions';
import merge from 'lodash/merge';

const defaultState = {
  playlists: {},
  messages: []
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
    case ADD_TRACK:
      let targetPlaylist = newState.playlists[action.track.playlist_id];
      targetPlaylist.episodes.push(action.track.episode);
      return newState;
    case DELETE_TRACK:
      keyId = action.track.playlist_id;
      let targetId = action.track.episode.id;
      let targetEpisodes = newState.playlists[keyId].episodes;
      newState.playlists[keyId].episodes = targetEpisodes.filter(e => e.id !== targetId);
      return newState;
    case RECEIVE_PLAYLISTS_MESSAGES:
      newState.messages = action.msg;
      return newState;
    case CLEAR_MESSAGES:
      newState.messages = [];
      return newState;
    default:
      return state;
  }
};

export default PlaylistsReducer;
