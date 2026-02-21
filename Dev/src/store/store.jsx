import { configureStore } from "@reduxjs/toolkit";
import { todoRTK } from "./rtk/rtkQuery";
import rtkSlice from "./redux/rtkSlice";

export const store = configureStore({
  reducer: {
    [todoRTK.reducerPath]: todoRTK.reducer,
    rtkSlice: rtkSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(todoRTK.middleware),
});
