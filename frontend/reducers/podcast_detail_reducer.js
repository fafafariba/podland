import { RECEIVE_PODCAST, RECEIVE_ERRORS, CLEAR_ERRORS } from
'../actions/podcast_actions';
import merge from 'lodash/merge';

const PodcastDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PODCAST:
      newState.podcast = action.podcast;
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
