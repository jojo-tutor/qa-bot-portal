import { all, fork } from 'redux-saga/effects';

import dashboard from 'redux/dashboard/saga';
import orders from 'redux/orders/saga';
import users from 'redux/users/saga';

function* rootSaga() {
  yield all([
    fork(dashboard),
    fork(orders),
    fork(users),
  ]);
}

export default rootSaga;
