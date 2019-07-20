export const actionTypes = {
  GET_USERS_GRID: 'GET_USERS_GRID',
  GET_USERS_GRID_SUCCESS: 'GET_USERS_GRID_SUCCESS',
  GET_USERS_GRID_ERROR: 'GET_USERS_GRID_ERROR',
};

export function getUsersGrid(payload) {
  return {
    type: actionTypes.GET_USERS_GRID,
    payload,
  };
}

export function getUsersGridSuccess(payload) {
  return {
    type: actionTypes.GET_USERS_GRID_SUCCESS,
    payload,
  };
}

export function getUsersGridError(payload) {
  return {
    type: actionTypes.GET_USERS_GRID_ERROR,
    payload,
  };
}
