import { actionTypes } from './actions';

export const initialState = {
  grid: {
    list: [],
    count: 0,
  },
  gridFetching: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ORDERS_GRID:
      return {
        ...state,
        ...{ gridFetching: true },
      };

    case actionTypes.GET_ORDERS_GRID_SUCCESS:
      return {
        ...state,
        ...{
          grid: action.payload,
          gridFetching: false,
        },
      };

    case actionTypes.GET_ORDERS_GRID_ERROR:
      return {
        ...state,
        ...{
          gridError: action.payload,
          gridFetching: false,
        },
      };

    default:
      return state;
  }
}

export default reducer;
