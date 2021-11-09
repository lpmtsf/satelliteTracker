import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "./store";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 10000,
    results: Array(),
    searchId: "",
    showDetailsId: null,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addNewResult: (state, action: PayloadAction<any>) => {
      state.results.push(action.payload);
    },
    updateSearchId: (state, action) => {
      state.searchId = action.payload;
    },
    updateShowDetailsId: (state, action) => {
      state.showDetailsId = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addNewResult,
  updateSearchId,
  updateShowDetailsId,
} = slice.actions;

export type AppDispatch = typeof store.dispatch;
export const incrementAsync = (amount: Number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export type RootState = ReturnType<typeof store.getState>;
export const selectCount = (state: RootState) => state.counter.value;
export const selectSearchId = (state: RootState) => state.counter.searchId;
export const selectResults = (state: RootState) => state.counter.results;
export const selectDetails = (state: RootState) => state.counter.showDetailsId;

export default slice.reducer;
