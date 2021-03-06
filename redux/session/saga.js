import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import request from 'utils/request';
import { throwError } from 'redux/errors/actions';
import {
  actionTypes, loginUserSuccess, getSessionSuccess,
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
    takeLatest(actionTypes.GET_SESSION, getSession),
  ]);
}

export default root;
