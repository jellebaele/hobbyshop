import './assets/styles/app.scss'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/product/ProductsListPage';
import NotExistsPage from './pages/NotExistsPage';
import Navbar from './components/ui/Navbar';
import SingleProductPage from './pages/product/SingleProductPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/user/ProfilePage';
import EditProductPage from './pages/product/EditProductPage';

function App() {
  const location = useLocation();
  const previousLocationModal = location.state?.previousLocation;

  return (
    <div className='rootContainer'>
      <Routes location={previousLocationModal || location}>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductsListPage />} />
            <Route path='edit/:productId' element={<EditProductPage />} />
          </Route>
          <Route path='profile' element={<ProfilePage />} />
          <Route path="*" element={<NotExistsPage />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
      </Routes>


      {previousLocationModal && (
        <Routes>
          <Route path='/products/:productId' element={<SingleProductPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
