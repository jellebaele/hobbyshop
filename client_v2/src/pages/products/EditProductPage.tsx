import '../../assets/styles/pages/products/editProductPage.scss';
import Container from '../../components/ui/Container';
import Header from '../../components/ui/Header';
import { useNavigate, useParams } from 'react-router-dom';
import EditProductForm from '../../features/products/components/EditProductForm';
import IconButton from '../../components/ui/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '../../context/hooks';
import { selectProductById } from '../../features/products/context/productsSlice';
import { selectCategoryById } from '../../features/categories/categoriesSlice';
import { formatDateTime } from '../../shared/utils/format';

const EditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = useAppSelector((state) => selectProductById(state, productId));

  const categoryName =
    useAppSelector((state) => selectCategoryById(state, product?.category))?.name ?? '';

  return (
    <Container>
      <div className="top">
        <Header>Product bewerken</Header>
        <IconButton iconLeft={<ArrowBackIcon />} onClick={() => navigate(-1)}>
          Terug
        </IconButton>
      </div>
      <div className="center">
        {product ? (
          <EditProductForm
            product={{
              ...product,
              category: categoryName,
              createdAt: formatDateTime(product.createdAt),
            }}
          />
        ) : (
          'Product niet gevonden'
        )}
      </div>
    </Container>
  );
};

export default EditProductPage;
