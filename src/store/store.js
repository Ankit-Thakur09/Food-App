import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../feature/Counter";
import cartReducer from "../feature/CounterThis";

const store = configureStore({
  reducer: {
    counter: cartReducer, // Handles "counter" slice
    // count: counterReducer, // Handles "count" slice
    
  },
});
    export default store;
