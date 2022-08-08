import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import './basic-order-table.scss';
import BasicTableHeader from '../../../../components/table/BasicTableHeader';
import useIsMobile from '../../../../hooks/useIsMobile';
import {
   orderColumnLayoutDesktop,
   orderColumnLayoutMobile,
   orderColumnLayoutTablet,
} from '../orderTableLayout';
import useIsTablet from '../../../../hooks/useIsTablet';
import TableTitleLink from '../../../../components/table/TableTitleLink';
import BasicOrderRow from './BasicOrderRow';
import InfoOrderModal from '../../modals/InfoOrderModel';

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

const BasicOrderTable = () => {
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
         <TableTitleLink title="Orders" to="/orders" className="tableTitle" />
         <div className="tableContainerWrapper">
            <TableContainer component={Paper}>
               <Table size={isMobile ? 'small' : 'medium'}>
                  <BasicTableHeader columns={getColumnLayout()} />
                  <TableBody>
                     {data.map((row) => (
                        <BasicOrderRow
                           key={row._id}
                           row={row}
                           handleModalOpen={handleModalOpen}
                        />
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
         <InfoOrderModal
            open={openInfoModal}
            handleOnClose={handleModalClose}
            orderId={orderIdModal}
         />
      </div>
   );
};

export default BasicOrderTable;
