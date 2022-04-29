export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SAVE_ARTICLES = 'SAVE_ARTICLES';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const PRICE_CHECK = 'PRICE_CHECK';
export const REMOVE_CART = 'REMOVE_CART';

export const fetchArticles = () => ({ type: FETCH_ARTICLES });

export const saveArticles = (articles) => (
    {
        type: SAVE_ARTICLES,
        articles,
    }
);

export const fetchCategories = () => ({ type: FETCH_CATEGORIES});

export const saveCategories = (categories) => (
    {
        type: SAVE_CATEGORIES,
        categories,
    }
)

export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
};

export const incrementCartQuantity = productId => {
    return{
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};

export const decrementCartQuantity = productId => {
  return {
      type: DECREMENT_CART_ITEM_QUANTITY,
      payload: productId
  }
};


export const checkPrice = () => {
    return {
        type: PRICE_CHECK,
        
    }
}
