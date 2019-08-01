import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',

    '& .avatar': {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },

    '& .form': {
      width: '100%',
      marginTop: theme.spacing(1),
    },

    '& .submit': {
      margin: theme.spacing(3, 0, 2),
    },

    '& .progress': {
      margin: theme.spacing(0, 1),
    },
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    margin: theme.spacing(0, 1),
  },
}));

const OuterForm = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {children}
        </div>
      </Grid>
    </Grid>
  );
};

OuterForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OuterForm;
