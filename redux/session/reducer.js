import { actionTypes } from './actions';

export const initialState = {
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

    default:
      return state;
  }
}

export default reducer;
