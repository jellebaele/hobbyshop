import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import useIsMobile from '../../../../hooks/useIsMobile';
import BasicTableHeader from '../../../../components/table/BasicTableHeader';
import TableTitleLink from '../../../../components/table/TableTitleLink';
import './basic-product-table.scss';
import {
   productColumnLayoutDesktop,
   productColumnLayoutMobile,
} from '../productTableLayout';
import BasicProductRow from './BasicProductRow';
import InfoProductModal from '../../modals/InfoProductModal';

const data = [
   {
      _id: 'qvq54vqz1ev3saze',
      title: 'Appels',
      description: '/',
      category: 'Fruit',
      amount: '5',
      unit: '',
      owner: 'Herman',
      Status: 'Active',
   },
   {
      _id: 'qvq54vqz1ev3sazsdfe',
      title: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      Status: 'Active',
   },
];

const BasicProductTable = () => {
   const isMobile = useIsMobile();
   const [openInfoModal, setOpenInfoModal] = useState(false);
   const [productIdModal, setProductIdModal] = useState(undefined);

   const handleOnModalClose = () => {
      setOpenInfoModal(false);
   };

   const handleModalOpen = (id) => {
      setProductIdModal(id);
      setOpenInfoModal(true);
   };

   const getColumnLayout = () => {
      return isMobile ? productColumnLayoutMobile : productColumnLayoutDesktop;
   };

   return (
      <div className="productTableContainer">
         <TableTitleLink
            title="Producten"
            to="/products"
            className="tableTitle"
         />
         <div className="tableContainerWrapper">
            <TableContainer component={Paper}>
               <Table size={isMobile ? 'small' : 'medium'}>
                  <BasicTableHeader columns={getColumnLayout()} />
                  <TableBody>
                     {data.map((row) => (
                        <BasicProductRow
                           row={row}
                           handleModalOpen={handleModalOpen}
                           key={row._id}
                        />
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
         <InfoProductModal
            open={openInfoModal}
            handleOnClose={handleOnModalClose}
            productId={productIdModal}
         />
      </div>
   );
};

export default BasicProductTable;
