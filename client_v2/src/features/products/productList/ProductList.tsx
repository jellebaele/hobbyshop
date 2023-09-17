import { useSelector } from 'react-redux';
import ProductExcerpt from '../productExcerpt/productExcerpt';
import { selectAllProducts } from '../productsSlice';

type ProductListProps = {
  isSummarized?: boolean
}

const ProductList = ({ isSummarized = false }: ProductListProps) => {
  const products = useSelector(selectAllProducts)

  return <div>
    {products.map(product => <ProductExcerpt product={product} isSummarized={isSummarized} key={product.id} />)}
  </div>;
}

// const products = [
//   {
//     id: "1",
//     name: "Appel",
//     amount: 5,
//     unit: "stuks",
//     user: "Herman",
//     status: "actief"
//   },
//   {
//     id: "2",
//     name: "Appel",
//     amount: 5,
//     unit: "stuks",
//     user: "Herman",
//     status: "actief"
//   },
//   {
//     id: "3",
//     name: "Appel",
//     amount: 5,
//     unit: "stuks",
//     user: "Herman",
//     status: "actief"
//   }]

export default ProductList