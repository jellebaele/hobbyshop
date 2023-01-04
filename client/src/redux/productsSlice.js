import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const fetchPosts = createAsyncThunk(
  '/products/fetchPost',
  async (thunkApi) => {}
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
});
