import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from 'layouts/Main';
import { getUsersGrid } from 'redux/users/actions';

const key = 'users';

const Users = (props) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state[key]);

  React.useEffect(() => {
    // dispatch(getUsersGrid());
  }, [1]);

  console.log(key, value);

  return (
    <Main title="Users">
      <h1>Users</h1>
    </Main>
  );
};

Users.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;

  store.dispatch(getUsersGrid());

  return { isServer };
};

export default memo(Users);
