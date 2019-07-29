import { actionTypes as errorTypes } from 'redux/errors/actions';
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
        },
      };

    case errorTypes.THROW_ERROR:
      return {
        ...state,
        ...{
          gridFetching: false,
        },
      };

    default:
      return state;
  }
}

export default reducer;
