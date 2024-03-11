import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  email: string;
  accessToken: string;
}

const initialState: AuthState = {
  email: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthenticatedUser: (
      state: AuthState,
      { payload }: PayloadAction<AuthState>
    ) => {
      console.log("authSlice:: setAuthenticatedUser: ", payload);
      state.email = payload.email;
      state.accessToken = payload.accessToken;
    },
    resetState: (state: AuthState) => {
      state.accessToken = "";
      state.email = "";
      localStorage.setItem("user", "");
    },
  },
});

export const { setAuthenticatedUser, resetState } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectAuthenticatedUser = (state: RootState) => state.authReducer;
