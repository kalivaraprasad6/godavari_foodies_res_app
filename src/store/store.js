// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/slices/cartSlice.js';
import ordersSliceReducer from '../store/slices/ordersSlice.js';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersSliceReducer,
  },
});
