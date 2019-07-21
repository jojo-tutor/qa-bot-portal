import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import queryString from 'query-string';
import request from 'utils/request';
import {
  actionTypes, getUsersGridSuccess, getUsersGridError,
} from './actions';

require('es6-promise').polyfill();

function* getUsersGrid({ payload }) {
  const { limit, skip, sort } = payload;
  try {
    const query = queryString.stringify({
      limit,
      skip,
      sort: JSON.stringify(sort),
    });
    const options = {
      method: 'get',
      url: `api/users${query ? `?${query}` : ''}`,
    };
    const data = yield call(request(options));
    yield put(getUsersGridSuccess(data));
  } catch (error) {
    yield put(getUsersGridError(error));
  }
}

function* root() {
  yield all([
    takeLatest(actionTypes.GET_USERS_GRID, getUsersGrid),
  ]);
}

export default root;
