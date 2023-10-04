import ProductExcerpt from './ProductExcerpt';
import { Product } from '../../../models/Product';

type ProductListProps = {
  products: Product[];
  isSummarized?: boolean;
};

const ProductList = ({ products, isSummarized = false }: ProductListProps) => {
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
