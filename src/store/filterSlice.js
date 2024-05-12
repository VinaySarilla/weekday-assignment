import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
