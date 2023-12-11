import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    allUsers: [],
    
  },
  reducers: {
    GetAllUsers: (state, action) => {
      state.allUsers = action.payload
    },
  },
});

export const { GetAllUsers } = adminSlice.actions;

export default adminSlice.reducer;
