import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6813b4c0129f6313e2121e04.mockapi.io";

export const fetchRecepies = createAsyncThunk(
  "recepies/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recepies");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRecepie = createAsyncThunk(
  "recepies/addRecepie",
  async (newRecepie, thunkAPI) => {
    try {
      const response = await axios.post("/recepies", newRecepie);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteRecepie = createAsyncThunk(
  "recepies/deleteRecepie",
  async (recepieId, thunkAPI) => {
    try {
      const response = await axios.delete(`/recepies/${recepieId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
