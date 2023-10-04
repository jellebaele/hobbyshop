import '../../assets/styles/pages/products/editProductPage.scss';
import Container from '../../components/ui/Container';
import Header from '../../components/ui/Header';
import { useNavigate } from 'react-router-dom';
import EditProductForm from '../../features/products/components/EditProductForm';
import IconButton from '../../components/ui/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditProductPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="top">
        <Header>Product bewerken</Header>
        <IconButton iconLeft={<ArrowBackIcon />} onClick={() => navigate(-1)}>
          Terug
        </IconButton>
      </div>
      <div className="center">
        <EditProductForm />
      </div>
    </Container>
  );
};

export default EditProductPage;
