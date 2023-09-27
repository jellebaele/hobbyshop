import { useParams } from 'react-router-dom'
import '../../assets/styles/pages/products/editProductPage.scss'
import Container from '../../components/ui/Container'
import { useAppSelector } from '../../context/hooks'
import { selectProductById } from '../../features/products/productsSlice'
import Header from '../../components/ui/Header'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import EditProductForm from '../../features/products/EditProductForm'

const EditProductPage = () => {
  const { productId } = useParams()
  const product = useAppSelector(state => selectProductById(state, productId))

  return (
    <Container>
      <div className="top">
        <Header>Product bewerken</Header>
        {/* TODO Previous page */}
        <Link to={'/products'}>
          {/* <IconButton iconLeft={ArrowBackIcon} />
          <ArrowBackIcon /> Terug */}
          <Button>Terug</Button>
        </Link>
      </div>
      <div className="center">
        {product && <EditProductForm product={product} />}
      </div>

    </Container >

  )
}

export default EditProductPage