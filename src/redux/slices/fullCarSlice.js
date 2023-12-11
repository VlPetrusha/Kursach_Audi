import { createSlice } from "@reduxjs/toolkit";
import { Exception } from "sass";

const initialState = {
  currentCar: null,
  status: "idle",
};

const fullCarSlice = createSlice({
  name: "fullCar",
  initialState,
  reducers: {
    tryFetchCarFromLocalStorage(state, action) {
      try {
        let data = localStorage.getItem("currentCar");

        if (!data) throw new Exception("there's no data in local storage");

        state.currentCar = JSON.parse(data);
      } catch (err) {
        console.log(err.message);
      }
    },
    setFullCar(state, action) {
      if (!action.payload) return;

      localStorage.setItem("currentCar", JSON.stringify(action.payload));

      state.currentCar = action.payload;
    },
  },
});

export const { setFullCar, tryFetchCarFromLocalStorage } = fullCarSlice.actions;

export const fullCarReducers = fullCarSlice.reducer;
