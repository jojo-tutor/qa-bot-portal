import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import request from 'utils/request';
import { addNotification } from 'redux/notifications/actions';
import { throwError } from 'redux/errors/actions';
import {
  actionTypes, getUsersGridSuccess, getUsersGridError,
} from './actions';

function* getUsersGrid({ payload }) {
  try {
    const options = {
      method: 'get',
      url: '/api/users',
      params: payload,
    };
    const data = yield call(request(options, put));
    yield put(getUsersGridSuccess(data));
  } catch (error) {
    yield all([
      put(getUsersGridError(error)),
      put(throwError(error)),
    ]);
  }
}

function* root() {
  yield all([
    takeLatest(actionTypes.GET_USERS_GRID, getUsersGrid),
  ]);
}

export default root;
