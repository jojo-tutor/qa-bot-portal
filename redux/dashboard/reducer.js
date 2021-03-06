import { actionTypes } from './actions';

export const initialState = {
  grid: {
    list: [],
    count: 0,
  },
  gridFetching: false,
  gridError: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_DASHBOARD_GRID:
      return {
        ...state,
        ...{
          gridFetching: true,
        },
      };

    case actionTypes.GET_DASHBOARD_GRID_SUCCESS:
      return {
        ...state,
        ...{
          grid: action.payload,
          gridFetching: false,
        },
      };

    case actionTypes.GET_DASHBOARD_GRID_ERROR:
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
