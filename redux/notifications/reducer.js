import { actionTypes as sessionTypes } from 'redux/session/actions';
import { actionTypes as errorTypes } from 'redux/errors/actions';
import { actionTypes } from './actions';

export const initialState = {
  notifications: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        ...{
          notifications: [
            ...state.notifications,
            {
              ...action.payload,
              id: `${Date.now() + Math.random()}`,
            },
          ],
        },
      };

    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        ...{
          notifications: state.notifications.filter(e => e.id !== action.payload),
        },
      };

    case sessionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...{
          notifications: [],
        },
      };

    case errorTypes.THROW_ERROR:
      return {
        ...state,
        ...{
          notifications: [
            ...state.notifications,
            {
              ...action.payload,
              type: 'error',
              id: `${Date.now() + Math.random()}`,
            },
          ],
        },
      };

    default:
      return state;
  }
}

export default reducer;
