import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  productList: [],
  isLoading: false,
  product: {},
};

// Reducer
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    loadProducts(state, action) {
      state.productList = action.payload;
      state.isLoading = false;
    },
    getProduct(state, action) {
      state.product = action.payload;
      state.isLoading = false;
    },
    queryProducts(state, action) {
      state.productList = action.payload;
      state.isLoading = false;
    },
  },
});

export default productsSlice.reducer;

// Actions - Products
export function loadProducts() {
  return async function (dispatch, getState) {
    dispatch({ type: "product/loading" });

    const res = await fetch(`${process.env.REACT_APP_HOST}/products`);

    const data = await res.json();

    dispatch({ type: "product/loadProducts", payload: data });
  };
}

export function getProduct(id) {
  return async function (dispatch, getState) {
    dispatch({ type: "product/loading" });

    const res = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);

    const data = await res.json();

    dispatch({ type: "product/getProduct", payload: data });
  };
}

export function queryProducts(queryTerm) {
  return async function (dispatch, getState) {
    dispatch({ type: "product/loading" });

    const res = await fetch(
      `${process.env.REACT_APP_HOST}/products?name_like=${queryTerm}`
    );

    const data = await res.json();

    dispatch({ type: "product/queryProducts", payload: data });
  };
}
