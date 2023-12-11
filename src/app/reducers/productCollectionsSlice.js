import { createSlice } from "@reduxjs/toolkit";

export const productCollectionsSlice = createSlice({
  name: "productCollections",
  initialState: {
    allCollections: [],
  },
  reducers: {
    getAllCollections: (state, action) => {
      state.allCollections = action.payload;
    }
  },
});

export const { getAllCollections} =
productCollectionsSlice.actions;

export default productCollectionsSlice.reducer;