import { configureStore } from "@reduxjs/toolkit";
import { reducer as driverReducer } from "./driver/driverSlice";

const reducers = {
  driver: driverReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;
