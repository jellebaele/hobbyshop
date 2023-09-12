import ProductExcerpt from '../productExcerpt/productExcerpt';

const HighlightedProductList = () => {

  return <div className='productList'>
    {products.map(product => <ProductExcerpt product={product} key={product.id} />)}
  </div>;

}

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
  }]

export default HighlightedProductList