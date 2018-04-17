import history from '../routes/history';

import {
  AUTH_USER,
  LOGOUT_USER
} from './types';

export function loginUser({email, password}) {
  return function(dispatch) {
    localStorage.setItem('token', '123456');
    dispatch({ type: AUTH_USER });
    history.push('/home');
  }
}

export function logoutUser() {
  return function(dispatch) {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT_USER });
  }
}