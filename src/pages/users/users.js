import React, { memo, useState, useEffect } from 'react';
import pick from 'lodash/pick';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';

import Main from 'layouts/Main';
import GridTable from 'components/GridTable';
import { getUsersGrid } from 'redux/users/actions';

const key = 'users';

const Users = memo((props) => {
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);
  const [state, setState] = useState({
    initialLoad: true,
  });

  useEffect(() => {
    setState(prevState => ({ ...prevState, initialLoad: false }));
  }, []);

  console.log('@state', state);
  console.log(key, page);

  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last Name',
      id: 'last_name',
      accessor: d => d.last_name,
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Role',
      accessor: 'role',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];

  const fetchData = (options) => {
    dispatch(getUsersGrid(options));
  };

  const tableProps = {
    columns,
    initialLoad: state.initialLoad,
    data: page.grid.list,
    pages: page.grid.pages,
    loading: page.gridFetching,
    onFetchData: fetchData,
  };

  return (
    <Main title="Users">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GridTable {...tableProps} />
        </Grid>
      </Grid>
    </Main>
  );
});

Users.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;

  if (isServer) {
    store.dispatch(getUsersGrid({
      page: 0,
      limit: 20,
    }));
  }

  return { isServer };
};

export default Users;
