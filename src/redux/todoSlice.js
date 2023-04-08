import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './operations';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  // reducers: {
  //   addTodo(state, action) {
  //     state.items = [...state.items, action.payload];
  //   },
  //   deleteTodo(state, action) {
  //     state.items = state.items.filter(item => item.id !== action.payload);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      });
  },
});

// export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
