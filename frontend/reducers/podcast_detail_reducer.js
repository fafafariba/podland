import { RECEIVE_PODCAST } from
'../actions/podcast_actions';
import merge from 'lodash/merge';

const defaultState = {
  podcast: {},
  errors: []
};

const PodcastDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PODCAST:
      newState.podcast = action.podcast;
      return newState;
    default:
      return state;
  }
};

export default PodcastDetailReducer;
