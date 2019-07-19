import es6promise, { Promise } from 'es6-promise';
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import {
  actionTypes, getOrdersGridSuccess, getOrdersGridError,
} from './actions';

es6promise.polyfill();

function* getOrdersGrid() {
  try {
    const mockRequest = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          list: [1, 2, 3],
          count: 3,
        });
      }, 1000);
    });
    const result = yield call(mockRequest);
    yield put(getOrdersGridSuccess(result));
  } catch (error) {
    yield put(getOrdersGridError(error));
  }
}

function* root() {
  yield all([
    takeLatest(actionTypes.GET_ORDERS_GRID, getOrdersGrid),
  ]);
}

export default root;
