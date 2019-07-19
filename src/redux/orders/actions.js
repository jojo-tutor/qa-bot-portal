export const actionTypes = {
  GET_ORDERS_GRID: 'GET_ORDERS_GRID',
  GET_ORDERS_GRID_SUCCESS: 'GET_ORDERS_GRID_SUCCESS',
  GET_ORDERS_GRID_ERROR: 'GET_ORDERS_GRID_ERROR',
};

export function getOrdersGrid(payload) {
  return {
    type: actionTypes.GET_ORDERS_GRID,
    payload,
  };
}

export function getOrdersGridSuccess(payload) {
  return {
    type: actionTypes.GET_ORDERS_GRID_SUCCESS,
    payload,
  };
}

export function getOrdersGridError(payload) {
  return {
    type: actionTypes.GET_ORDERS_GRID_ERROR,
    payload,
  };
}
