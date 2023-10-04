import { selectAllProducts } from '../context/productsSlice';
import ProductExcerpt from './ProductExcerpt';
import { useAppSelector } from '../../../context/hooks';

type ProductListProps = {
  isSummarized?: boolean;
};

const ProductList = ({ isSummarized = false }: ProductListProps) => {
  const products = useAppSelector(selectAllProducts);

  return (
    <div>
      {products.map((product) => (
        <ProductExcerpt
          product={product}
          isSummarized={isSummarized}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
