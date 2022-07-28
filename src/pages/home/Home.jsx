import React from 'react';
import './home.scss';
import Header from '../../components/header/Header';
import OrderTable from '../../components/table/order-table/basic/OrderTable';
import BasicProductTable from '../../features/Product/tables/basic/BasicTable';

const Home = () => {
   return (
      <div className="homeContainer">
         <Header pageTitle={'Dashboard'} />
         <div className="bodyContainer">
            <div className="tableContainer">
               <BasicProductTable />
            </div>
            <div className="tableContainer">
               <OrderTable />
            </div>
         </div>
      </div>
   );
};

export default Home;
