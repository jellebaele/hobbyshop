import ProductExcerpt from '../productExcerpt/productExcerpt';

type ProductListProps = {
  isSummarized?: boolean
}

const ProductList = ({ isSummarized = false }: ProductListProps) => {

  return <div>
    {products.map(product => <ProductExcerpt product={product} isSummarized={isSummarized} key={product.id} />)}
  </div>;

}

const products = [
  {
    id: "1",
    name: "Appel",
    amount: 5,
    unit: "stuks",
    user: "Herman",
    status: "actief"
  },
  {
    id: "2",
    name: "Appel",
    amount: 5,
    unit: "stuks",
    user: "Herman",
    status: "actief"
  },
  {
    id: "3",
    name: "Appel",
    amount: 5,
    unit: "stuks",
    user: "Herman",
    status: "actief"
  }]

export default ProductList