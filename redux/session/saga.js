import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import request from 'utils/request';
import { addNotification } from 'redux/notifications/actions';
import {
  actionTypes, loginUserSuccess, loginUserError,
} from './actions';

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
    yield all([
      put(loginUserError(error)),
      put(addNotification({ ...error, type: 'error' })),
    ]);
  }
}

function* root() {
  yield all([
    takeLatest(actionTypes.LOGIN_USER, loginUser),
  ]);
}

export default root;
