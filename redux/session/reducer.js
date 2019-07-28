import { actionTypes as errorTypes } from 'redux/errors/actions';
import { actionTypes } from './actions';

export const initialState = {
  initialized: false,
  data: {
    email: '',
    first_name: '',
    last_name: '',
  },
  loggingIn: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        ...{
          loggingIn: true,
        },
      };

    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...{
          data: action.payload,
          loggingIn: false,
        },
      };

    case actionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        ...{
          error: action.payload,
          loggingIn: false,
        },
      };

    case actionTypes.GET_SESSION:
      return {
        ...state,
        ...{
          gettingSession: true,
        },
      };

    case actionTypes.GET_SESSION_SUCCESS:
      return {
        ...state,
        ...{
          data: action.payload,
          gettingSession: false,
          initialized: true,
        },
      };

    case actionTypes.GET_SESSION_ERROR:
      return {
        ...state,
        ...{
          error: action.payload,
          gettingSession: false,
          initialized: true,
        },
      };

    case errorTypes.THROW_ERROR:
      if (action.payload.status === 401) {
        return {
          ...state,
          ...{
            data: {
              ...initialState.data,
            },
          },
        };
      }
      return state;

    default:
      return state;
  }
}

export default reducer;
