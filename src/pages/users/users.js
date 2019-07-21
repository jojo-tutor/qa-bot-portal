import React, { memo, useState, useEffect } from 'react';
import pick from 'lodash/pick';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useSelector, useDispatch } from 'react-redux';

import Main from 'layouts/Main';
import Paper from 'components/Paper';
import GridTable from 'components/GridTable';
import { getUsersGrid } from 'redux/users/actions';

const key = 'users';

const useStyles = makeStyles((theme) => {
  console.log('@theme', theme);
  return {
    paper: {
      flexDirection: 'row',
    },
    section: {
      marginLeft: 'auto',
      justifySelf: 'flex-end',
    },
    button: {
      margin: theme.spacing(0.25),
    },
  };
});

const Users = memo((props) => {
  const classes = useStyles();
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
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Button variant="outlined" color="primary" size="small" className={classes.button}>Add New</Button>
            <section className={classes.section}>
              <Button variant="outlined" size="small" className={classes.button}>Export</Button>
              <Button variant="outlined" size="small" className={classes.button}>Print</Button>
              <Button variant="outlined" size="small" className={classes.button}>Refresh</Button>
            </section>
          </Paper>
        </Grid>

        <Grid item md={12}>
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
