import { RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION,
  RECEIVE_MESSAGES, CLEAR_MESSAGES } from '../actions/podcast_actions';
import merge from 'lodash/merge';

const defaultState = {
  subscriptions: {},
  messages: []
};

const SubscriptionsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      newState.subscriptions = action.subscriptions;
      return newState;
    case RECEIVE_SUBSCRIPTION:
      newState.subscriptions[action.subscription.id] =
        action.subscription.podcast;
      return newState;
    case REMOVE_SUBSCRIPTION:
      if (action.subscription){
        delete newState.subscriptions[action.subscription.id];
        return newState;
      }
    case RECEIVE_MESSAGES:
      newState.messages = action.messages;
      return newState;
    default:
      return state;
  }
};


export default SubscriptionsReducer;
