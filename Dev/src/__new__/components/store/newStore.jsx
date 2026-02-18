import { configureStore } from "@reduxjs/toolkit";
import newTodoSlice from "./newTodoSlice";

const newStore = configureStore({
  reducer: {
    "newTodo": newTodoSlice.reducer
  },
});

export default newStore;
