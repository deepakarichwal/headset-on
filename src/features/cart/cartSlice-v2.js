import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// Initial States
const initialState = {
  cartItems: [],
  isLoading: true,
};

// Reducer
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart(state, action) {
      state.cartItems = action.payload;
      state.isLoading = false;
    },

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
export function loadCart() {
  return async function (dispatch) {
    const res = await fetch("http://localhost:8000/cartItems");

    const data = await res.json();

    dispatch({ type: "cart/loadCart", payload: data });
  };
}

export function addToCart(product) {
  return async function (dispatch, getState) {
    const res = await fetch("http://localhost:8000/cartItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    toast.success("Successfully added to cart");

    dispatch({ type: "cart/addToCart", payload: data });
  };
}

export function removeFromCart(product) {
  return async function (dispatch) {
    await fetch(`http://localhost:8000/cartItems/${product.id}`, {
      method: "DELETE",
    });

    toast.success("Successfully removed from cart");

    dispatch({ type: "cart/removeFromCart", payload: product });
  };
}

export function clearCart() {
  return async function (dispatch) {
    await fetch(`http://localhost:8000/cartItems`, {
      method: "DELETE",
    });

    dispatch({ type: "cart/clearCart" });
  };
}
