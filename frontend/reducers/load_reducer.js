import { RECEIVE_AUDIO } from '../actions/audio_actions';

const LoadReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_AUDIO:
      return true;
    default:
      return state;
  }
};

export default LoadReducer;
