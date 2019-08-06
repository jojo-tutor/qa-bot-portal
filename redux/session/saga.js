import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import request from 'utils/request';
import { throwError } from 'redux/errors/actions';
import {
  actionTypes, loginUserSuccess, getSessionSuccess, signupUserSuccess, forgotPasswordSuccess,
} from './actions';

function* loginUser({ payload }) {
  try {
    const options = {
      method: 'post',
      url: '/api/login',
      data: payload,
    };
    const data = yield call(request(options, put));
    yield put(loginUserSuccess(data));
  } catch (error) {
    yield all([
      put(throwError(error)),
    ]);
  }
}

function* signupUser({ payload }) {
  try {
    const options = {
      method: 'post',
      url: '/api/signup',
      data: payload,
    };
    const data = yield call(request(options, put));
    yield put(signupUserSuccess(data));
  } catch (error) {
    yield all([
      put(throwError(error)),
    ]);
  }
}

function* forgotPassword({ payload }) {
  try {
    const options = {
      method: 'post',
      url: '/api/forgot',
      data: payload,
    };
    const data = yield call(request(options, put));
    yield put(forgotPasswordSuccess(data));
  } catch (error) {
    yield all([
      put(throwError(error)),
    ]);
  }
}

function* getSession({ payload }) {
  try {
    const options = {
      method: 'get',
      url: '/api/session',
      data: payload,
    };
    const data = yield call(request(options, put));
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
    takeLatest(actionTypes.GET_SESSION, getSession),
  ]);
}

export default root;
