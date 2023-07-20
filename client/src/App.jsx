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
import RegisterSucces from './pages/register-success/RegisterSucces';
import LoggedInRoute from './components/routes/LoggedInRoute';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, selectCurrentUser } from './redux/authSlice';
import { useEffect } from 'react';
import Logout from './pages/logout/Logout';

const routesWithoutSidebar = [
  '/login',
  '/login/success',
  '/register',
  '/register/success',
  '/logout',
];

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const getUser = async () => {
      if (isUserLoggedIn) await dispatch(fetchCurrentUser()).unwrap();
    };

    getUser();
  }, [dispatch, isUserLoggedIn]);

  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="appContainer">
      {!routesWithoutSidebar.includes(pathname) && (
        <Sidebar className="sidebar" />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/register/success" element={<RegisterSucces />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<LoggedInRoute user={currentUser} />}>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/my-profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
