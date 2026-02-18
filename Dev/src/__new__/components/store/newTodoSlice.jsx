import { createSlice } from "@reduxjs/toolkit";

const newTodoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      name: "kashi",
      status: "Active",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = newTodoSlice.actions;
export default newTodoSlice.reducer;
