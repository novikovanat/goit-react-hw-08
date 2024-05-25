import { createSlice } from "@reduxjs/toolkit";
import { login, registerNewUser } from "./authOps";

// function handleAuth(state,action)=>{
//   state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.user.name = action.payload.user.name;
//         state.user.email = action.payload.user.email;
// }

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
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      });
  },
});

export const authReducer = authSlice.reducer;
