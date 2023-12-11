import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    category: "All",
    size: "All",
    color: "All",
    gender: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setCategory, setSize, setColor, setGender } = filterSlice.actions;

export default filterSlice.reducer;
