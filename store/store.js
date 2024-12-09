import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../src/reducer/TodoSlice";
export const store = configureStore({
  reducer: TodoSlice,
});
