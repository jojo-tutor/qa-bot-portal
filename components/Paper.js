import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: props => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    height: props.height,
  }),
}));

const CustomPaper = ({ className, ...restProps }) => {
  const classes = useStyles(restProps);
  const paper = clsx(classes.paper, className);
  return <Paper className={paper} {...restProps} />;
};

CustomPaper.defaultProps = {
  className: '',
};

CustomPaper.propTypes = {
  className: PropTypes.string,
};

export default CustomPaper;
