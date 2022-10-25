import { createSlice } from "@reduxjs/toolkit";

const driverSlice = createSlice({
  name: "driver",
  initialState: {
    valueExample: 0,
  },
  reducers: {
    example: (state) => {
      state.valueExample += 1;
    },
    exampleWithAction: (state, action) => {
      state.valueExample = action.payload;
    },
  },
});

export const { reducer, actions } = driverSlice;
export const { example, exampleWithAction } = driverSlice.actions;
