import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteTodo(state, action) {},
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
