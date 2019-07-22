export const actionTypes = {
  GET_DASHBOARD_GRID: 'GET_DASHBOARD_GRID',
  GET_DASHBOARD_GRID_SUCCESS: 'GET_DASHBOARD_GRID_SUCCESS',
  GET_DASHBOARD_GRID_ERROR: 'GET_DASHBOARD_GRID_ERROR',
};

export function getDashboardGrid(payload) {
  return {
    type: actionTypes.GET_DASHBOARD_GRID,
    payload,
  };
}

export function getDashboardGridSuccess(payload) {
  return {
    type: actionTypes.GET_DASHBOARD_GRID_SUCCESS,
    payload,
  };
}

export function getDashboardGridError(payload) {
  return {
    type: actionTypes.GET_DASHBOARD_GRID_ERROR,
    payload,
  };
}
