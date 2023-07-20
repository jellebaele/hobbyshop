import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../services/authService';

const initialState = {
  isLoggedIn: false,
  currentUser: null,
  status: {
    logout: 'idle',
  },
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

export const logout = createAsyncThunk('auth/logout', async (thunkApi) => {
  return authService
    .logout()
    .then((response) => response)
    .catch((error) => {
      return thunkApi.rejectWithValue(
        `${error.message}: ${JSON.stringify(error.response?.data)}` || error
      );
    });
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.currentUser = null;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state, payload) => {
        state.status.logout = 'pending';
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status.logout = 'succeeded';
        state.isLoggedIn = false;
        state.currentUser = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status.logout = 'rejected';
        state.error = action.payload;
      });
  },
});

export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectLoginStatus = (state) => state.auth.status.login;
export const selectLogoutStatus = (state) => state.auth.status.logout;

export default authSlice.reducer;
