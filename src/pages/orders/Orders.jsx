import React from 'react';
import Header from '../../components/header/Header';
import './orders.scss';
import TableContainer from './TableContainer';

const Orders = () => {
   return (
      <div className="ordersContainer">
         <Header pageTitle="Orders" />
         <div className="bodyContainer">
            <TableContainer title="Alle orders">
               <div className="ordersT">Table enal</div>
            </TableContainer>

            <TableContainer title="Mijn orders">
               <div className="ordersT">Table enal</div>
            </TableContainer>
         </div>
      </div>
   );
};

export default Orders;
