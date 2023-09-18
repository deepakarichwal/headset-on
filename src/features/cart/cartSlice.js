import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// Initial States
const initialState = {
  cartItems: [],
};

// Reducer
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (items) => items.id !== action.payload.id
      );
    },

    clearCart(state, action) {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;

// Actions

export function addToCart(product) {
  toast.success("Successfully added to cart");
  return { type: "cart/addToCart", payload: product };
}

export function removeFromCart(product) {
  toast.success("Successfully removed from cart");
  return { type: "cart/removeFromCart", payload: product };
}

export function clearCart() {
  return { type: "cart/clearCart" };
}
