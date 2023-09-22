import { Link } from "react-router-dom"
import "../assets/styles/pages/homePage.scss"
import Button from "../components/ui/Button"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductList from "../features/products/ProductList";

const HomePage = () => {
  const renderHighlightedProducts = () => {
    return (<div className="higlightedProductsContainer">
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
    </div>)
  }

  return (
    <div className='homeContainer'>
      {renderHighlightedProducts()}
      {renderHighlightedProducts()}
    </div >
  )
}

export default HomePage