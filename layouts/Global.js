import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '.5rem',
      backgroundColor: '#F5F5F5',
    },
    '*::-webkit-scrollbar-track': {
      borderRadius: '10px',
      backgroundColor: '#F5F5F5',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
    },
    '*::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: theme.palette.grey['400'],
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
    },
  },
  root: {},
}));


const Global = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};

export default Global;
