import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featuredProducts: [],
  isLoading: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },

    getFeatured(state, action) {
      state.featuredProducts = action.payload;
      state.isLoading = false;
    },
  },
});

export function getFeatured() {
  return async function (dispatch) {
    dispatch({ type: "home/loading" });
    const res = await fetch(`${process.env.REACT_APP_HOST}/featured_products`);

    const data = await res.json();

    dispatch({ type: "home/getFeatured", payload: data });
  };
}

export default homeSlice.reducer;
