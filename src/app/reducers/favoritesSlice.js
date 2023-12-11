import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    oneFavorite: {},
  },
  reducers: {
    getAllFavorites: (state, action) => {
      state.favorites = action.payload.sort((a, b) => {
        if (a.createdAt < b.createdAt) return 1;
        else if (a.createdAt > b.createdAt) return -1;
        else return 0;
      });
    },
    getOneFavorite: (state, action) => {
      state.oneFavorite = action.payload;
    },
  },
});

export const { getAllFavorites, getOneFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
