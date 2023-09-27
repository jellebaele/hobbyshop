import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import categoryReducer from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
