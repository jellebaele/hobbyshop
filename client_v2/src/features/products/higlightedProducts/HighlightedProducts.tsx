import './highlightedProducts.scss'
import { Link } from 'react-router-dom'
import Button from '../../../components/ui/button/Button'
import ProductList from '../productList/ProductList'

const HighlightedProducts = () => {
  return (
    <div className="higlightedProductsContainer">
      <div className="top">
        <h2 className="containerTitle">Uitgelichte producten</h2>
        <Link to={'/products'}>
          <Button>Alle producten</Button>
        </Link>
      </div>
      <div className="content">
        <ProductList />
      </div>
    </div>

  )
}

export default HighlightedProducts