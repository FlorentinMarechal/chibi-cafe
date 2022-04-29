   
export const SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS';

export const setDeliveryAddress = (data) => (
  {
    type: SET_DELIVERY_ADDRESS,
    data
  }
);

   
export const SET_DELIVERY_RADIO = 'SET_DELIVERY_RADIO';

export const setDeliveryRadio = (value, name) => (
  {
    type: SET_DELIVERY_RADIO,
    value,
    name,
  }
);