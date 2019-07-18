import React from 'react';
import Main from 'layouts/Main';
import { useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

const key = 'orders';

const Orders = (props) => {
  const count = useSelector(state => state[key]);
  console.log('count: ', count);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Main title="Orders">
      <h1>Orders</h1>
    </Main>
  );
};

export default Orders;
