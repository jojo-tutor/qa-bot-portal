export const actionTypes = {
  THROW_ERROR: 'THROW_ERROR',
};

export function throwError(payload) {
  return {
    type: actionTypes.THROW_ERROR,
    payload,
  };
}
