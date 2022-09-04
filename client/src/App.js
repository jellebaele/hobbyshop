import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';
import './app.scss';
import Sidebar from './components/sidebar/Sidebar';
import MyProducts from './pages/my-products/MyProducts';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import RegisterSucces from './pages/register-succes/RegisterSucces';

function App() {
   const { pathname } = useLocation();

   return (
      <div className="appContainer">
         {pathname !== '/login' &&
            pathname !== '/register' &&
            pathname !== '/register/success' && <Sidebar className="sidebar" />}
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/register/success" element={<RegisterSucces />} />
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/my-products" element={<MyProducts />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/my-profile" element={<Profile />} />
         </Routes>
      </div>
   );
}

export default App;
