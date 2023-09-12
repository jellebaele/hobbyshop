import { Link } from 'react-router-dom'
import './productExcerpt.scss'
import Button from '../../../components/ui/button/Button'

type productExcerptProps = {
  product: {
    id: string,
    name: string,
    amount: number,
    unit: string,
    user: string
  }
}

const ProductExcerpt = ({ product }: productExcerptProps) => {
  return (
    <div className='singleProduct'>
      <div className="left">
        <Link to={`/products/${product.id}`}>
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
        <Button className='button'>Bestel</Button>
        <Link to={`/products/${product.id}`}>
          <Button>Meer info</Button>
        </Link>
      </div>

    </div>

  )
}

export default ProductExcerpt