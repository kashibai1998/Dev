import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos",async ()=>{
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  // .then(res=>res.json())
  // .then(data=>data)
  // const data = await res.json()
  console.log("data",res.data)
  return res.data

})

const newTodoSlice = createSlice({
  name: "todo",
  initialState: [
    // {
    //   id: 1,
    //   title: "kashi",
    //   // status: "Active",
    // },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log(state)
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
  
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchTodos.pending, (state, action) => {
      // state.isLoading = true;
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      // state.isLoading = false;
      console.log("fullfilled")
      state.push(...action.payload);
      console.log("k",state)
    })
    .addCase(fetchTodos.rejected, (state, action) => {
      // state.loading = false;
      // state.error = action.payload;
    });
  }
});

export const { addTodo, deleteTodo,updateTodo} = newTodoSlice.actions;
export default newTodoSlice.reducer;
