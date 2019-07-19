import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
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
      backgroundColor: '#556cd694',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
    },
  },
};

const Global = () => <div className="globals" />;

export default withStyles(styles)(Global);
