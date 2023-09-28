import ActionTypes from "../action-types/actionTypes";

export const logIn = (data) => {
  return {
    type: ActionTypes.AUTH.LOG_IN,
    payload: data,
  };
};
