export const ADD_FAVORITES = 'ADD_FAVORITES';
export const addFavorites = (product) => (
  {
    type: ADD_FAVORITES,
    product,
  }
);

export const FETCH_FAVORITES = 'FETCH__FAVORITES';
export const fetchFavorites = () => (
    {
        type: FETCH_FAVORITES,
    }
);

export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const saveFavorites = (favorites) => (
    {
        type: SAVE_FAVORITES,
        favorites,
    }
);

export const DELETE_FAVORITES = 'DELETE_FAVORITES';
export const deleteFavorites = (productId) => (
  {
    type: DELETE_FAVORITES,
    productId,
  }
);

export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const removeFavorites = (productId) => (
  {
    type: REMOVE_FAVORITES,
    productId,
  }
);