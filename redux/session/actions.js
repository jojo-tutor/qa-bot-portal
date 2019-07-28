export const actionTypes = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',
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
