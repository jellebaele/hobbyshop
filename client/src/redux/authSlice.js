import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../services/authService';

const initialState = {
  currentUser: null,
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkApi) => {
    return authService
      .login(username, password)
      .then((response) => response)
      .catch((error) => {
        return thunkApi.rejectWithValue(
          `${error.message}: ${JSON.stringify(error.response?.data)}` || error
        );
      });
  }
);

export const fetchCurrentUser = createAsyncThunk(
  '/auth/fetchCurrentUser',
  async (thunkApi) => {
    return authService
      .fetchCurrentUser()
      .then((response) => response)
      .catch((error) => {
        return thunkApi.rejectWithValue(
          `${error.message}: ${JSON.stringify(error.response?.data)}` || error
        );
      });
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.rejected, (state, action) => {
      state.currentUser = null;
      state.error = action.payload;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.currentUser = null;
      state.error = action.payload;
    });
  },
});

export const selectCurrentUser = (state) => state.auth.currentUser;

export default authSlice.reducer;
