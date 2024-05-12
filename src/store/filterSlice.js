import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };

      Object.keys(action.payload).forEach((key) => {
        if (action.payload[key] === null) {
          delete state.value[key];
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
