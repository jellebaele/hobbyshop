import './app.scss'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/product/ProductsListPage';
import NotExistsPage from './pages/NotExistsPage';
import Navbar from './components/ui/navbar/Navbar';
import SingleProductPage from './pages/product/SingleProductPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/user/ProfilePage';

function App() {
  return (
    <div className='rootContainer'>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsListPage />} />
          <Route path="products/:productId" element={<SingleProductPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path="*" element={<NotExistsPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
