import { useSelector } from 'react-redux';
import { selectAllProducts } from '../productsSlice';
import ProductExcerpt from '../productExcerpt/ProductExcerpt';

type ProductListProps = {
  isSummarized?: boolean
}

const ProductList = ({ isSummarized = false }: ProductListProps) => {
  const products = useSelector(selectAllProducts)

  return <div>
    {products.map(product => <ProductExcerpt product={product} isSummarized={isSummarized} key={product.id} />)}
  </div>;
}

export default ProductList