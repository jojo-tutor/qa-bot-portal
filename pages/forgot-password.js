import React from 'react';
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
import { forgotPassword } from 'redux/session/actions';
import FormikForm from 'components/FormikForm';

const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
});

const key = 'session';

function ForgotPassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);

  const handleForgot = (values) => {
    dispatch(
      forgotPassword(values),
    );
  };

  const fields = [
    {
      id: 'email',
      label: 'Email',
      required: true,
      autoFocus: true,
      defaultValue: '',
      component: TextField,
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
          disabled={page.forgettingPassword}
        >
          {page.forgettingPassword && <CircularProgress size={24} className="progress" />}
          Forgot Password
        </Button>
      ),
    },
  ];

  return (
    <OuterFrom>
      <Avatar className="avatart">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
            Forgot Password
      </Typography>

      <FormikForm
        fields={fields}
        schema={forgotSchema}
        onSubmit={handleForgot}
      />

      <Grid container justify="flex-end">
        <Grid item>
          <Link href="/login" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </OuterFrom>
  );
}

export default ForgotPassword;
