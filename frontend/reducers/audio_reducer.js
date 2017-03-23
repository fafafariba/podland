import { RECEIVE_AUDIO } from '../actions/audio_actions';
import merge from 'lodash/merge';

const AudioReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_AUDIO:
      return action.audio;
    default:
      return state;
  }
};

export default AudioReducer;
