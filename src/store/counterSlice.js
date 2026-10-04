import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  step: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += state.step;
    },

    decrement: (state) => {
      if (state.count - state.step >= 0) {
        state.count -= state.step;
      }
    },

    updateStep: (state, action) => {
      state.step = action.payload;
    },

    reset: (state) => { 
      state.count = 0;
      state.step = 1;
    }
}
});

export const { increment, decrement, updateStep, reset } = counterSlice.actions;
