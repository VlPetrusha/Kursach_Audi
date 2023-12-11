import { configureStore } from "@reduxjs/toolkit";

import { fullCarReducers } from "./slices/fullCarSlice";

const store = configureStore({
  reducer: {
    fullCar: fullCarReducers,
  },
});

export default store;
