import { Link, useLocation } from 'react-router-dom'
import './productExcerpt.scss'
import Button from '../../../components/ui/Button'
import { Product } from '../../../models/Product'

type productExcerptProps = {
  product: Product
  isSummarized?: boolean
}

const ProductExcerpt = ({ product, isSummarized = false }: productExcerptProps) => {
  const location = useLocation();

  return (
    <div className='singleProduct'>
      <div className="left">
        <Link to={`/products/${product.id}`} state={{ previousLocation: location }}>
          <h3>{product.name}</h3>
        </Link>
        <div className="content">
          <div>
            <div className="infoItem">{`Aantal: ${product.amount} ${product.unit}`}</div>
            <div className="infoItem">{`Eigenaar: ${product.user}`}</div>
          </div>
        </div>
      </div>
      <div className="right">
        <Link to={`/products/${product.id}`} state={{ previousLocation: location }}>
          <Button className='button'>Meer info</Button>
        </Link>
      </div>

    </div>

  )
}

export default ProductExcerpt