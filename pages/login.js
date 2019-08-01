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
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUser } from 'redux/session/actions';
import OuterForm from 'components/OuterForm';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const key = 'session';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);

  useEffect(() => {
    if (page.data.email) {
      router.push('/');
    }
  }, [page.data.email]);

  const handleLogin = (values) => {
    dispatch(
      loginUser(values),
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

      <Formik
        validateOnBlur={false}
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          handleLogin(values);
        }}
        render={(formProps) => {
          console.log('@formProps', formProps);
          const {
            errors, touched, handleBlur, handleChange, handleSubmit,
          } = formProps;
          return (
            <form
              noValidate
              autoComplete="off"
              className="form"
              onSubmit={handleSubmit}
            >
              <Field
                required
                fullWidth
                autoFocus
                id="email"
                name="email"
                variant="outlined"
                margin="normal"
                label="Email Address"
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                component={TextField}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Field
                required
                fullWidth
                id="password"
                name="password"
                variant="outlined"
                margin="normal"
                label="Password"
                type="password"
                autoComplete="new-password"
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                component={TextField}
                onBlur={handleBlur}
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
                size="large"
                className="submit"
                disabled={page.loggingIn}
              >
                {page.loggingIn && <CircularProgress size={24} className="progress" />}
                  Sign In
              </Button>
            </form>
          );
        }}
      />

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
    </OuterForm>
  );
}

export default Login;
