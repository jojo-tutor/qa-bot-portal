import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import request from 'utils/request';
import { throwError } from 'redux/errors/actions';
import {
  actionTypes, getUsersGridSuccess,
} from './actions';

function* getUsersGrid({ payload }) {
  try {
    const options = {
      method: 'get',
      url: '/api/users',
      params: payload,
    };
    const data = yield call(request(options));
    yield put(getUsersGridSuccess(data));
  } catch (error) {
    yield put(throwError(error));
  }
}

function* root() {
  yield all([
    takeLatest(actionTypes.GET_USERS_GRID, getUsersGrid),
  ]);
}

export default root;
