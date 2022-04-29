export const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = (message) => (
  {
    type: SET_MESSAGE,
    message
  }
);

export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

export const setLoadingFalse = () => (
  {
    type: SET_LOADING_FALSE,
  }
);

export const SET_LOADING_STORE_FALSE = 'SET_LOADING_STORE_FALSE';

export const setLoadingStoreFalse = () => (
  {
    type: SET_LOADING_STORE_FALSE,
  }
);
