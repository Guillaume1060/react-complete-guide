import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/add");
export const addItem = createAction("cart/addItem");
export const reduceItem = createAction("cart/reduceItem");
export const toggleCart = createAction("cart/toggle");
