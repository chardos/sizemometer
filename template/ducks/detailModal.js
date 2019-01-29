export const SELECT_FILE = "SELECT_FILE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  isOpen: false,
}

export default function detailModal(state = {}, action) {
  switch (action.type) {
    case SELECT_FILE:
      return state;

    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      };

    case CLOSE_MODAL:
      return state;

    default:
      return state;
  }
}

export const selectFile = () => {
  return {
    type: SELECT_FILE
  };
};

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
