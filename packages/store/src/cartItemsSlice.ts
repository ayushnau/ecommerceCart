import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: string;
}

export interface CartItemsState {
  [id: string]: CartItem;
}

const initialState: CartItemsState = {};

export const cartItemsSlice = createSlice({
  name: "cartItemsSlice",
  initialState,
  reducers: {
    // Reducer to set or update a cart item
    setCartItem: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;
      state[id] = { id, quantity };
    },

    // Reducer to clear all cart items
    clearCartItems: (state) => {
      Object.keys(state).forEach((key) => delete state[key]);
    },
  },
});

export const { setCartItem, clearCartItems } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
