import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    sizes: [],
    colors: [],
  },
  reducers: {
    getAllCategories: (state, action) => {
      state.categories = action.payload;
    },
    getAllSizes: (state, action) => {
      state.sizes = action.payload;
    },
    getAllColors: (state, action) => {
      state.colors = action.payload;
    },
  },
});

export const { getAllCategories, getAllSizes, getAllColors } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
