import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = '';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
}; 
export const register = createAsyncThunk("auth/register", async(newRegister, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newRegister);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
})

export const login = createAsyncThunk("auth/login", async(login, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", login);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
})

export const logout = createAsyncThunk("auth/logout", async(logout, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout");
      clearAuthHeader();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);