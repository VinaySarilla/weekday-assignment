import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";

const initialState = {
  value: [],
  filteredValues: [],
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateJobs: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateJobs } = jobSlice.actions;

export default jobSlice.reducer;
