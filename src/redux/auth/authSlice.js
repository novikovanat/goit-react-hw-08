import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, logout, registerNewUser } from "./authOps";

function handleAuth(state, action) {
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerNewUser.fulfilled, handleAuth)
      .addCase(login.fulfilled, handleAuth)
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      });
  },
});

export const authReducer = authSlice.reducer;
