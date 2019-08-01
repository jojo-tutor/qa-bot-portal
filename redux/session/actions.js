export const actionTypes = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  GET_SESSION: 'GET_SESSION',
  GET_SESSION_SUCCESS: 'GET_SESSION_SUCCESS',
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
