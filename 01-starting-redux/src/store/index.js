import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

// we merge our reducers in our store
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// we export our actions for each slice
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// we export our store
export default store;
