export const actionTypes = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',
  GET_SESSION: 'GET_SESSION',
  GET_SESSION_SUCCESS: 'GET_SESSION_SUCCESS',
  GET_SESSION_ERROR: 'GET_SESSION_ERROR',
};

export function loginUser(payload) {
  return {
    type: actionTypes.LOGIN_USER,
    payload,
  };
}

export function loginUserSuccess(payload) {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload,
  };
}

export function loginUserError(payload) {
  return {
    type: actionTypes.LOGIN_USER_ERROR,
    payload,
  };
}

export function getSession(payload) {
  return {
    type: actionTypes.GET_SESSION,
    payload,
  };
}

export function getSessionSuccess(payload) {
  return {
    type: actionTypes.GET_SESSION_SUCCESS,
    payload,
  };
}

export function getSessionError(payload) {
  return {
    type: actionTypes.GET_SESSION_ERROR,
    payload,
  };
}
