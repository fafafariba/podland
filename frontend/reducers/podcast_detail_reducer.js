import { RECEIVE_PODCAST, RECEIVE_ERRORS, CLEAR_ERRORS } from
'../actions/podcast_actions';
import merge from 'lodash/merge';

const defaultState = {
  podcastDetail: {},
  errors: []
};

const PodcastDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PODCAST:
      newState.podcastDetail = action.podcast;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default PodcastDetailReducer;
