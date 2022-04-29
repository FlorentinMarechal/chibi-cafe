export const SAVE_FOODS = 'SAVE_FOOD';
export const FETCH_FOODCATEGORIES = 'FETCH_FOODCATEGORIES';
export const SAVE_FOODCATEGORIES = 'SAVE_FOODCATEGORIES';



export const fetchFoodCategories = () => ({ type: FETCH_FOODCATEGORIES});

export const saveFoodCategories = (foodCategories) => (
    {
        type: SAVE_FOODCATEGORIES,
        foodCategories,
    }
)