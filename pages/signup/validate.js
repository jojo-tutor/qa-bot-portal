import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OuterFrom from 'components/OuterForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { validateSignup } from 'redux/session/actions';

const key = 'session';

function ValidateSignup() {
  const router = useRouter();
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);

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
            {page.data ? 'Redirecting page ...' : 'Validating token ...'}
          </Typography>
        </>
      )}

      <Grid container justify="center">
        <Grid item>
          <Link href="/login" variant="body2">
            Return to Login Page
          </Link>
        </Grid>
      </Grid>
    </OuterFrom>
  );
}

export default ValidateSignup;
