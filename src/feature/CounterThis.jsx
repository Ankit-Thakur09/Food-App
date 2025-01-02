import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counters: {}, // Track counters for each card
    selectedCard: null, // Currently selected card
    cart: [], // Cart to store items
  },
  reducers: {
    increment: (state, action) => {
      const cardId = action.payload;
      if (!state.counters[cardId]) {
        state.counters[cardId] = 0;
      }
      if (state.counters[cardId] <=9) {
        state.counters[cardId] += 1;
      }
      if (state.counters[cardId] > 10) {
        state.counters[cardId] += 0;
      }
    },
    decrement: (state, action) => {
      const cardId = action.payload;
      if (!state.counters[cardId]) {
        state.counters[cardId] = 0;
      }
      if (state.counters[cardId] > 0) {
        state.counters[cardId] -= 1;
      }
    },
    selectCard: (state, action) => {
      state.selectedCard = action.payload; // Set selected card ID
    },
    addedToCart(state, action) {
      const quantity = Number(action.payload.quantity); // Convert quantity to number
      const price = Number(action.payload.price);
      const text = action.payload.text;

      const existingItem = state.cart.find((item) => item.text === text);

      if (existingItem) {
        // Update the quantity and total of the existing item
        existingItem.quantity = quantity;
        existingItem.total = existingItem.quantity * existingItem.price;

        // If quantity is zero, remove the item from the cart
        if (existingItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.text !== text);
        }
      } else {
        // Add a new item to the cart
        state.cart.push({
          text: text,
          price: price,
          quantity: quantity,
          total: quantity * price,
        });
      }
    },
  },
});

export const { increment, decrement, selectCard, addedToCart } =
  counterSlice.actions;

export default counterSlice.reducer;
