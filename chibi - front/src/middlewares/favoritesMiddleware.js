import axios from 'axios';

import { ADD_FAVORITES, FETCH_FAVORITES, saveFavorites, DELETE_FAVORITES } from '../actions/favorites';

const axiosInstance = axios.create({
  baseURL: 'https://chibi-api.herokuapp.com',
})

const favoritesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_FAVORITES: {
        const { token, user: { id,
          } } = store.getState().auth;
      console.log("id de user:", id);
      console.log("action.product:", action.product.id);
      console.log("token:", token);
        axios.post(`https://chibi-api.herokuapp.com/useWishList/${id}`, {id: action.product.id}, {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            console.log("favoris ajouter :", response)
            store.dispatch({type: FETCH_FAVORITES});
          }
        ).catch(
          (error) => console.log("erreur: pas d'ajout en favoris", error)
        );
        next(action);
        break;
      }
  
      case FETCH_FAVORITES: {
        const { token, user: {
          id,
        } } = store.getState().auth;
        axiosInstance.get(`/wishList/${id}`, {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            console.log("log response fetch:", response);
            localStorage.setItem("favorites", JSON.stringify(response.data));
            store.dispatch(saveFavorites(response.data));
          }
        ).catch(
          (error) => console.log("erreur : ne peut pas aller chercher les favoris", error));
          next(action);
          break;
      }
  
      case DELETE_FAVORITES: {
        const { token, user: { id } } = store.getState().auth;
        console.log("productId:", action.productId);
        console.log("token de delete:", token);
        console.log("id de user:", id);
        axiosInstance.delete(`/useWishList/${id}`, {
          data: { id: action.productId }, 
          headers: { "Authorization": `Bearer ${token}` }
        })
        .then(
          (response) => {
            console.log("response.data de delete :", response.data);
            // store.dispatch(removeFavorites(action.productId));
            store.dispatch({type: FETCH_FAVORITES});
          }
        )
        .catch(
          (error) => console.log("erreur de delete", error));
          next(action);
          break;
      }

    default:
      next(action);
  }
};

export default favoritesMiddleware;