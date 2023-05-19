import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations";

// I don't need password place, becouse of token I don't need to save it
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  // isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  // initialState: initialState, //or less code:
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      //here will be nothing, if I don't comment code with token, i can add:
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      // state.isRefreshing = false;
    },
    [register.pending](state, action) {
      // state.isRefreshing = true;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
      // state.isRefreshing = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.isRefreshing = false;
    },
    [logIn.pending](state, action) {
      // state.isRefreshing = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
      // state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
