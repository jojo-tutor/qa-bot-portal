import React, { memo, useState, useEffect } from 'react';
import pick from 'lodash/pick';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import SaveIcon from '@material-ui/icons/SaveOutlined';
import CancelIcon from '@material-ui/icons/CancelOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';

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

  const handleChange = () => {};

  useEffect(() => {
    if (!authenticated) {
      // router.push('/login?return=/users');
    }
  }, [authenticated]);

  useEffect(() => {
    setState(prevState => ({ ...prevState, initialLoad: false }));
  }, []);


  if (!authenticated) {
    // return <CircularProgress />;
  }

  return (
    <Main title="Users">
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <div className={classes.buttonGroup}>
              <Button
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={() => router.push('/users')}
              >
                <KeyboardArrowLeftIcon className={classes.icon} />
                Back to Grid
              </Button>
              <section className={classes.section}>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={() => router.push('/users')}
                >
                  <CancelIcon className={classes.icon} />
                  Cancel
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  className={classes.button}
                >
                  <SaveIcon className={classes.icon} />
                  Save User
                </Button>
              </section>
            </div>
          </Paper>
        </Grid>

        <Grid item md={12}>
          <Paper className={classes.paper}>
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="first_name"
                    label="First name"
                    variant="outlined"
                    value={state.email}
                    error
                    helperText="This field is required"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    margin="dense"
                    id="last_name"
                    label="Last name"
                    variant="outlined"
                    value={state.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    margin="dense"
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={state.email}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </form>
          </Paper>
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
