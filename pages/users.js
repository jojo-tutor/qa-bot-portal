import React, { memo, useState, useEffect } from 'react';
import pick from 'lodash/pick';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CircularProgress from '@material-ui/core/CircularProgress';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import SaveAltIcon from '@material-ui/icons/SaveAltOutlined';
import PrintIcon from '@material-ui/icons/PrintOutlined';
import RefreshIcon from '@material-ui/icons/RefreshOutlined';
import { useSelector, useDispatch } from 'react-redux';
import Authenticated, { withAuthentication } from 'containers/Authenticated';

import Main from 'layouts/Main';
import Paper from 'components/Paper';
import GridTable from 'components/GridTable';
import { getUsersGrid } from 'redux/users/actions';

const key = 'users';

const useStyles = makeStyles(theme => ({
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
  buttonGroup: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    fontSize: 20,
  },
}));


const isAuthenticated = session => session.data && session.data.email;

const Users = memo((props) => {
  const { initialLoad } = props;
  const router = useRouter();
  const classes = useStyles();

  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);
  const session = useSelector(state => state.session);
  const [state, setState] = useState({ initialLoad });
  const authenticated = isAuthenticated(session);

  useEffect(() => {
    if (!authenticated) {
      router.push('/login?return=/users');
    }
  }, [authenticated]);

  useEffect(() => {
    setState(prevState => ({ ...prevState, initialLoad: false }));
  }, []);

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

  if (!authenticated) {
    return <CircularProgress />;
  }

  return (
    <Main title="Users">
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <div className={classes.buttonGroup}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
                onClick={() => router.push('/users/new')}
              >
                <PersonAddIcon className={classes.icon} />
              New User
              </Button>
              <section className={classes.section}>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                >
                  <SaveAltIcon className={classes.icon} />
                  Download CSV
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                >
                  <PrintIcon className={classes.icon} />
                  Print
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                >
                  <RefreshIcon className={classes.icon} />
                  Refresh
                </Button>
              </section>
            </div>
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
  const { session } = store.getState();
  const authenticated = isAuthenticated(session);
  const childProps = { initialLoad: false };

  if (isServer && authenticated) {
    childProps.initialLoad = true;
    store.dispatch(getUsersGrid({
      page: 0,
      limit: 20,
    }));
  }


  return { isServer, ...childProps };
};

export default Users;
