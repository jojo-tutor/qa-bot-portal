import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { signupUser } from 'redux/session/actions';
import OuterFrom from 'components/OuterForm';
import FormikForm from 'components/FormikForm';

const signupSchema = Yup.object().shape({
  first_name: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  last_name: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const key = 'session';

function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);

  const handleSignUp = (values) => {
    dispatch(
      signupUser(values),
    );
  };

  const fields = [
    {
      id: 'first_name',
      label: 'First Name',
      required: true,
      autoFocus: true,
      defaultValue: '',
      component: TextField,
      wrapper: {
        component: Grid,
        props: {
          item: true,
          xs: 12,
          sm: 6,
        },
      },
    },
    {
      id: 'last_name',
      label: 'Last Name',
      required: true,
      defaultValue: '',
      component: TextField,
      wrapper: {
        component: Grid,
        props: {
          item: true,
          xs: 12,
          sm: 6,
        },
      },
    },
    {
      id: 'email',
      label: 'Email Address',
      required: true,
      autoFocus: true,
      defaultValue: '',
      component: TextField,
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      defaultValue: '',
      autoComplete: 'new-password',
      component: TextField,
    },
    {
      id: 'subscribe',
      type: 'checkbox',
      render: () => (
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />
      ),
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
          disabled={page.signingUp}
        >
          {page.signingUp && <CircularProgress size={24} className="progress" />}
            Sign Up
        </Button>
      ),
    },
  ];

  return (
    <OuterFrom>
      <Avatar className="avatar">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>

      <FormikForm
        fields={fields}
        schema={signupSchema}
        onSubmit={handleSignUp}
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

export default SignUp;
