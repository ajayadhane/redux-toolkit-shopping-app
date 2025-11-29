import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItems: (state, action) => {
      const cartData = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(cartData));
    },
  },
});

export const { addItems, removeItems } = addToCart.actions;
export default addToCart.reducer;
