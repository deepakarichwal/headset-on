import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import homeReducer from "../features/home/homeSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    home: homeReducer,
  },
});

export default store;
