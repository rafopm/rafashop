import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import brandsReducer from './brandsSlice';
import productsReducer from './productsSlice';
import loginReducer from './loginSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    brands: brandsReducer,
    products: productsReducer, 
    login: loginReducer,
    users: userReducer,
  },
});

export default store;
