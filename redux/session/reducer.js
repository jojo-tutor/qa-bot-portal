import { actionTypes as errorTypes } from 'redux/errors/actions';
import { actionTypes } from './actions';

export const initialState = {
  data: {
    email: '',
    first_name: '',
    last_name: '',
  },
  signup: null,
  signupValidated: null,
  loggingIn: false,
  signingUp: false,
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

    case actionTypes.FORGOT_PASSWORD:
      return {
        ...state,
        ...{
          processingForgotPassword: true,
        },
      };

    case actionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        ...{
          forgotPassword: action.payload,
          processingForgotPassword: false,
        },
      };

    case actionTypes.SIGNUP_USER:
      return {
        ...state,
        ...{
          signingUp: true,
        },
      };

    case actionTypes.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        ...{
          signup: action.payload,
          signingUp: false,
        },
      };

    case actionTypes.VALIDATE_SIGNUP:
      return {
        ...state,
        ...{
          validatingSignup: true,
        },
      };

    case actionTypes.VALIDATE_SIGNUP_SUCCESS:
      return {
        ...state,
        ...{
          data: action.payload,
          validatingSignup: false,
        },
      };

    case errorTypes.THROW_ERROR:
      return {
        ...state,
        ...{
          data: action.payload.status === 401 ? { ...initialState.data } : state.data,
          loggingIn: false,
          signingUp: false,
          validatingSignup: false,
          processingForgotPassword: false,
        },
      };

    default:
      return state;
  }
}

export default reducer;
