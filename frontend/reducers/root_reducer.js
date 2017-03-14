import { combineReducer } from 'redux';

import SessionReducer from './session_reducer';

const RootReducer = combineReducer ({
  session: SessionReducer
});

export default RootReducer;
