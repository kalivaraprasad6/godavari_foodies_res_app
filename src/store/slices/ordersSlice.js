// src/store/slices/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
  },
  reducers: {
    placeOrder: (state, action) => {
      state.items.push(...action.payload);
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
