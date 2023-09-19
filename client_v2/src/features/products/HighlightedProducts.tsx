import '../../assets/styles/features/products/highlightedProducts.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import ProductList from './ProductList'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HighlightedProducts = () => {
  return (
    <div className="higlightedProductsContainer">
      <div className="top">
        <h2>Uitgelichte producten</h2>
        <Link to={'/products'}>
          <Button className='button'>
            Alle producten <ArrowForwardIcon className='icon' />
          </Button>
        </Link>
      </div>
      <div>
        <ProductList />
      </div>
    </div>

  )
}

export default HighlightedProducts