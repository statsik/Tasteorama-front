import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchRecepies, addRecepie, deleteRecepie } from "./operations";
import { logout } from "../auth/operations";
import { selectRecepieFilter } from "../filters/selectors";

export const selectAllRecepies = (state) => state.recepies.items;
export const selectRecepiesLoading = (state) => state.recepies.loading;
export const selectRecepiesError = (state) => state.recepies.error;

export const selectFilteredRecepies = createSelector(
  [selectAllRecepies, selectRecepieFilter],
  (recepies, filter) =>
    recepies.filter((r) =>
      r.name.toLowerCase().includes(filter.toLowerCase())
    )
);

const sliceRecepies = createSlice({
  name: "recepies",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecepies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecepies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecepies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addRecepie.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteRecepie.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (r) => r.id !== action.payload.id
        );
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });
  },
});

const recepiesReducer = sliceRecepies.reducer;
export default recepiesReducer;
