export const actionTypes = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  SIGNUP_USER: 'SIGNUP_USER',
  SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
  VALIDATE_SIGNUP: 'VALIDATE_SIGNUP',
  VALIDATE_SIGNUP_SUCCESS: 'VALIDATE_SIGNUP_SUCCESS',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
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

export function signupUser(payload) {
  return {
    type: actionTypes.SIGNUP_USER,
    payload,
  };
}

export function signupUserSuccess(payload) {
  return {
    type: actionTypes.SIGNUP_USER_SUCCESS,
    payload,
  };
}

export function validateSignup(payload) {
  return {
    type: actionTypes.VALIDATE_SIGNUP,
    payload,
  };
}

export function validateSignupSuccess(payload) {
  return {
    type: actionTypes.VALIDATE_SIGNUP_SUCCESS,
    payload,
  };
}

export function forgotPassword(payload) {
  return {
    type: actionTypes.FORGOT_PASSWORD,
    payload,
  };
}

export function forgotPasswordSuccess(payload) {
  return {
    type: actionTypes.FORGOT_PASSWORD_SUCCESS,
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
