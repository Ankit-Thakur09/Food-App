import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value >= 10) { state.value = 10 }
      else{state.value += 1;}
      
      console.log("clicked");
    },
    decrement: (state) => {
      if (state.value <= 0) {
        state.value = 0;
      } else {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
