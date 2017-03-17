import { RECEIVE_PODCASTS, RECEIVE_ERRORS, CLEAR_ERRORS } from
'../actions/podcast_actions';
import merge from 'lodash/merge';

const PodcastsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PODCASTS:
      newState.podcasts = action.podcasts;
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

export default PodcastsReducer;
