import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://642e81c22b883abc640f9e88.mockapi.io/api/v1';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/todos');

      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/todos', todo);

      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/todos/${id}`);

      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
