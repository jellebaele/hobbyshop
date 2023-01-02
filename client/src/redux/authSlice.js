import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    name: 'Jelle',
  },
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // reducers: {
  //   userLoggedIn(state, action) {

  //   }
  // },
});

export const selectCurrentUser = (state) => state.auth.currentUser;

export default authSlice.reducer;
