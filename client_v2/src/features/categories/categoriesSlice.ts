import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../../models/Category';
import { ReduxStatus } from '../../shared/constants/ReduxStatus';
import { RootState } from '../../context/store';

interface categoryState {
  data: Category[];
  status: ReduxStatus;
  error: Error | null;
}

const initialState: categoryState = {
  data: [
    {
      id: 'c1',
      name: 'Fruit',
    },
    {
      id: 'c2',
      name: 'Groente',
    },
  ],
  status: ReduxStatus.Idle,
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categorySlice.reducer;

export const selectAllCategories = (state: RootState): Category[] => state.categories.data;
export const selectCategoryById = (
  state: RootState,
  categoryId: string | undefined
): Category | undefined => state.categories.data.find((category) => category.id === categoryId);
