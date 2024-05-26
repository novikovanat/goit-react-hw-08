import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { ...contact });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async ([values, contactId, index], thunkAPI) => {
    const reduxState = thunkAPI.getState();
    // if(reduxState.contacts[index])
    // const savedToken = reduxState.auth.token;
    try {
      // setAuthorizationHeader(savedToken);
      // const response = await axios.get("/users/current");
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    // condition(_, thunkAPI) {
    //   const reduxState = thunkAPI.getState();
    //   const savedToken = reduxState.auth.token;
    //   return savedToken !== null;
    // },
  }
);