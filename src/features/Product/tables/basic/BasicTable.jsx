import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import useIsMobile from '../../../../hooks/useIsMobile';
import ProductInfoModal from '../../../../components/modal/product/ProductInfoModal';
import BasicTableHeader from '../../../../components/table/BasicTableHeader';
import TableTitle from '../../../../components/table/TableTitle';
import './basic-table.scss';
import {
   productColumnLayoutDesktop,
   productColumnLayoutMobile,
} from '../productTableLayout';
import BasicProductRow from './BasicRow';

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

   const handleModalClose = () => {
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
         <TableTitle title="Producten" to="/products" className="tableTitle" />
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
         <ProductInfoModal
            open={openInfoModal}
            onModalClose={handleModalClose}
            productId={productIdModal}
         />
      </div>
   );
};

export default BasicProductTable;
