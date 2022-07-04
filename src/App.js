import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebarv2/Sidebar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';

function App() {
   const { pathname } = useLocation();

   return (
      <div>
         {pathname !== '/login' && <Sidebar />}
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
