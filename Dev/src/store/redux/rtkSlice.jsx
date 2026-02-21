import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("rtk/fetchTodos", async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=1"
  );
  const data = await res.json();
  return data;
});

export const rtkSlice = createSlice({
  name: "rtk",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { addTodos } = rtkSlice.actions;
export default rtkSlice.reducer;
