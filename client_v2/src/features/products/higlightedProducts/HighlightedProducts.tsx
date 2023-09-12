import './highlightedProducts.scss'
import HighlightedProductList from "./HighlightedProductList"
import { Link } from 'react-router-dom'
import Button from '../../../components/ui/button/Button'

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
        <HighlightedProductList />
      </div>
    </div>

  )
}

export default HighlightedProducts