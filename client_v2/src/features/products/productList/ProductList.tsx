import './productList.scss'
import ProductExcerpt from '../productExcerpt/productExcerpt';

const ProductList = () => {
  return <div className='productList'>
    {products.map(product => <ProductExcerpt product={product} key={product.id} />)}
  </div>;
};

export default ProductList;

/**
 *   name: string;
  description: string;
  category: string;
  amount: Number;
  unit: string;
  user: string;
  status: string;
 */


const products = [
  {
    id: "1",
    name: "Appel",
    amount: 5,
    unit: "stuks",
    user: "Herman"
  },
  {
    id: "2",
    name: "Appel",
    amount: 5,
    unit: "stuks",
    user: "Herman"
  },
  {
    id: "3",
    name: "Appel",
    amount: 5,
    unit: "stuks",
    user: "Herman"
  }
]