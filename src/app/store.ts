import { configureStore } from "@reduxjs/toolkit";
import { toCartSlice } from "../widgets/header";

export const store = configureStore({
  reducer: {
    [toCartSlice.name]: toCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
