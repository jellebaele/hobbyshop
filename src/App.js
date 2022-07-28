import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';
import './app.scss';
import Sidebar from './components/sidebar/Sidebar';

function App() {
   const { pathname } = useLocation();

   return (
      <div className="appContainer">
         {pathname !== '/login' && <Sidebar className="sidebar" />}
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
         </Routes>
      </div>
   );
}

export default App;
