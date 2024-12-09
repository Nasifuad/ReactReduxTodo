import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ name: "Create an Todo App", id: 1 }],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        name: action.payload,
        id: nanoid(),
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
