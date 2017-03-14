import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_CURRENT_USER,
  errors
});

export const newUser = user => dispatch => (
  SessionAPIUtil.newUser(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))))
);
