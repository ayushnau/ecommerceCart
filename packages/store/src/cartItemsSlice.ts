import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: string;
  [key: string] : string
}

export interface CartItemsState {
  items:{
    [id: string]: CartItem,
  }
  productCount?: number;
}

const initialState: CartItemsState = {items:{},productCount : 0};

export const cartItemsSlice = createSlice({
  name: "cartItemsSlice",
  initialState,
  reducers: {
    // Reducer to set or update a cart item
    setCartItem: (state, action: PayloadAction<CartItem>) => {
      const id = action.payload.id;
      if(action.payload.quantity == "0"){
        delete state.items[id];
      }
      else{
        state.items[id] = {...action.payload};
      }
      state.productCount = Object.keys(state.items).length;
    },
    setBulkCartItems: (state, action) => {
      action.payload.map((value:any) =>{

        const id = value.id;
        if(value.quantity == "0"){
          delete state.items[id];
        }
        else{
          state.items[id] = {...value};
        }
      })
      state.productCount = Object.keys(state.items).length;
    },

    // Reducer to clear all cart items
    removeCartItem : (state, action: PayloadAction<string>) =>{
       delete state.items[action.payload]
    },
    clearCartItems: (state) => {
      state.items ={}
      state.productCount = 0
    },
  },
});

export const { setCartItem,setBulkCartItems, clearCartItems, removeCartItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
