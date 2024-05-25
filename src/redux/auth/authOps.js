import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const registerNewUser = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userCreds, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userCreds);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);





// Mari
// marimari@GiMailShirt.com
//12345678


// Noname
// Noname@mail.com
// 123456789

// newuser
// la

// FcCm3MrE!qPEWc: