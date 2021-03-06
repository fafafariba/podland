import { RECEIVE_ALL_PODCASTS,
  RECEIVE_FEATURED_PODCASTS, RECEIVE_POPULAR_PODCASTS } from
  '../actions/podcast_actions';
import merge from 'lodash/merge';

const defaultState = {
  all: [],
  featured: [],
  popular: []
};

const PodcastsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_PODCASTS:
      newState.all = action.all;
      return newState;
    case RECEIVE_FEATURED_PODCASTS:
      newState.featured = action.featured;
      return newState;
    case RECEIVE_POPULAR_PODCASTS:
      newState.popular = action.popular;
      return newState;
    default:
      return state;
  }
};

export default PodcastsReducer;
