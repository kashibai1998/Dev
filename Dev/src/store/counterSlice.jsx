import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    inc: (state, action) => {
      state.count = state.count + 1;
    },
    dec: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

export const {inc,dec} = counterSlice.actions;
export default counterSlice.reducer;
