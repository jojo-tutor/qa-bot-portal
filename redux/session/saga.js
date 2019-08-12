import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import request from 'utils/request';
import { throwError } from 'redux/errors/actions';
import {
  actionTypes, loginUserSuccess, getSessionSuccess, validateTokenSuccess,
  signupUserSuccess, forgotPasswordSuccess, validateSignupSuccess, resetPasswordSuccess,
} from './actions';
import { addNotification } from '../notifications/actions';

function* loginUser({ payload }) {
  try {
    const options = {
      method: 'post',
      url: '/api/login',
      data: payload,
    };
    const data = yield call(request(options));
    yield put(loginUserSuccess(data));
  } catch (error) {
    yield put(throwError(error));
  }
}

function* signupUser({ payload }) {
  try {
    const options = {
      method: 'post',
      url: '/api/signup',
      data: payload,
    };
    const data = yield call(request(options));
    yield all([
      put(signupUserSuccess(data)),
      put(addNotification({
        type: 'success',
        duration: 20,
        message: 'You have successfully sign-up! Please check your email for confirmation.',
      })),
    ]);
  } catch (error) {
    yield put(throwError(error));
  }
}

function* validateSignup({ payload }) {
  const { token } = payload;
  try {
    const options = {
      method: 'put',
      url: `/api/signup/validate?token=${token}`,
      data: payload,
    };
    const data = yield call(request(options));
    yield put(validateSignupSuccess(data));
  } catch (error) {
    yield put(throwError(error));
  }
}

function* validateToken({ payload }) {
  const { token } = payload;
  try {
    const options = {
      method: 'get',
      url: `/api/token/validate?token=${token}`,
      data: payload,
    };
    const data = yield call(request(options));
    yield put(validateTokenSuccess(data));
  } catch (error) {
    yield put(throwError(error));
  }
}

function* forgotPassword({ payload }) {
  try {
    const options = {
      method: 'post',
      url: '/api/forgot-password',
      data: payload,
    };
    const data = yield call(request(options));
    yield all([
      put(forgotPasswordSuccess(data)),
      put(addNotification({
        type: 'success',
        duration: 20,
        message: 'Forgot password successfully submitted! Please check your email to reset your password.',
      })),
    ]);
  } catch (error) {
    yield put(throwError(error));
  }
}

function* resetPassword({ payload }) {
  try {
    const options = {
      method: 'put',
      url: '/api/reset-password',
      data: payload,
    };
    const data = yield call(request(options));
    yield all([
      put(resetPasswordSuccess(data)),
      put(addNotification({
        type: 'success',
        duration: 20,
        message: 'You have successfully reset your password! Please proceed to login page to continue.',
      })),
    ]);
  } catch (error) {
    yield put(throwError(error));
  }
}

function* getSession({ payload }) {
  try {
    const options = {
      method: 'get',
      url: '/api/session',
      data: payload,
    };
    const data = yield call(request(options));
    yield put(getSessionSuccess(data));
  } catch (error) {
    yield put(throwError(error));
  }
}

function* root() {
  yield all([
    takeLatest(actionTypes.LOGIN_USER, loginUser),
    takeLatest(actionTypes.SIGNUP_USER, signupUser),
    takeLatest(actionTypes.FORGOT_PASSWORD, forgotPassword),
    takeLatest(actionTypes.RESET_PASSWORD, resetPassword),
    takeLatest(actionTypes.VALIDATE_SIGNUP, validateSignup),
    takeLatest(actionTypes.VALIDATE_TOKEN, validateToken),
    takeLatest(actionTypes.GET_SESSION, getSession),
  ]);
}

export default root;
