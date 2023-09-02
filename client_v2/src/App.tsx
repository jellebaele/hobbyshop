import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/ProductsListPage';
import NotExistsPage from './pages/NotExistsPage';
import Navbar from './components/ui/Navbar';
import SingleProductPage from './pages/SingleProductPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsListPage />} />
          <Route path="products/:productId" element={<SingleProductPage />} />
          <Route path="*" element={<NotExistsPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
