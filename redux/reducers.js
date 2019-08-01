import session from 'redux/session/reducer';
import notifications from 'redux/notifications/reducer';
import dashboard from 'redux/dashboard/reducer';
import orders from 'redux/orders/reducer';
import users from 'redux/users/reducer';

const rootReducer = {
  session,
  notifications,
  dashboard,
  orders,
  users,
};

export default rootReducer;
