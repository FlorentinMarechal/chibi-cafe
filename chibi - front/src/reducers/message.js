import { SET_MESSAGE, SET_LOADING_STORE_FALSE, SET_LOADING_FALSE } from '../actions/message';

export const initialState = {
  loading: true, 
  loadingStore: true
};

const messageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false
      };
    case SET_LOADING_STORE_FALSE:
      return {
        ...state,
        loadingStore: false
      };
    default:
      return state;
  }
};

export default messageReducer;