import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';
import { ReduxStatus } from '../../shared/constants/ReduxStatus';
import { RootState } from '../../context/store';

interface productState {
  data: Product[];
  status: ReduxStatus;
  error: Error | null;
}

const initialState: productState = {
  data: [
    {
      id: '1',
      name: 'Appel',
      amount: 5,
      unit: 'stuks',
      user: 'Herman',
      status: 'Actief',
      category: 'Fruit',
      dateUpdated: new Date(),
    },
    {
      id: '2',
      name: 'Peer',
      amount: 2,
      unit: 'stuks',
      user: 'Herman',
      status: 'Actief',
      category: 'Fruit',
      dateUpdated: new Date(),
    },
    {
      id: '3',
      name: 'Appel',
      amount: 5,
      unit: 'stuks',
      user: 'Herman',
      status: 'Inactief',
      category: 'Fruit',
      dateUpdated: new Date(),
    },
  ],
  status: ReduxStatus.Idle,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;

export const selectAllProducts = (state: RootState): Product[] => state.products.data;
export const selectProductById = (
  state: RootState,
  productId: string | undefined
): Product | undefined => state.products.data.find((product) => product.id === productId);
