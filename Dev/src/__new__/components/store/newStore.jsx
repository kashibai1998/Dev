import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./newTodoSlice";

const newStore = configureStore({
  reducer: {
    "newTodo": TodoReducer
  },
});

export default newStore;
