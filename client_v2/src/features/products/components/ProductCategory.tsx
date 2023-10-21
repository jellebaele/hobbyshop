import { useAppSelector } from '../../../context/hooks';
import { selectCategoryById } from '../../categories/categoriesSlice';

const ProductCategory = ({ categoryId }: { categoryId: string }) => {
  const category = useAppSelector((state) =>
    selectCategoryById(state, categoryId)
  );
  return <>{category?.name}</>;
};

export default ProductCategory;
