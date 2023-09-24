import { Link } from "react-router-dom"
import "../assets/styles/pages/homePage.scss"
import Button from "../components/ui/Button"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductList from "../features/products/ProductList";
import Container from "../components/ui/Container";
import Header from "../components/ui/Header";

const HomePage = () => {
  const renderHighlightedProducts = () => {
    return (
      <Container>
        <div className="top">
          <Header>Uitgelichte product </Header>
          <Link to={'/products'}>
            <Button className='button'>
              Alle producten <ArrowForwardIcon className='icon' />
            </Button>
          </Link>
        </div>
        <div>
          <ProductList />
        </div>
      </Container>

    )
  }

  return (
    <div className='homeContainer'>
      {renderHighlightedProducts()}
    </div >
  )
}

export default HomePage