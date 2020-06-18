import { OPEN_MODAL_REGISTER, CLOSE_MODAL_REGISTER, OPEN_MODAL_LOGIN, CLOSE_MODAL_LOGIN } from '../actionTypes';

const initialState = {
  registerModalOpen: false,
  loginModalOpen: false,
};

export const modalRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_REGISTER:
      return { ...state, registerModalOpen: action.payload };
    case CLOSE_MODAL_REGISTER:
      return { ...state, registerModalOpen: action.payload };
    default:
      return state;
  }
};

export const modalLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_LOGIN:
      return { ...state, loginModalOpen: action.payload };
    case CLOSE_MODAL_LOGIN:
      return { ...state, loginModalOpen: action.payload };
    default:
      return state;
  }
};
