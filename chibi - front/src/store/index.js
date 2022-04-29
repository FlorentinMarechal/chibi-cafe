import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import userMiddleware from '../middlewares/user';
import shopMiddleWare from '../middlewares/shopMiddleWare';
import menuMiddleWare from '../middlewares/menuMiddleWare';
import favoritesMiddleware from '../middlewares/favoritesMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [userMiddleware, shopMiddleWare, menuMiddleWare, favoritesMiddleware];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;