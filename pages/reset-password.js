import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import OuterFrom from 'components/OuterForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { resetPassword, validateToken } from 'redux/session/actions';
import PasswordField from 'components/PasswordField';
import FormikForm from 'components/FormikForm';

const resetSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords don\'t match')
    .required('Confirm password is required'),
});

const key = 'session';

function ResetPassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);

  const handleReset = (values) => {
    dispatch(
      resetPassword({ ...page.token, ...values }),
    );
  };

  useEffect(() => {
    dispatch(
      validateToken(router.query),
    );
  }, []);

  const fields = [
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      autoFocus: true,
      defaultValue: '',
      component: PasswordField,
    },
    {
      id: 'password_confirm',
      label: 'Confirm Password',
      type: 'password',
      required: true,
      defaultValue: '',
      component: PasswordField,
    },
    {
      id: 'submit',
      type: 'submit',
      render: () => (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          className="submit"
          disabled={page.resettingPassword}
        >
          {page.resettingPassword && <CircularProgress size={24} className="progress" />}
          Reset Password
        </Button>
      ),
    },
  ];

  return (
    <OuterFrom>
      {page.validatingToken && (
        <>
          <CircularProgress />
          <Typography component="p" variant="body1">
            Validating token...
          </Typography>
        </>
      )}

      {page.token && (
        <>
          <Avatar className="avatart">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
                Reset Password
          </Typography>

          <FormikForm
            fields={fields}
            schema={resetSchema}
            onSubmit={handleReset}
          />

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                {page.resetPassword ? 'Proceed to Login Page' : 'Already have an account? Sign in'}
              </Link>
            </Grid>
          </Grid>
        </>
      )}

      {(!page.token && !page.validatingToken) && (
        <Grid container justify="center">
          <Grid item>
            <Link href="/login" variant="body2">
              Return to Login Page
            </Link>
          </Grid>
        </Grid>
      )}
    </OuterFrom>
  );
}

export default ResetPassword;
