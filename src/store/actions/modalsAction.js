import ActionTypes from "../action-types/actionTypes";

export const showMapModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_MOBILE_MAP,
  };
};

export const closeMapModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_MOBILE_MAP,
  };
};

export const showMenuModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_MENU_MODAL,
  };
};

export const closeMenuModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_MENU_MODAL,
  };
};
