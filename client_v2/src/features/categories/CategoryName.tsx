import { useAppSelector } from '../../context/hooks';
import { selectCategoryById } from './categoriesSlice';

const CategoryName = ({ categoryId }: { categoryId: string }) => {
  const category = useAppSelector((state) => selectCategoryById(state, categoryId))

  return <div>{category?.name}</div>;
};

export default CategoryName;
