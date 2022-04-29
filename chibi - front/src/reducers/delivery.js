import { SET_DELIVERY_ADDRESS, SET_DELIVERY_RADIO } from '../actions/delivery';

const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"));

export const initialState = {
  isNewAddress: false,
  deliveryAddress
};

const delivery = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: action.data
      };
    case SET_DELIVERY_RADIO:
      return {
        ...state,
        [action.name]: action.value 
      };
    default:
      return state;
  }
};

export default delivery;