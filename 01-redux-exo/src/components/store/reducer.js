import { createReducer } from "@reduxjs/toolkit";
import { addToCart, addItem, reduceItem, toggleCart } from "./actions";

const initialeState = {
  totalCart: 0,
  shoppingCart: 0,
  isVisible: false,
};

const cartReducer = createReducer(initialeState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.totalCart += state.shoppingCart;
    })
    .addCase(addItem, (state, action) => {
      state.shoppingCart++;
    })
    .addCase(reduceItem, (state, action) => {
      state.shoppingCart--;
    })
    .addCase(toggleCart, (state, action) => {
      state.isVisible = !state.isVisible;
    });
});

export default cartReducer;
