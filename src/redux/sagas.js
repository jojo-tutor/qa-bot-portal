import { fork } from 'redux-saga/effects';

import dashboard from 'redux/dashboard/saga';
import orders from 'redux/orders/saga';

function* rootSaga() {
  yield fork(dashboard);
  yield fork(orders);
}

export default rootSaga;
