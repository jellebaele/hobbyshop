import './assets/styles/app.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/products/ProductsListPage';
import NotExistsPage from './pages/NotExistsPage';
import Navbar from './components/ui/Navbar';
import SingleProductPage from './pages/products/SingleProductPage';
import ProfilePage from './pages/user/ProfilePage';
import EditProductPage from './pages/products/EditProductPage';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';

function App() {
  const location = useLocation();
  const previousLocationModal = location.state?.previousLocation;

  return (
    <div className="rootContainer">
      <Routes location={previousLocationModal || location}>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductsListPage />} />
            <Route path="edit/:productId" element={<EditProductPage />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotExistsPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>

      {previousLocationModal && (
        <Routes>
          <Route path="/products/:productId" element={<SingleProductPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
