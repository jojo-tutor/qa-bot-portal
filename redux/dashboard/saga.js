import es6promise, { Promise } from 'es6-promise';
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import {
  actionTypes, getDashboardGridSuccess, getDashboardGridError,
} from './actions';

es6promise.polyfill();

function* getDashboardGrid() {
  try {
    const mockRequest = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve(Date.now().toString());
      }, 1000);
    });
    const result = yield call(mockRequest);
    yield put(getDashboardGridSuccess(result));
  } catch (error) {
    yield put(getDashboardGridError(error));
  }
}

function* root() {
  yield all([
    takeLatest(actionTypes.GET_DASHBOARD_GRID, getDashboardGrid),
  ]);
}

export default root;
