import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Toast from 'components/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from 'redux/notifications/actions';

const useStyles = makeStyles({
  notifications: {
    display: 'flex',
    zIndex: '1400',
    flexDirection: 'column',
    position: 'fixed',
    justifyContent: 'flex-end',
    left: 'auto',
    right: '24px',
    bottom: '24px',

    '&.MuiSnackbar-root': {
      position: 'relative',
    },
  },
});

const key = 'notifications';
const Notification = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const page = useSelector(state => state[key]);

  function handleClose(id) {
    dispatch(
      removeNotification(id),
    );
  }

  return (
    <div className={classes.notifications}>
      {
        page.notifications.map(notification => (
          <Toast
            {...notification}
            key={notification.id}
            onClose={handleClose}
          />
        ))
      }
    </div>
  );
};


export default Notification;
