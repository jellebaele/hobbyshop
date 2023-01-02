import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      const { username } = action.payload;
      state.currentUser = { username };
    },
  },
});

export const selectCurrentUser = (state) => state.auth.currentUser;

export const { userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
