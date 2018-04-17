import {
  AUTH_USER,
  LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
}