import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';

function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/" element={<Home />} />
               <Route path="/orders" element={<Orders />} />
               <Route path="/products" element={<Products />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
