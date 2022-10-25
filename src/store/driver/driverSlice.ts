import { createSlice } from "@reduxjs/toolkit";

const driverSlice = createSlice({
  name: "driver",
  initialState: {
    driversData: [],
  },
  reducers: {
    setDrivers: (state, action) => {
      state.driversData = action.payload;
    },
  },
});

export const { reducer, actions } = driverSlice;
export const { setDrivers } = driverSlice.actions;
