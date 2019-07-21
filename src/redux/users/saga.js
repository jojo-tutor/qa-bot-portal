import axios from 'axios';
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import {
  actionTypes, getUsersGridSuccess, getUsersGridError,
} from './actions';

require('es6-promise').polyfill();

function* getUsersGrid({ payload }) {
  try {
    const getUsers = () => axios({
      method: 'get',
      url: 'api/users',
      baseURL: process.env.PORTAL_HOST,
      headers: {
        ...(payload.cookie ? { Cookie: payload.cookie } : {}),
      },
    });
    const { data } = yield call(getUsers);
    yield put(getUsersGridSuccess(data));
  } catch (e) {
    const error = e.response ? e.response.data : { name: e.name, message: e.message };
    yield put(getUsersGridError(error));
  }
}

function* root() {
  yield all([
    takeLatest(actionTypes.GET_USERS_GRID, getUsersGrid),
  ]);
}

export default root;
