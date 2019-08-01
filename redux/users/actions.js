export const actionTypes = {
  GET_USERS_GRID: 'GET_USERS_GRID',
  GET_USERS_GRID_SUCCESS: 'GET_USERS_GRID_SUCCESS',
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
