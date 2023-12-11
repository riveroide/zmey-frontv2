import { createSlice } from "@reduxjs/toolkit";

export const codesSlice = createSlice({
  name: "codes",
  initialState: {
    codes: [],
    registeredEmails: [],
  },
  reducers: {
    getAllCodes: (state, action) => {
      state.codes = action.payload;
    },
    getAllRegisteredEmails: (state, action) => {
      state.registeredEmails = action.payload;
    },
  },
});

export const { getAllCodes, getAllRegisteredEmails } = codesSlice.actions;

export default codesSlice.reducer;
