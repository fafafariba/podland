import { RECEIVE_SUBSCRIPTIONS } from '../actions/podcast_actions';
import merge from 'lodash/merge';

const defaultState = {
  subscriptions: [],
  errors: []
};

const SubscriptionsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      newState.subscriptions = action.subscriptions;
      return newState;
    default:
      return state;
  }
};


export default SubscriptionsReducer;
