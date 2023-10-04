import { Link } from 'react-router-dom';
import '../assets/styles/pages/homePage.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductList from '../features/products/ProductList';
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import IconButton from '../components/ui/IconButton';

const HomePage = () => {
  const renderHighlightedProducts = () => {
    return (
      <Container>
        <div className="top">
          <Header>Uitgelichte product </Header>
          <Link to={'/products'}>
            <IconButton iconRight={<ArrowForwardIcon />}>
              Alle producten
            </IconButton>
          </Link>
        </div>
        <div>
          <ProductList />
        </div>
      </Container>
    );
  };

  return <div className="homeContainer">{renderHighlightedProducts()}</div>;
};

export default HomePage;
