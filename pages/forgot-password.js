import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import OuterFrom from 'components/OuterForm';

function ForgotPassword() {
  return (
    <OuterFrom>
      <Avatar className="avatart">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
            Forgot Password
      </Typography>
      <form className="form" noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              autoFocus
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          className="submit"
        >
            Forgot Password
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
                  Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </OuterFrom>
  );
}

export default ForgotPassword;
