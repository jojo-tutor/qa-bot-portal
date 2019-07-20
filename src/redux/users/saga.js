import es6promise, { Promise } from 'es6-promise';
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import makeGridData from 'utils/makeGridData';
import {
  actionTypes, getUsersGridSuccess, getUsersGridError,
} from './actions';

es6promise.polyfill();

function* getUsersGrid() {
  try {
    const mockRequest = () => new Promise((resolve) => {
      setTimeout(() => {
        const list = makeGridData();
        resolve({
          list,
          count: list.length,
        });
      }, 1000);
    });
    const result = yield call(mockRequest);
    yield put(getUsersGridSuccess(result));
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
