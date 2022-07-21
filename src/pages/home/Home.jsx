import React from 'react';
import './home.scss';
import Header from '../../components/header/Header';
import OrderTable from '../../components/table/order-table/OrderTable';
import ProductTableBasic from '../../components/table/product-table/ProductTableBasic';

const Home = () => {
   return (
      <div className="homeContainer">
         <Header pageTitle={'Dashboard'} />
         <div className="bodyContainer">
            <div className="tableContainer">
               <ProductTableBasic />
            </div>
            <div className="tableContainer">
               <OrderTable />
            </div>
         </div>
      </div>
   );
};

export default Home;
