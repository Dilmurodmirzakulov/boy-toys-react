import ActionTypes from "../action-types/actionTypes";

const initialState = {
 mobileMap: false,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODALS.SHOW_MOBILE_MAP:
      return { ...state, mobileMap: true };
    case ActionTypes.MODALS.CLOSE_MOBILE_MAP:
      return { ...state, mobileMap: false };
    default:
      return state;
  }
};

export default modalsReducer;
