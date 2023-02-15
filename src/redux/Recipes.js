import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    data: {},
    searchInput: "",
  },
  reducers: {
    updateData(state, action) {
      return { ...state, data: action.payload };
    },
    updateSearch(state, action) {
      return { ...state, searchInput: action.payload };
    },
  },
});

export const { updateData, updateSearch } = recipeSlice.actions;

export default recipeSlice.reducer;
