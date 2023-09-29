import ActionTypes from "../action-types/actionTypes";

const initialState = {
  mobileMap: false,
  menuModal: false,
  authModal: false,
  registerModal: false,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODALS.SHOW_MOBILE_MAP:
      return { ...state, mobileMap: true };
    case ActionTypes.MODALS.CLOSE_MOBILE_MAP:
      return { ...state, mobileMap: false };
    case ActionTypes.MODALS.SHOW_MENU_MODAL:
      return { ...state, menuModal: true };
    case ActionTypes.MODALS.CLOSE_MENU_MODAL:
      return { ...state, menuModal: false };
    case ActionTypes.MODALS.SHOW_AUTH_MODAL:
      return { ...state, authModal: true };
    case ActionTypes.MODALS.CLOSE_AUTH_MODAL:
      return { ...state, authModal: false };
    case ActionTypes.MODALS.SHOW_REGISTER_MODAL:
      return { ...state, registerModal: true };
    case ActionTypes.MODALS.CLOSE_REGISTER_MODAL:
      return { ...state, registerModal: false };
    default:
      return state;
  }
};

export default modalsReducer;
