import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state) => {
      state.value += 1;
    },
    removeItems: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
  },
});

export const { addItems, removeItems } = addToCart.actions;
export default addToCart.reducer;
