import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import productsReducer from './ProductsSlice';
import userReducer from "./UserSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    users:userReducer
  }
})