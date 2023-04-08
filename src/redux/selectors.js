import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.items;

export const selectfilter = state => state.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectfilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
