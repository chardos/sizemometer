export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  isOpen: false,
  commitHash: null
}

export default function detailModal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        commitHash: action.payload
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

export const openModal = (bar) => {
  return {
    type: OPEN_MODAL,
    payload: bar.tooltip.commitHash
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
