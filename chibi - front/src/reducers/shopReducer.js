import {
    SAVE_ARTICLES,
    SAVE_CATEGORIES,
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_CART
} from '../actions/shop';

import {
    SAVE_FOODS,
    SAVE_FOODCATEGORIES
} from '../actions/menu'

const initialState = {
    categories: [],
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || []
};


const shopReducer = (state = initialState, action ) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case SAVE_ARTICLES:
            return {
                ...state,
                products: action.articles,
            };
        case SAVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories.filter(category => category.type_of_product === true ),
            };
            
        case SAVE_FOODCATEGORIES:
            return{
                ...state,
                categories: action.foodCategories
            };
        case SAVE_FOODS:
            return{
                ...state,
                products: action.foods
            }       
            
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return {...state, cart: updatedCart};

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return {...state, cart: updatedCart};

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if(updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1});
            
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);
            return {...state, cart: updatedCart};
        case REMOVE_CART:
            return {
                ...state, 
                cart: []
            };
        default:
            return state;

    }
};

export default shopReducer;