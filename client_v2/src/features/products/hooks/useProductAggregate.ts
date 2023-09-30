import { useAppSelector } from '../../../context/hooks';
import { Product } from '../../../models/Product';
import { selectCategoryById } from '../../categories/categoriesSlice';
import { selectProductById } from '../productsSlice';

export const useProductAggregate = (productId: string | undefined) => {
  const product = useAppSelector((state) => selectProductById(state, productId));
  const categoryName = useAppSelector((state) =>
    selectCategoryById(state, product?.category)
  )?.name;

  return { ...product, category: categoryName } as Product;
};
