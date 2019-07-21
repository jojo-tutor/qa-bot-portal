import { actionTypes } from './actions';

export const initialState = {
  grid: {
    count: 0,
    pages: 0,
    list: [],
  },
  gridOptions: {
    limit: 0,
    skip: 0,
    sort: [],
  },
  gridFetching: false,
  gridError: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USERS_GRID:
      return {
        ...state,
        ...{
          gridOptions: action.payload,
          gridFetching: true,
        },
      };

    case actionTypes.GET_USERS_GRID_SUCCESS:
      return {
        ...state,
        ...{
          grid: action.payload,
          gridFetching: false,
          gridError: null,
        },
      };

    case actionTypes.GET_USERS_GRID_ERROR:
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
