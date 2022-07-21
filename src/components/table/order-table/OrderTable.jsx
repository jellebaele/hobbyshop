import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import Row from './Row';
import './order-table.scss';
import TableHeader from '../table-components/TableHeader';
import useIsMobile from '../../../hooks/useIsMobile';
import {
   orderColumnLayoutDesktop,
   orderColumnLayoutMobile,
   orderColumnLayoutTablet,
} from './utils/orderTableLayout';
import useIsTablet from '../../../hooks/useIsTablet';
import TableTitle from '../table-components/TableTitle';
import OrderInfoModal from '../../modal/order/OrderInfoModal';

const data = [
   {
      _id: '432G01',
      user: 'Jelle',
      products: [
         {
            productId: '33q1q3qs89t',
            productName: 'Appel',
            amount: 3,
         },
         {
            productId: 'qqs46q4svgndgqsbs',
            productName: 'Sla',
            amount: 1,
         },
      ],
      status: 'Pending',
      dateUpdated: '07-06-2022',
   },
   {
      _id: '432F01',
      user: 'Jelle',
      products: [
         {
            productId: '33q1q3qs89t',
            amount: 3,
         },
         {
            productId: 'qqs46q4svgndgqsbs',
            amount: 1,
         },
      ],
      status: 'Delivered',
      dateUpdated: '16-06-2022',
   },
];

const OrderTable = () => {
   const isMobile = useIsMobile();
   const isTablet = useIsTablet();
   const [openInfoModal, setOpenInfoModal] = useState(false);
   const [orderIdModal, setProductIdModal] = useState(undefined);

   const handleModalClose = () => {
      setOpenInfoModal(false);
   };

   const handleModalOpen = (id) => {
      setProductIdModal(id);
      setOpenInfoModal(true);
   };

   const getColumnLayout = () => {
      if (isTablet && isMobile) {
         return orderColumnLayoutMobile;
      } else if (isTablet && !isMobile) {
         return orderColumnLayoutTablet;
      } else {
         return orderColumnLayoutDesktop;
      }
   };

   return (
      <div className="orderTableContainer">
         <TableTitle title="Orders" to="/orders" className="tableTitle" />
         <div className="tableContainerWrapper">
            <TableContainer component={Paper}>
               <Table size={isMobile ? 'small' : 'medium'}>
                  <TableHeader columns={getColumnLayout()} />
                  <TableBody>
                     {data.map((row) => (
                        <Row
                           key={row._id}
                           row={row}
                           handleModalOpen={handleModalOpen}
                        />
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
         <OrderInfoModal
            open={openInfoModal}
            onModalClose={handleModalClose}
            orderId={orderIdModal}
         />
      </div>
   );
};

export default OrderTable;
