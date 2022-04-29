/* eslint-disable no-use-before-define */
import { SAVE_FAVORITES, REMOVE_FAVORITES } from '../actions/favorites';


export const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  // isAdd: true,
};

const favoritesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      }

    case REMOVE_FAVORITES:
      const filteredFavorites = state.favorites.filter((favorite) => {
        return favorite.product_id !== action.productId;
      })
      return {
        
        ...state,
        favorites: filteredFavorites,
      }

    default:
      return state;
  }
};

export default favoritesReducer;