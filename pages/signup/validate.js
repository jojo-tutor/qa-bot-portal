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
import { validateSignup } from 'redux/session/actions';

const key = 'session';

function ForgotPassword() {
  const router = useRouter();

  console.log('@router', router);
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);

  console.log('@page', page);

  useEffect(() => {
    dispatch(
      validateSignup(router.query),
    );
  }, []);

  useEffect(() => {
    if (page.data) {
      router.push('/');
    }
  }, [page.data]);

  return (
    <OuterFrom>
      {(page.validatingSignup || page.data) && (
        <>
          <CircularProgress />
          <Typography component="p" variant="body1">
            {page.validatingSignup ? 'Validating ...' : 'Redirecting...'}
          </Typography>
        </>
      )}

      <Grid container justify="center">
        <Grid item>
          <Link href="/login" variant="body2">
            Return to Login
          </Link>
        </Grid>
      </Grid>
    </OuterFrom>
  );
}

export default ForgotPassword;
