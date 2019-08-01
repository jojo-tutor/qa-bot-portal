import { actionTypes as errorTypes } from 'redux/errors/actions';
import { actionTypes } from './actions';

export const initialState = {
  data: {
    email: '',
    first_name: '',
    last_name: '',
  },
  loggingIn: false,
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
            loggingIn: false,
          },
        };
      }
      return {
        ...state,
        ...{
          loggingIn: false,
        },
      };

    default:
      return state;
  }
}

export default reducer;
