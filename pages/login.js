import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUser } from 'redux/session/actions';
import OuterForm from 'components/OuterForm';

const key = 'session';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (page.data.email) {
      router.push('/');
    }
  }, [page.data.email]);

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      loginUser(state),
    );
  };

  return (
    <OuterForm>
      <Avatar className="avatar">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
            Sign in
      </Typography>
      <form className="form" noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={state.email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={state.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={page.loggingIn}
          size="large"
          className="submit"
          onClick={handleSubmit}
        >
          {page.loggingIn && <CircularProgress size={24} className="progress" />}
              Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/forgot-password" variant="body2">
                  Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </OuterForm>
  );
};

export default Login;
