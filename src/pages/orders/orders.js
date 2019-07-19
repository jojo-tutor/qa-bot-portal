import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from 'layouts/Main';
import { getOrdersGrid } from 'redux/orders/actions';

const key = 'orders';

const Orders = (props) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state[key]);

  React.useEffect(() => {
    // dispatch(getOrdersGrid());
  }, [1]);

  console.log(key, value);

  return (
    <Main title="Orders">
      <h1>Orders</h1>
    </Main>
  );
};

Orders.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;

  store.dispatch(getOrdersGrid());

  return { isServer };
};

export default memo(Orders);
