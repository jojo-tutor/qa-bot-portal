export const actionTypes = {
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
};

export function addNotification(payload) {
  return {
    type: actionTypes.ADD_NOTIFICATION,
    payload,
  };
}

export function removeNotification(payload) {
  return {
    type: actionTypes.REMOVE_NOTIFICATION,
    payload,
  };
}
