import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import productsReducer from './productsSlice';
import loginReducer from './loginSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer, 
    login: loginReducer,
    users: userReducer,
  },
});

export default store;
