import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/User';
import { ReduxStatus } from '../../shared/constants/ReduxStatus';

interface authState {
  data?: User | null;
  status: ReduxStatus;
  error?: Error | null;
}

const initialState: authState = {
  data: null,
  status: ReduxStatus.Idle,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
