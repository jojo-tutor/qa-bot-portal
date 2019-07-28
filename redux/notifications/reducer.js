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

    default:
      return state;
  }
}

export default reducer;
