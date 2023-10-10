import { createSlice } from "@reduxjs/toolkit";
console.log();

const todoSlice = createSlice({
  name: "todo",
  initialState: { list: [] },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    updateStatus: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    editTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name }
          : todo
      );
    },
    setTodos: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateStatus, editTodo, setTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
