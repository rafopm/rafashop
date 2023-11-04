import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import productsReducer from './productsSlice';
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer, 
    login: loginReducer,
  },
});

export default store;
