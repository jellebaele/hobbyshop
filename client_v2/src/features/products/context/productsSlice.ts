import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../models/Product';
import { ReduxStatus } from '../../../shared/constants/ReduxStatus';
import { RootState } from '../../../context/store';

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
      category: 'c2',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Peer',
      amount: 2,
      unit: 'stuks',
      user: 'Herman',
      status: 'Actief',
      category: 'c1',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'Appel',
      amount: 5,
      unit: 'stuks',
      user: 'Herman',
      status: 'Inactief',
      category: 'c1',
      createdAt: new Date().toISOString(),
    },
  ],
  status: ReduxStatus.Idle,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productUpdated(state, action: PayloadAction<Product>) {
      const updateProductProps = action.payload;

      const existingProduct = state.data.find((product) => product.id === updateProductProps.id);

      if (existingProduct) {
        existingProduct.name = updateProductProps.name;
        existingProduct.amount = updateProductProps.amount;
        existingProduct.unit = updateProductProps.unit;
        existingProduct.user = updateProductProps.user;
        existingProduct.status = updateProductProps.status;
        existingProduct.category = updateProductProps.category;
      }
    },
    productDeleted(state, action: PayloadAction<Product>) {
      const productToDelete = action.payload;
      const existingProduct = state.data.find((product) => product.id === productToDelete.id);

      if (existingProduct) {
        state.data = state.data.filter((product) => product.id !== existingProduct.id);
      }
    },
  },
});

export default productsSlice.reducer;

export const { productUpdated, productDeleted } = productsSlice.actions;

export const selectAllProducts = (state: RootState): Product[] => state.products.data;
export const selectProductById = (
  state: RootState,
  productId: string | undefined
): Product | undefined => state.products.data.find((product: Product) => product.id === productId);
