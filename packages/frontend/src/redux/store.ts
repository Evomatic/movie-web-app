import { configureStore } from "@reduxjs/toolkit";
import { authAPI, signupAPI } from "../services/auth.service";
import { authReducer } from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    authReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [signupAPI.reducerPath]: signupAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authAPI.middleware, signupAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
