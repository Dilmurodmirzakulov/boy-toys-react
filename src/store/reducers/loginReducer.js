import actionTypes from "../action-types/actionTypes";

const initialState = {
  loggedIn: false,
  error: null,
  token: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH.LOG_IN:
      return {
        ...state,
        loggedIn: true,
        error: null,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default loginReducer;
